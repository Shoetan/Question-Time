"use client"

import React from 'react'
import { userToken } from './query'
import { useState } from 'react'
import { get } from 'https'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'


const page = () => {

  const {getUserToken, gettingToken, tokenSuccess} = userToken()

  const router = useRouter()

  const [userEmail, setUserEmail] = useState("")

  const getToken = () => {
      getUserToken({"email":userEmail});

  }

  if (tokenSuccess == true){
    router.push('/getQuestions')
  }

  return (
    <div className='flex flex-col justify-center items-center m-44'>
    
        <input type="text" placeholder='Enter email' className='w-96 h-16 rounded-2xl p-4 outline-none' onChange={(e)=>setUserEmail(e.target.value)}/>
      
      <button className='bg-blue-200 p-4 sm:p-6 rounded-full sm:w-96 flex justify-center m-16 text-2xl w-52 hover:bg-gradient-to-r from-indigo-500' onClick={getToken} > 
          {gettingToken?(<Loader2 className='className="mr-2 h-5 w-5 animate-spin text-white'/>):("Get Token")}
      </button>
    </div>
  )
}

export default page