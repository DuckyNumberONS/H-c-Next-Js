import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Coder.module.css";

// export const getStaticProps = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json;
//   return {
//     props: { coders: data },
//   };
// };

export default function AllCoders({ posts }) {
  console.log(posts);
  return (
    <>
      <Head>
        <title>Coder wikipedia | Coders</title>
        <meta name="keywords" content="coders" />
      </Head>
      <div>
        <h1>All coder</h1>
        {posts.map((coder) =>{
          log
        }}
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
    props: {
      posts,
    },
  };
}