import { FiMail } from 'react-icons/fi';
import { GrMail, GrFormClose } from 'react-icons/gr';
import { useSidePanel } from '../../sidepanel';
import './mui.css';

export interface ExampleProps {
  classNamePrefix?: string;
}
const Example = ({ classNamePrefix }: ExampleProps) => {
  const { triggerRef, panelRef, overlayPanel, closePanel } = useSidePanel();
  return (
    <div>
      <button ref={triggerRef}>Open Panel</button>
      <div
        ref={overlayPanel}
        className={'sidepanel-' + classNamePrefix + '-overlay'}
      >
        <div
          ref={panelRef}
          className={'sidepanel-' + classNamePrefix + '-root'}
        >
          <div className={'sidepanel-' + classNamePrefix + '-inner'}>
            <div className={'sidepanel-' + classNamePrefix + '-close-btn'}>
              <button onClick={closePanel}>
                <GrFormClose size={40} />
              </button>
            </div>
            <ul className="sidepanel-divider">
              <li>
                <span>
                  <FiMail size={24} />
                </span>
                <span>Inbox</span>
              </li>
              <li>
                <span>
                  <GrMail size={24} />
                </span>
                <span>Starred</span>
              </li>
              <li>
                <span>
                  <FiMail size={24} />
                </span>
                <span>Send Mail</span>
              </li>
              <li>
                <span>
                  <GrMail size={24} />
                </span>
                <span>Drafts</span>
              </li>
            </ul>
            <ul>
              <li>
                <span>
                  <FiMail size={24} />
                </span>
                <span>All mail</span>
              </li>
              <li>
                <span>
                  <GrMail size={24} />
                </span>
                <span>Trash</span>
              </li>
              <li>
                <span>
                  <FiMail size={24} />
                </span>
                <span>Spam</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Example };
