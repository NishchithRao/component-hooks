import { useState, useEffect } from 'react';
import { useCombinedRefs, convertToPixels } from '../../utils';
import { useDrawer } from '../drawer';

export type PositionTypes =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export interface PopoverProps {
  active?: boolean;
  position: PositionTypes;
  gap?: number;
  onStateChanged?: (active: boolean) => void;
}

type Positions = {
  [positon in PositionTypes]: {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  };
};

export const usePopover = ({
  position = 'bottom-center',
  gap = 0,
  active = false,
  onStateChanged,
}: PopoverProps) => {
  const [open, setOpen] = useState(false);
  const { triggerRef, panelRef } = useDrawer({
    orientation: 'vertical',
    onStateChange: setOpen,
    active: open,
  });

  const [positions, setPositions] = useState<Positions>();
  const [currentPosition, setCurrentPosition] =
    useState<PositionTypes>('bottom-center');

  const combinedPanelRef = useCombinedRefs(panelRef);
  const combinedTriggerRef = useCombinedRefs(triggerRef);

  const setAllPositions = () => {
    if (combinedTriggerRef.current && combinedPanelRef.current) {
      const {
        top: triggerTop,
        right: triggerRight,
        bottom: triggerBottom,
        left: triggerLeft,
        width: triggerWidth,
      } = combinedTriggerRef.current.getBoundingClientRect();

      const { scrollHeight: panelHeight, scrollWidth: panelWidth } =
        combinedPanelRef.current;
      const centerPosition = triggerLeft + triggerWidth / 2 - panelWidth / 2;

      combinedPanelRef.current.style.minWidth = convertToPixels(triggerWidth);

      setPositions({
        'top-right': {
          top: triggerTop - panelHeight - gap,
          left: triggerRight,
        },
        'bottom-center': {
          top: triggerBottom + gap,
          left: centerPosition,
        },
        'bottom-left': {
          top: triggerBottom + gap,
          left: triggerLeft,
        },
        'bottom-right': {
          top: triggerBottom + gap,
          left: triggerRight,
        },
        'top-left': {
          top: triggerTop - panelHeight - gap,
          left: triggerLeft,
        },
        'top-center': {
          top: triggerTop - panelHeight - gap,
          left: centerPosition,
        },
      });
    }
  };

  useEffect(() => {
    setAllPositions();
  }, [combinedPanelRef, combinedTriggerRef, open]);

  useEffect(() => {
    setCurrentPosition(position);
  }, [position]);

  useEffect(() => {
    setOpen(active);
  }, [active]);

  useEffect(() => {
    onStateChanged?.(open);
  }, [open]);

  useEffect(() => {
    return () => setOpen(false);
  }, []);

  useEffect(() => {
    if (combinedPanelRef.current) {
      combinedPanelRef.current.style.position = 'absolute';

      Object.entries(positions?.[currentPosition] || {}).forEach(
        ([key, value]) => {
          if (combinedPanelRef.current)
            combinedPanelRef.current.style[key as any] = convertToPixels(value);
        }
      );
    }
  }, [combinedPanelRef, positions, currentPosition]);

  return { triggerRef: combinedTriggerRef, panelRef: combinedPanelRef };
};
