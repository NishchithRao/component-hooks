import { useDrawer, UseDrawerProps } from '../drawer';

export interface useAccordionProps
  extends Omit<UseDrawerProps, 'orientation'> {}

/**
 * The accordion component allows the user to show and hide sections of related content on a page.
 * This hook completely handles the opening and closing of an accordion.
 *
 * @returns
 * - triggerRef - ref of the element that will toggle the content visibility
 * - panelRef - ref of the content wrapper
 *
 * @example
 * export const Example = () => {
 *
 * const { triggerRef, panelRef } = useAccordion({
 * activeClassName: 'active',
 * handleAccordionStateChange: setActive,
 * });
 * return (
 *  <div className='accordion-root'>
 *    <button ref={triggerRef} className='accordion-header'>
 *      <span className='accordion-header-tiltle'>Sample Accordion</span>
 *    </button>
 *    <div ref={panelRef} className='accordion-children'>
 *        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 *    </div>
 *  </div>
 * );
 *};
 */
export const useAccordion = (props: useAccordionProps) => {
  const { activeClassName, active, onStateChange } = props;

  const { triggerRef, panelRef } = useDrawer({
    orientation: 'vertical',
    active,
    onStateChange,
    activeClassName,
  });
  return { triggerRef, panelRef };
};
