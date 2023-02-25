import {
  AtlassianNavigation,
  PrimaryButton,
} from '@atlaskit/atlassian-navigation';
import { ButtonItem } from '@atlaskit/menu';
import Link from 'next/link';
import { RxHamburgerMenu as Menu } from 'react-icons/rx';
import React, { ComponentType } from 'react';
import { useSidePanel } from 'component-hooks';
import ComponentNavigation from './ComponentNavigation';
import { NavigationLinks } from '../types';

export const ComponentHeader: ComponentType<{}> = () => (
  <p style={{ width: '224px' }} className="header-text">
    <ButtonItem>Component hooks</ButtonItem>
  </p>
);

const Header = ({ links }: { links?: NavigationLinks[] }) => {
  const { triggerRef, panelRef, overlayPanel } = useSidePanel();
  return (
    <>
      <div ref={overlayPanel}>
        <div ref={panelRef}>
          <ComponentNavigation links={links || []} />
        </div>
      </div>
      <AtlassianNavigation
        label="site"
        primaryItems={[
          <PrimaryButton
            className="menu-icon"
            ref={triggerRef}
            iconAfter={<Menu fontSize={24} />}
          />,

          <PrimaryButton>
            <Link href="/accordion">Components</Link>
          </PrimaryButton>,
        ]}
        renderProductHome={ComponentHeader}
      />
    </>
  );
};

export default Header;
