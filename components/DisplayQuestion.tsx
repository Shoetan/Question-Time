"use client"

import React, { useState } from 'react';
import { userDeleteQuestion } from '@/app/getQuestions/query';

const DisplayQuestion = ({ id, question, options }: { id: any; question: string; options: string[]}) => {
  const [newOption, setNewOption] = useState('');

  const [currentOptions, setCurrentOptions] = useState(options);

  const handleAddOption = () => {
    if (newOption.trim() !== '') {
      setCurrentOptions([...currentOptions, newOption.trim()]);
      setNewOption('');
    }
  };

  const handleRemoveOption = (optionToRemove: string) => {
    const updatedOptions = currentOptions.filter(option => option !== optionToRemove);
    setCurrentOptions(updatedOptions);
  };

  const {deleteUserQuestion}= userDeleteQuestion()

  const handleDeleteQuestion = () => {
    deleteUserQuestion(id)
  };

  return (
    <div className=' m-4 p-8 relative bg-[#fafafa] shadow-2xl'>
      <button className='absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded' onClick={handleDeleteQuestion}>Delete</button>
      <h1 className='text-4xl'>{question}</h1>
      <div>
        {currentOptions.map((option, index) => (
          <div key={index} className='my-2'>
            <input type='radio' id={option} name='options' value={option} />
            <label htmlFor={option} className='ml-2'>{option}</label>
            <button className='ml-2' onClick={() => handleRemoveOption(option)}>Remove</button>
          </div>
        ))}
        <div className='my-2 p-4'>
          <input
            type='text'
            value={newOption}
            onChange={(e) => setNewOption(e.target.value)}
            placeholder='Enter new option'
            className='p-4'
          />
          <button className='ml-2' onClick={handleAddOption}>Add Option</button>
        </div>
      </div>
    </div>
  );
};

export default DisplayQuestion;


