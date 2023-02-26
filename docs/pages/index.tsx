import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Button, { ButtonGroup } from '@atlaskit/button';
import Link from 'next/link';
import { Section } from '@atlaskit/menu';
import TextField from '@atlaskit/textfield';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Component Hooks</title>
        <meta name="description" content="Create higly customized components" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header hideMobileMenu />

      <main className={styles.main}>
        <h1 className={styles.title}>Component Hooks</h1>

        <p className={styles.description}>
          Create fully customized components with complete control of the UI
          while this library handles the behaviour
        </p>

        <ButtonGroup>
          <Button size={40} appearance="primary">
            <Link href="/accordion">Get Started</Link>
          </Button>
          <Button
            href="https://github.com/NishchithRao/component-hooks"
            target="_blank"
            appearance="link"
          >
            Github
          </Button>
        </ButtonGroup>
        <section className={styles['features-section']}>
          <h2 className={styles['feature-title']}>Features</h2>
          <div className={styles.features}>
            <Section title="Focus on the UI">
              <p>
                The UI is entirely dependent on you so you can customize it
                however you like
              </p>
            </Section>
            <Section title="Extremely Flexible">
              <p>
                All components are flexible in order to meet the business needs
              </p>
            </Section>
            <Section title="Separation of concerns">
              <p>
                The logic and UI are entirely separated and hence the components
                are easier to maintain
              </p>
            </Section>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles['footer-sections']}>
          <p>
            Designed and developed by
            <a href="" target="_blank">
              Nishchith Rao
            </a>
          </p>
          <form action="mailto:nishchitrao5@gmail.com">
            <div>
              <small>Get In Touch</small>
              <TextField name="email" type="email" />
            </div>
            <Button type="submit" appearance="primary">
              Send a mail
            </Button>
          </form>
        </div>

        <div>
          <small> &copy; 2023 Nishchith Rao</small>
        </div>
      </footer>
    </div>
  );
};

export default Home;
