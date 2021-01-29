import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home({ launches }) {
  console.log('launches', launches);
  return <></>;
}

export async function getStaticProps() {
  return {
    props: {
      launches: [],
    },
  };
}
