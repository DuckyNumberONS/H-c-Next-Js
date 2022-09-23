import React from "react";

export default function Posts({ results: query }) {
  return (
    <div>
      <h1>getSeverSideProps</h1>
      {query.map((q, index) => (
        <div key={index}>
          <h3>
            {q.id}-{q.name}
          </h3>
        </div>
      ))}
    </div>
  );
}
// eslint-disable-next-line @next/next/no-typos
export const getSeverSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/?q=${context.params.query}`
  );
  const json = await res.json();
  const posts = json;
  return {
    props: {
      results: posts,
    },
  };
};
