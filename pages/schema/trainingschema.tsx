import React from 'react'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

export default function trainingschema() {
  const [data, setData] = useState(['hello']); 
  const [goal, setGoal] = useState([]); 
  const notify = () => toast('Here is your toast.');

  const hasClicked = async (e) => { 
    console.log('hello')
    const response = await fetch("/api/requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ goal: goal})
    });

    const news = await response.json(); 
    console.log(news)
    setData(news.result)
  }

  return (
    <div className='flex flex-col gap-4'>
      <h1>Hello</h1>
    </div>
  )
}
