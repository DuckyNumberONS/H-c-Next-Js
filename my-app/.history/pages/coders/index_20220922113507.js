import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Coder.module.css";

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json;
  return {
    props: { coders: data },
  };
};

export default function AllCoders({ coders }) {
  console.log(coders);
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
              <h3>{coder.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
      props: { coders: posts },
  };
}
