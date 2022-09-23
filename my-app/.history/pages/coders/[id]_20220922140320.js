import React from "react";

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users" +id);
  const data = await res.json();
};
export default function Detail() {
  return <div>Detail Page</div>;
}
