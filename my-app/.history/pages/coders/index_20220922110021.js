import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../"
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json;
  return {
    props: { coders: data },
  };
};

export default function AllCoders({ coders }) {
  return (
    <>
      <Head>
        <title>Coder wikipedia | Coders</title>
        <meta name="keywords" content="coders" />
      </Head>
      <div>
        <h1>All coder</h1>
        {coders.map((coder) => (
          <Link href={"/pages/coders" + coder.id} key={coder.id}>
            <a className={styles.single}>
              <h3>{coders.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
}
