import { OverlayProps, useOverlay } from './overlay';

const Story = {
  component: <div></div>,
  title: 'Overlay',
};
export default Story;

export const Template = (args: OverlayProps) => {
  const { triggerRef, panelRef } = useOverlay({ brightness: args.brightness });

  return (
    <div>
      <button ref={triggerRef}>show</button>
      <div
        style={{
          transition: 'all 200ms ease-in',
        }}
        ref={panelRef}
      ></div>
    </div>
  );
};

Template.args = {
  brightness: '2',
};
