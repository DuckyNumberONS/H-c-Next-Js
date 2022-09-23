import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function NotFound() {
    const router = useRouter()
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')},300
        })
    })
  return (
    <div>NotFound</div>
  )
}
