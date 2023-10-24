'use client'
import { ReactNode } from "react"
import { Provider } from 'react-redux'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { store } from './store'
import { MyApi } from "./api"

export function ReduxProvider({ children }: { children: ReactNode }) {
 return (
 <Provider store={store}>
  <ApiProvider api={MyApi}>
    {children}
   </ApiProvider>
 </Provider>
 )
}