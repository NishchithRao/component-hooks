import { useState } from 'react';
import { useCombinedRefs } from '../../utils';
import { useDrawer } from '../drawer/drawer';
import { useOverlay } from '../overlay';

/**
 * Sidepanels are surfaces containing supplementary
 * content that are anchored to the side of the screen.
 *
 * @returns
 * - triggerRef - ref of the element that will toggle the sidepanel visibility
 * - panelRef - ref of the content wrapper
 *
 * @example
 * const Example = () => {
 * const { triggerRef, panelRef, overlayPanel, closePanel } = useSidePanel();
 * return (
 * <div>
 * <button ref={triggerRef}>Open Panel</button>
 *  <div
 *  ref={overlayPanel}
 *  className={'sidepanel-overlay'}
 *  >
 *      <div
 *        ref={panelRef}
 *        className={'sidepanel-root'}
 *      >
 *        <div className={'sidepanel-' + classNamePrefix + '-inner'}>
 *          <div className={'sidepanel-' + classNamePrefix + '-close-btn'}>
 *            <button onClick={closePanel}>
 *              <GrFormClose size={40} />
 *            </button>
 *          </div>
 *          <ul className="sidepanel-divider">
 *            <li>
 *              <span>
 *                <FiMail size={24} />
 *              </span>
 *              <span>Inbox</span>
 *            </li>
 *            <li>
 *              <span>
 *                <GrMail size={24} />
 *              </span>
 *              <span>Starred</span>
 *            </li>
 *            <li>
 *              <span>
 *                <FiMail size={24} />
 *              </span>
 *              <span>Send Mail</span>
 *            </li>
 *            <li>
 *              <span>
 *                <GrMail size={24} />
 *              </span>
 *              <span>Drafts</span>
 *            </li>
 *            <li>
 *              <span>
 *                <FiMail size={24} />
 *              </span>
 *              <span>All mail</span>
 *            </li>
 *          </ul>
 *        </div>
 *      </div>
 *    </div>
 *  </div>
 * );
 * };
 */
export const useSidePanel = () => {
  const [open, setOpen] = useState(false);
  const { triggerRef: drawerTrigger, panelRef } = useDrawer({
    orientation: 'horizontal',
    active: open,
    onStateChange: (state) => setOpen(state),
  });
  const closePanel = () => setOpen(false);
  const { triggerRef: overlayTrigger, panelRef: overlayPanel } = useOverlay({
    brightness: '2',
    active: open,
    onStateChanged: (state) => setOpen(state),
  });
  const triggerRef = useCombinedRefs(drawerTrigger, overlayTrigger);

  return { triggerRef, panelRef, overlayPanel, closePanel };
};
