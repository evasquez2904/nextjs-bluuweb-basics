import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = 'Your Name';

export default function zauxiliar({ home = true }) {
  return (
    <header className={styles.header}>
      {home ? (
        <>
          <Image
            priority
            src="/img/1.jpg"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt={name}
          />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </>
      ) : (
        <>
          <Link href="/">
            <a>
              <Image
                priority
                src="/img/1.jpg"
                className={utilStyles.borderCircle}
                height={10}
                width={10}
              />
            </a>
          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link href="/">
              <a className={utilStyles.colorInherit}>Falso</a>
            </Link>
          </h2>
        </>
      )}
    </header>
  );
}
