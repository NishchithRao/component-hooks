import { useAccordion } from '../accordion';
import { useState } from 'react';
import './mui.css';
import './accessible.css';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Story = {
  component: <div></div>,
  title: 'Accordion',
};
export default Story;

export const Basic = ({ classNamePrefix }: { classNamePrefix: string }) => {
  const [active, setActive] = useState(false);

  const { triggerRef, panelRef } = useAccordion({
    activeClassName: `${classNamePrefix}-active`,
    handleAccordionStateChange: setActive,
  });
  return (
    <div className={'accordion-' + classNamePrefix + '-root'}>
      <button
        ref={triggerRef}
        className={`accordion-${classNamePrefix}-header`}
      >
        <span className={`accordion-${classNamePrefix}-header--tiltle`}>
          Sample Accordion 1
        </span>
        <span>
          {active ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
        </span>
      </button>
      <div ref={panelRef} className={`accordion-${classNamePrefix}-children`}>
        <div className={`accordion-${classNamePrefix}-children-inner`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </div>
      </div>
    </div>
  );
};
Basic.argTypes = {
  classNamePrefix: { control: 'radio', options: ['mui', 'accessible'] },
};
Basic.args = {
  classNamePrefix: 'mui',
};

Basic.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};
