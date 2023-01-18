import Link from 'next/link'
import React from 'react'


export default function index() {

  return (
    <div className='flex items-center gap-3'>
        <Link href="/" className='font-bold'>Home</Link>
        <Link href="schema/voedingschema">Voeding Schema</Link>
        <Link href="schema/trainingschema">Training Schema</Link>
    </div>
  )
}
