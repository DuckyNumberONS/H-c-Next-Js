import React from "react";

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users" + id);
  const data = await res.json();
  return {
    props: { coders: data },
  };
};
export default function Detail(coder) {
  return (
  <div>
    <h1>{coder.name}</h1>
    <p>Email: {coder.website}</p>
    <p>Address" {}</p>
    <p></p>
    <p></p>

  </div>
  )
}
