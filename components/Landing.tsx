"use client"

import React from 'react'
import { useRouter } from 'next/navigation';
import { getToken } from '@/app/utils/auth';


/* Notes
  1. Fetch token from local storage.
  2. If token is not available navigate to page to ask for token.
  3. If token is available navigate to questions page
  4. call the button getstarted 
*/

const Landing = () => {



/* Get token from local storage */
const token = getToken()

const router = useRouter()

  /* Onclick function */
  const handleClick = () =>{
    if (token === null ) {
      router.push('/getToken')
    } else {
      router.push('/getQuestions')
    }
  }
  return (
    <div className='flex flex-col justify-center items-center m-44'>
      {/* Heading */}
      <h1 className='font-semibold text-xl sm:text-7xl md:text-6xl sm:text-center'>
        Engage Your Audience, Get Answers Instantly
      </h1>
      {/* Sub heading */}
      <p className='text-sm sm:text-3xl m-8 text-center font-thin'>
      Welcome to QuestionTime, where curiosity meets community. Ask questions, gather insights, and make informed decisions, all in one place.
      </p>
      {/* CTA */}
      <button className='bg-blue-200 p-4 sm:p-6 rounded-full sm:w-96 flex justify-center m-28 text-2xl w-52 hover:bg-gradient-to-r from-indigo-500'
      onClick={handleClick}
      >
        Get Started
      </button>
    </div>
  )
}

export default Landing