import { useSidePanel } from '../sidepanel';
import { loremIpsum } from 'lorem-ipsum';
import { useMemo } from 'react';
import { Example, WithoutOverlayExample } from './example';

const Story = {
  component: <div></div>,
  title: 'Sidepanel',
};
export default Story;

export const Template = () => {
  const { triggerRef, panelRef, overlayPanel } = useSidePanel();
  const value = useMemo(
    () =>
      loremIpsum({
        paragraphLowerBound: 20,
        paragraphUpperBound: 200,
        count: 90,
      }),
    []
  );

  return (
    <div>
      <button ref={triggerRef}>show</button>
      <div ref={overlayPanel}>
        <div
          style={{
            transition: 'all 200ms ease-in',
          }}
          ref={panelRef}
        >
          {value}
        </div>
      </div>
    </div>
  );
};

export const MUIExample = () => <Example classNamePrefix="mui" />;

export const WithoutOverlay = () => <WithoutOverlayExample />;
