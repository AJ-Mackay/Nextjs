import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Stretch out on bed lick plastic bags but side-eyes your *jerk* other
          hand while being petted purr like an angel yet to pet a cat, rub its
          belly, endure blood and agony, quietly weep, keep rubbing belly.
        </p>
        <p className={styles.text}>
          Flex claws on the human`s belly and purr like a lawnmower. Pooping
          rainbow while flying in a toasted bread costume in space. Mew mew.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </Fragment>
  );
}
