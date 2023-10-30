'use client'
import { useEffect, useState } from "react"
import { ProductCard } from "@/components/Card/ProductCard/ProductCard"
import { useGetProductsQuery } from "@/redux/api"


export function ProductList() {
 
 const { isLoading, data } = useGetProductsQuery("");

 return (
  <>
   <div className="mt-8 grid max-w-full grid-cols-4 gap-8">
   
   {isLoading ? (
    <div>Loading...</div>
   ): (
    data?.map(i=>(
      <ProductCard
       key={i.id}
       image={i.image}
       name={i.name}
       price={i.price}
      />
    ))
    )}

   </div>
  </>
 )
}