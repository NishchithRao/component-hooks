import React from 'react';
import {
  NavigationHeader,
  NestableNavigationContent,
  Section,
  SideNavigation,
} from '@atlaskit/side-navigation';
import Link from 'next/link';
import { NavigationLinks } from '../types';
import { ButtonItem } from '@atlaskit/menu';
import { equalStrings } from '../utils';
import { ComponentHeader } from './Header';

const ComponentNavigation = ({
  links,
  selected,
}: {
  links: NavigationLinks[];
  selected?: string;
}) => {
  return (
    <div style={{ height: '100vh' }} className="nav">
      <SideNavigation label="component-hooks">
        <NavigationHeader>
          <ComponentHeader />
        </NavigationHeader>
        <NestableNavigationContent testId="nestable-navigation-content">
          <Section>
            {links.map((link) => (
              <Link key={link.title} href={link.href}>
                <ButtonItem isSelected={equalStrings(selected, link.title)}>
                  {link.title}
                </ButtonItem>
              </Link>
            ))}
          </Section>
        </NestableNavigationContent>
      </SideNavigation>
    </div>
  );
};

export default ComponentNavigation;
