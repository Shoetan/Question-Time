"use client"

import React, { useEffect } from 'react'
import { useState } from 'react'
import { userQuestion } from './query'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'


const Page = () => {
  const [question, setQuestion ] = useState("")
  const [answer1, setAnswer1] = useState("")
  const [answer2, setAnswer2] = useState("")
  const [answer3, setAnswer3] = useState("")
  const [answer4, setAnswer4] = useState("")
  const [answer5, setAnswer5] = useState("")
  const [answersArray, setAnswersArray] = useState([]);

  const router = useRouter()

  useEffect(() => {
    setAnswersArray([answer1, answer2, answer3, answer4, answer5]);
  }, [answer1, answer2, answer3, answer4, answer5]);

  const {addUserQuestion, addingQuestion, questionSuccess} = userQuestion()

 


  const addQuestion = () =>{
    addUserQuestion({
      "question":question,
      "options":answersArray,
    })
  }

  if(questionSuccess === true) {
    router.push('/getQuestions')
  }

  return (
    <div className='flex flex-col m-4 justify-center items-center'>
      <label htmlFor="" className='m-4'>Question</label>
        <input type="text" className='w-96 h-16 rounded-2xl p-4 outline-none' onChange={(e)=>setQuestion(e.target.value)}/>
      <label htmlFor="" className='m-4'>Answer 1</label>
        <input type="text" className='w-96 h-16 rounded-2xl p-4 outline-none' onChange={(e)=>setAnswer1(e.target.value)} />
      <label htmlFor="" className='m-4'>Answer 2</label>
        <input type="text" className='w-96 h-16 rounded-2xl p-4 outline-none' onChange={(e)=>setAnswer2(e.target.value)}  />
      <label htmlFor="" className='m-4'>Answer 3</label>
        <input type="text" className='w-96 h-16 rounded-2xl p-4 outline-none' onChange={(e)=>setAnswer3(e.target.value)}  />
        <label htmlFor="" className='m-4'>Answer 4</label>
        <input type="text" className='w-96 h-16 rounded-2xl p-4 outline-none' onChange={(e)=>setAnswer4(e.target.value)}  />
        <label htmlFor="" className='m-4'>Answer 5</label>
        <input type="text" className='w-96 h-16 rounded-2xl p-4 outline-none' onChange={(e)=>setAnswer5(e.target.value)}  />
        <button className='bg-blue-200 p-4 sm:p-6 rounded-full sm:w-96 flex justify-center m-16 text-2xl w-52 hover:bg-gradient-to-r from-indigo-500' onClick={addQuestion}>{addingQuestion?(<Loader2 className='className="mr-2 h-5 w-5 animate-spin text-white'/>):("Submit Question")}</button>
    </div>
  )
}

export default Page