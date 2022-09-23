import React from "react";
export const getStaticPaths  = async()=>
comst paths = data.,map
const paths = data.map((coder) => {
  return {
    params: { ic: coder.id.toString() },
  };
});
  return{
    paths,
    feedback:false;
  }
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users" + id);
  const data = await res.json();
  return {
    props: { coder: data },
  };
};
export default function Detail(coder) {
  return (
    <div>
      <h1>{coder.name}</h1>
      <p>Email: {coder.website}</p>
      <p>
        Address: {coder.address.street},{coder.address.city}
      </p>
      <p>company: {coder.company.name}</p>
      <p></p>
    </div>
  );
}
