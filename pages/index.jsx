import Layout from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import Head from 'next/head';

export default function Home() {
  return (
    <Layout title="Home / Next.js" description="descripcion del home" home>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}