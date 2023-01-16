import { useDrawer } from '../drawer/drawer';

export interface useAccordionProps {
  activeClassName?: string;
  handleAccordionStateChange?: (state: boolean) => void;
}

const defaultProps: useAccordionProps = {
  activeClassName: '',
  handleAccordionStateChange: () => {},
};

export const useAccordion = ({
  activeClassName,
  handleAccordionStateChange,
}: useAccordionProps = defaultProps) => {
  const { triggerRef, panelRef } = useDrawer({
    orientation: 'vertical',
    onStateChange: handleAccordionStateChange,
    activeClass: activeClassName,
  });
  return { triggerRef, panelRef };
};
