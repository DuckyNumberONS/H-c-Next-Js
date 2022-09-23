import React from "react";

export default function InitProp({ props }) {
  return (
    <>
    <Head>
        <title>Coder wikipedia | Coders</title>
        <meta name="keywords" content="coders" />
      </Head>
      <div>{props[0].id}</div>
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
