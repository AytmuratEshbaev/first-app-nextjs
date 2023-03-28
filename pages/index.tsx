import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image';
import Menu from '@/components/Menu';
import Tab from '@/components/Tab';
import Content from '@/components/Content';

export default function Home() {
  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pizza</title>
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <Link href='/' className={styles.header__logo}>
            <Image src="./icons/logo.svg" alt="logo" width={175} height={175} />
          </Link>
          <Menu />
        </header>
        <div className={styles.banner}>
            <h2 className={styles.banner__title}>Create Your Own Pizza</h2>
            <p className={styles.banner__desc}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has  been the industry's standard dummy since the
              1500s.
            </p>
            <Link href="#" className={styles.banner__link}>READ MORE</Link>
        </div>
        <div className={styles.progress}>
          <h1 className={styles.progress__title}>HOW TO PROGRESS?</h1>
          <p className={styles.progress__subtitle}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </p>
          <Tab />
          <Content />
          <Link href="#" className={styles.createLegend__link}>CREATE YOUR LEGEND</Link>
        </div>
        <footer className={styles.footer}>
          <Link href='/'>© 2020 Graphic Resources . All rights reserved.</Link>
        </footer>
      </main>
    </>
  )
}
