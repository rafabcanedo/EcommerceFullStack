"use client"
import { IProduct } from "@/@types"
import { ProductDetails } from "@/components/Products/ProductDetails/ProductDetails"

interface IPrams extends IProduct {
 productId?: string
 product: IProduct
}

export default function Product({params}: {params: IPrams}) {
 console.log('params', params)
 return (
  <div>
    <ProductDetails product={Product} />
  </div>
 )
}