import React from "react";

export default function InitProp(props) {
  return <div>{props}</div>;
}
InitProp.getInitialProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const daprosta = await res.json();
  return {
    props: prop,
  };
};
