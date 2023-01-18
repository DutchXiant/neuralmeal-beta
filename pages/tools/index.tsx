import React from 'react'
import Link from 'next/link'

export default function index() {
  return (
    <div className='flex gap-3'>
     <Link href="/" className="font-bold">Home</Link>
     <Link href='tools/cutculator'>Cut</Link>
     <br></br>
     <Link href='tools/bulculator'>Bulk</Link>
    </div>
  )
}
