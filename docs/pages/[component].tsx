import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import styles from '../styles/component-page.module.scss';
import Tabs, { TabPanel, Tab, TabList } from '@atlaskit/tabs';
import TableTree from '@atlaskit/table-tree';
import fs from 'fs';
import path from 'path';
import { ComponentProps, JSONProps } from '../types';
import { capitalise, isMobile, removeJSONFromString } from '../utils';
import { Section } from '@atlaskit/menu';
import ComponentNavigation from '../components/ComponentNavigation';
import { Code, CodeBlock } from '@atlaskit/code';
import Head from 'next/head';
import Header from 'components/Header';

const Component = ({ name, json, links }: ComponentProps) => {
  const { description, propList } = json;
  const widths = isMobile()
    ? ['40%', '28%', '10%', '10%']
    : ['20%', '40%', '25%', '15%'];
  const items = propList.map(({ name, description, type, defaultValue }) => {
    return {
      id: name,
      content: {
        title: name,
        description,
        type: type?.name,
        defaultValue,
      },
      hasChildren: false,
      children: [],
    };
  });

  type Content = {
    title: string;
    description: string;
    type: string;
    defaultValue: string | number;
  };

  const Title = (props: Content) => {
    return <span>{props.title}</span>;
  };
  const Description = (props: Content) => <span>{props.description}</span>;
  const Type = (props: Content) => <span>{props.type}</span>;
  const DefaultValue = (props: Content) =>
    props.defaultValue ? <code>{props.defaultValue}</code> : null;

  return (
    <>
      <div className="page-header">
        <Header links={links} />
      </div>
      <div className={styles.root}>
        <Head>
          <title>{capitalise(name)}</title>
        </Head>

        <div className={styles['desktop-nav']}>
          <ComponentNavigation links={links} selected={name} />
        </div>
        <div className={styles.content}>
          <h1>{capitalise(name)}</h1>
          <p className={styles.description}>{description.join(' ')}</p>
          <div className="prop-tabs">
            <Tabs id="component">
              <TabList>
                <Tab>Overview</Tab>
                {items.length && <Tab>Props</Tab>}
                <Tab>Usage Examples</Tab>
              </TabList>
              <TabPanel>
                <div className="vertical-stack">
                  <Section>
                    <p>
                      <Code>Returns</Code>
                    </p>
                    {json.returns.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </Section>
                  <Section>
                    <p>
                      <Code>Default Values</Code>
                    </p>
                    <p>These are the default values of each prop</p>
                    {json.defaultValue.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </Section>
                </div>
              </TabPanel>
              {items.length && (
                <TabPanel>
                  <TableTree
                    columns={[Title, Description, Type, DefaultValue]}
                    headers={['Title', 'Description', 'Type', 'Default Value']}
                    columnWidths={widths}
                    items={items}
                  />
                </TabPanel>
              )}
              <TabPanel>
                <div className="vertical-stack">
                  <h3>Basic Example</h3>
                  <CodeBlock
                    text={json.basicExample?.join('\n') || ''}
                    language="jsx"
                  />
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component;

export const getStaticPaths: GetStaticPaths<{}> = () => {
  const docsPath = path.join(process.cwd(), 'metadata');
  const docs = fs.readdirSync(docsPath);

  return {
    paths: docs.map((file) => ({
      params: { component: removeJSONFromString(file) },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ComponentProps> = (ctx) => {
  const fileName = ctx.params?.component + '.json';
  const filePath = path.join(process.cwd(), 'metadata', fileName);
  const json: JSONProps = JSON.parse(
    fs.readFileSync(filePath, { encoding: 'utf-8' }) || '{}'
  );
  const linksPath = path.join(process.cwd(), 'metadata');
  const links = fs.readdirSync(linksPath);
  const normalisedLinks = links.map((l) => ({
    title: capitalise(removeJSONFromString(l)),
    href: `/${removeJSONFromString(l)}`,
  }));

  return {
    props: {
      json,
      name: ctx.params?.component as string,
      links: normalisedLinks,
    },
  };
};
