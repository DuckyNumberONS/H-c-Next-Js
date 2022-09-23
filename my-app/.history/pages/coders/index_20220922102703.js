import React from 'react'

export const getStaticProps = async()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json;
  return{
    props:{coders:data}
  }
}

export default function Index({coders}) {
  return (
    <><div>All coder</div></>
    
  )
}
