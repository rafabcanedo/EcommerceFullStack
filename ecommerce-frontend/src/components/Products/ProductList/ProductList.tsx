'use client'
import { useEffect, useState } from "react"
import axios from "axios"
import { ProductCard } from "@/components/Card/ProductCard/ProductCard"


export function ProductList() {
 const [data, setData] = useState([])

 const handleFetch = async () => {
  try {
   const response = await axios.get('http://localhost:3333/products')

   setData(response.data)
  } catch (error) {
   console.log(error)
  }
 }

 useEffect(() => {
    handleFetch()
 })

 return (
  <>
   <div className="mt-8 grid max-w-full grid-cols-4 gap-8">
    {data?.map((product) => (
      <ProductCard
       key={product.id}
       image={product.image}
       name={product.name}
       price={product.price}
      />
    ))}
   </div>
  </>
 )
}