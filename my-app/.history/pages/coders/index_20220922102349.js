import React from 'react'

export const getStaticProps = async()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json;
  re
}

export default function Index() {
  return (
    <div>All coder</div>
  )
}
