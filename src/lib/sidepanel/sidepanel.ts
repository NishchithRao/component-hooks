import { useState } from 'react';
import { useCombinedRefs } from '../../utils';
import { useDrawer } from '../drawer/drawer';
import { useOverlay } from '../overlay';

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
