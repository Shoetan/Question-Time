"use client"


import apiInstance from "../api/apiInstance";
import { useQuery ,useMutation, useQueryClient } from "@tanstack/react-query";


export const useGetQuestionsQuery = () => {
  const {data, isLoading} = useQuery({
    queryKey:["questions"],
    queryFn: async () =>{
      const response = await apiInstance.get("/questions")
      return response.data
    }
  })

  return {questionsData:data, isLoading:isLoading}
}


const deleteQuestion = async ( id: any ) => {
  const response = await apiInstance.delete(`/questions/${id}`);
  const { data } = response;
  return data;
};

export const userDeleteQuestion = () =>{

  const queryClient = useQueryClient()
  const {mutate, isPending, isSuccess} = useMutation ({
    mutationFn: (id) => deleteQuestion(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['questions'] })
    }
  });

  return {deleteUserQuestion:mutate}
}