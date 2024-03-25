'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
//import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { useState } from "react"



type ProviderProps = {
  children : React.ReactNode
}

const ReactQueryProvider = ({children}:ProviderProps) =>{
  const [queryClient ] = useState(()=> new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false}/> */}

    </QueryClientProvider>
  )
  
}


export default ReactQueryProvider