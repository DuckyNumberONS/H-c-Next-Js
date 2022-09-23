import React from "react";

export default function Posts() {
  return (
    <div>
      <h1></h1>
    </div>
  );
}
export const getSeverSideSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/?q=${context.params.query}`
  );
  const props = await res.json();
  const posts = json;
  return{
    props:
  }
};
