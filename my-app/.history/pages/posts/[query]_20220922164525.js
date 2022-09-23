import React from "react";

export default function Posts({results:  query}) {
  return (
    <div>
      <h1></h1>
      {query.map((q,index)=>(
        <div key={index}>
            <h3>{q.}{q.name}</h3>
        </div>
      ))}
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
    props:{
        results:posts,
    },
  }
};
