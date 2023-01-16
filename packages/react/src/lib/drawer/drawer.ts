import { useCallback, useEffect, useState } from 'react';
import { useTrigger } from '../trigger/trigger';

export interface UseDrawerProps {
  orientation: 'vertical' | 'horizontal';
  onStateChange?: (active: boolean) => void;
  activeClass?: string;
  active?: boolean;
}

export const useDrawer = ({
  orientation,
  onStateChange,
  activeClass,
  active,
}: UseDrawerProps) => {
  const [drawerPanelRef, setDrawerPanelRef] = useState<HTMLDivElement | null>(
    null
  );
  const [open, setOpen] = useState(active);

  const property = orientation === 'horizontal' ? 'maxWidth' : 'maxHeight';

  useEffect(() => {
    if (!active && drawerPanelRef) {
      drawerPanelRef.style[property] = '0px';
    }

    setOpen(active);
  }, [active, drawerPanelRef]);

  const triggerListener = useCallback(() => {
    setOpen(!open);
    onStateChange?.(!open);

    const panelDimension =
      orientation === 'horizontal'
        ? drawerPanelRef?.scrollWidth
        : drawerPanelRef?.scrollHeight;

    if (!open && drawerPanelRef) {
      drawerPanelRef.style[property] = panelDimension + 'px';

      setTimeout(() => (drawerPanelRef.style[property] = 'fit-content'), 100);
      if (activeClass) drawerPanelRef.classList.toggle(activeClass);
    } else {
      if (drawerPanelRef) {
        drawerPanelRef.style[property] = panelDimension + 'px';
        setTimeout(() => {
          if (activeClass) drawerPanelRef.classList.toggle(activeClass);
          drawerPanelRef.style[property] = '0px';
          setOpen(false);
        }, 100);
      }
    }
  }, [drawerPanelRef, orientation, open]);

  const { triggerRef } = useTrigger({ callback: triggerListener });

  const panelRef = useCallback(
    (ref: HTMLDivElement) => {
      if (ref) {
        setDrawerPanelRef(ref);
        ref.style.overflow = 'hidden';
        ref.style[property] = '0px';
      }
    },
    [orientation]
  );

  return { triggerRef, panelRef };
};
