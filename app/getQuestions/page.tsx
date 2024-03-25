"use client"


import React from 'react'
import { useGetQuestionsQuery } from './query'
import { useRouter } from 'next/navigation'
import DisplayQuestion from '@/components/DisplayQuestion'


const Page = () => {


  const {questionsData, isLoading} = useGetQuestionsQuery()

  const router = useRouter()

  if (isLoading || !questionsData) {
    return <div>Loading...</div>;
  }


  // Extracting only the questions and answers from the object

const filteredData = Object.entries(questionsData).map(([key, value]) => ({
  id: key,
  question: value.question,
  options: value.options
}));

console.log(filteredData);
  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
        <div>
        {filteredData.map((questionData) => (
        <DisplayQuestion
          key={questionData.id} // Use unique identifier as key
          question={questionData.question} // Pass question as prop
          options={questionData.options} // Pass options as prop
          id={questionData.id}
        />
      ))}

        </div>

        <button className='bg-blue-200 p-4 sm:p-6 rounded-full sm:w-96 flex justify-center m-16 text-2xl w-52 hover:bg-gradient-to-r from-indigo-500' onClick={()=>{router.push('/addQuestions')}}>Add Question
        </button>
      </div>
  
  </div>
  )
}

export default Page