import React from "react";
import Head from "next/head";
import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json;
  return {
    props: { coders: data },
  };
};

export default function Index({ coders }) {
  return (
    <>
      <Head>
        <title>Coder wikipedia | Coders</title>
        <meta name="keywords" content="coders" />
      </Head>
      <div>All coder</div>
      {coders.map(coder)=>(<Link href={"/"}></Link>)}
    </>
  );
}
