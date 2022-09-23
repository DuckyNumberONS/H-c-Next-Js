import React from "react";
import Head from "next/head";

<Head>
        <title>Coder wikipedia | About</title>
        <meta name="keywords" content="coders" />
      </Head>
export default function InitProp(props) {
  return <div>{props[0].id}</div>;
}
InitProp.getInitialProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const props = await res.json();
  return {
    props: props,
  };
};
