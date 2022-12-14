import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((coder) => {
    return {
      params: { id: coder.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users" + id);
  const data = await res.json();
  return {
    props: { coder: data },
  };
};

export default function Detail({ coder }) {
  console.log(coder, "hhh");
  return (
    <div>
      <h1>{coder?.name}</h1>
      <p>Email: {coder?.email}</p>
      <p>Website:</p>
      <p>
        Address: {coder?.address?.street},{coder?.address?.city}
      </p>
      <p>company: {coder?.company?.name}</p>
      <p></p>
    </div>
  );
}
