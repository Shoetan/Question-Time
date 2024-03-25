"use client"


import apiInstance from "@/app/api/apiInstance";
import { useMutation } from "@tanstack/react-query";


type IPayload = {
  email: string
}

const getToken = async (payload:IPayload) => {
  const response = await apiInstance.post("/token", payload)
  const {data} = response
  localStorage.setItem("token", data?.token)
  return data
}

export const userToken = () =>{
  const {mutate, isPending, isSuccess} = useMutation ({
    mutationFn:(payload:IPayload) =>{
      return getToken(payload)
    }
  })

  return {getUserToken:mutate, gettingToken:isPending, tokenSuccess:isSuccess}
}