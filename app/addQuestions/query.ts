'use client'

import apiInstance from "@/app/api/apiInstance";
import { useMutation } from "@tanstack/react-query";


type IPayload = {
  question: string;
  options: string[];
};


const addQuestion = async (payload:IPayload) => {
  const response = await apiInstance.post("/questions", payload)
  const {data} = response
  return data
}

export const userQuestion = () =>{
  const {mutate, isPending, isSuccess} = useMutation ({
    mutationFn:(payload:IPayload) =>{
      return addQuestion(payload)
    }
  })


  return {addUserQuestion:mutate, addingQuestion:isPending, questionSuccess:isSuccess}
}