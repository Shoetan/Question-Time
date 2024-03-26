"use client"


import apiInstance from "@/app/api/apiInstance";
import { useMutation } from "@tanstack/react-query";
import { setToken } from "../utils/auth";


type IPayload = {
  email: string
}

const getToken = async (payload:IPayload) => {
  const response = await apiInstance.post("/token", payload)
  const {data} = response
  setToken(data?.token)
  return data
}

export const useUserToken = () =>{
  const {mutate, isPending, isSuccess} = useMutation ({
    mutationFn:(payload:IPayload) =>{
      return getToken(payload)
    }
  })

  return {getUserToken:mutate, gettingToken:isPending, tokenSuccess:isSuccess}
}