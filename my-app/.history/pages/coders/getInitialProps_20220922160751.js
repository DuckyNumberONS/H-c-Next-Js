import React from "react";

export default function InitProp(props) {
  return <div>{props[0].is}</div>;
}
InitProp.getInitialProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const props = await res.json();
  return {
    props: props,
  };
};
