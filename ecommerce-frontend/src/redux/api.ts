import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '@/@types';

export const MyApi = createApi({
 reducerPath: "MyApi",
 baseQuery: fetchBaseQuery({
  baseUrl: "http://localhost:3333/",
 }),
 endpoints: (builder) => ({
  getProducts: builder.query<IProduct[], string>({ query: () => "products" }),
 }),
})

export const { useGetProductsQuery } = MyApi