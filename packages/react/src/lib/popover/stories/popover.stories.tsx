import { PopoverProps, usePopover } from '../';
import './example.css';
import ReactDOM from 'react-dom';

const Story = {
  component: <div></div>,
  title: 'Popover',
};
export default Story;

export const Basic = ({ position, gap }: PopoverProps) => {
  const { triggerRef, panelRef } = usePopover({
    position: position,
    gap: gap,
  });
  return (
    <div>
      <button className="popover-trigger" ref={triggerRef}>
        Show Popver
      </button>
      {ReactDOM.createPortal(
        <div className="popover-example-root" ref={panelRef}>
          <ul className="popover-example">
            <li tabIndex={0}>Three</li>
            <li tabIndex={0}>Two</li>
            <li tabIndex={0}>One</li>
          </ul>
        </div>,
        document.body
      )}
    </div>
  );
};

Basic.args = {
  position: 'top-center',
  gap: 6,
};
Basic.argTypes = {
  position: {
    control: 'select',
    options: [
      'top-left',
      'top-center',
      'top-right',
      'bottom-left',
      'bottom-center',
      'bottom-right',
    ],
  },
};

Basic.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};
