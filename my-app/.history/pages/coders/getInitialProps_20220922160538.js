import React from "react";

export default function InitProp() {
  return <div>getInitialProps</div>;
}
InitProp.getInitialProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
};
