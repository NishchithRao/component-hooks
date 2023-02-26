import { useCallback, useEffect, useState } from 'react';
import { useTrigger } from '../trigger/trigger';
import { UseDrawerProps } from './drawer.interface';

/**
 * Use this helper hook to expand elements vertically or horizontally. Useful to create
 * sidepanels and accordions
 *
 * @returns
 * - triggerRef - ref of the element that will toggle the expansion
 * - panelRef - ref of the content wrapper
 *
 * @example
 * export const Example = () => {
 *
 * const { triggerRef, panelRef } = useDrawer({
 * orientation: 'vertical',
 * });
 * return (
 *  <div className='accordion-root'>
 *    <button ref={triggerRef} className='drawer-trigger'>
 *      <span className='accordion-header-tiltle'>Sample Accordion</span>
 *    </button>
 *    <div ref={panelRef} className='drawer-panel'>
 *        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 *    </div>
 *  </div>
 * );
 *};
 */
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
