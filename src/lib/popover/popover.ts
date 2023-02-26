import { useState, useEffect } from 'react';
import {
  useCombinedRefs,
  convertToPixels,
  useEscapeKey,
  toggleFocus,
  getFocusableELements,
} from '../../utils';
import { useDrawer } from '../drawer';
import { PopoverProps, Positions, PositionTypes } from './popover.interface';

/**
 * A Popover can be used to display some content on top of another.
 * Its an alternative to react-popper.
 *
 * @default
 * - position - 'bottom-center
 * - gap - 0
 * - active - false
 *
 * @returns
 * - triggerRef - ref of the element that will toggle the popover content visibility
 * - panelRef - ref of the content wrapper
 *
 * @example
 *  export const Basic = ({ position, gap }: PopoverProps) => {
 *  const { triggerRef, panelRef } = usePopover({
 *    position: position,
 *    gap: gap,
 *  });
 *  return (
 *    <div>
 *      <button className="popover-trigger" ref={triggerRef}>
 *        Show Popver
 *      </button>
 *      {ReactDOM.createPortal(
 *        <div className="popover-example-root" ref={panelRef}>
 *          <ul className="popover-example">
 *            <li tabIndex={0}>Three</li>
 *            <li tabIndex={0}>Two</li>
 *            <li tabIndex={0}>One</li>
 *          </ul>
 *        </div>,
 *        document.body
 *      )}
 *  </div>
 *  );
 *  };
 */
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

  const flipPositions = {
    top: 'bottom',
    left: 'right',
  };

  const [positions, setPositions] = useState<
    Positions & {
      flip?: string[];
    }
  >();
  const [currentPosition, setCurrentPosition] =
    useState<PositionTypes>('bottom-center');

  const combinedPanelRef = useCombinedRefs(panelRef);
  const combinedTriggerRef = useCombinedRefs(triggerRef);

  useEscapeKey(document, () => setOpen(false));
  toggleFocus(open, getFocusableELements(combinedPanelRef.current)[0]);

  const setAllPositions = () => {
    if (combinedTriggerRef.current && combinedPanelRef.current) {
      const {
        top: triggerTop,
        right: triggerRight,
        bottom: triggerBottom,
        height: triggerHeight,
        left: triggerLeft,
        width: triggerWidth,
      } = combinedTriggerRef.current.getBoundingClientRect();

      const { scrollHeight: panelHeight, scrollWidth: panelWidth } =
        combinedPanelRef.current;
      const centerPosition = triggerLeft + triggerWidth / 2 - panelWidth / 2;
      const windowHeight = window.innerHeight;

      const topAvailable =
        triggerTop + panelHeight >
        windowHeight - (triggerBottom + triggerHeight);
      const leftAvailable = triggerLeft + panelWidth > triggerRight;

      const hasFlip = [!topAvailable && 'top', !leftAvailable && 'left'].filter(
        (i) => !!i
      );

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
        flip: hasFlip as string[],
      });
    }
  };

  useEffect(() => {
    setAllPositions();
  }, [combinedPanelRef, combinedTriggerRef, open]);

  useEffect(() => {
    let decided = position as string;
    positions?.flip?.forEach((pos) => {
      decided = decided.replace(pos, (flipPositions as any)[pos]);
    });
    setCurrentPosition(decided as PositionTypes);
  }, [position, positions]);

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
