import React from "react";
import Head from "next/head";
export default function InitProp({ props }) {
  return (
    <>
      <Head>
        <title>Coder wikipedia | Test</title>
        <meta name="keywords" content="coders" />
      </Head>
      <div>{props[0].name}</div>
    </>
  );
}
InitProp.getInitialProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const props = await res.json();
  return {
    props: props,
  };
};
