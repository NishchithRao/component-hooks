import { useCallback, useEffect, useState } from 'react';
import { useTrigger } from '../trigger/trigger';

export interface UseDrawerProps {
  orientation: 'vertical' | 'horizontal';
  /**
   * Classname to be applied when an accordion is open
   */
  activeClassName?: string;
  /**
   * Programatically control the accordion. Determines whether an accordion is open or closed.
   */
  active?: boolean;
  /**
   * Callback fired when an accordion is open/closed.
   * @param state - The state of the accordion
   */
  onStateChange?: (state: boolean) => void;
}

export const useDrawer = ({
  orientation,
  onStateChange,
  activeClassName,
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
      if (activeClassName) drawerPanelRef.classList.toggle(activeClassName);
    } else {
      if (drawerPanelRef) {
        drawerPanelRef.style[property] = panelDimension + 'px';
        setTimeout(() => {
          if (activeClassName) drawerPanelRef.classList.toggle(activeClassName);
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
