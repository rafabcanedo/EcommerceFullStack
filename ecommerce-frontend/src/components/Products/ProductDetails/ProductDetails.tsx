"use client"
import { IProduct } from "@/@types";
import { Button } from "@/components/Button/Button";

interface ProductDetailsProps {
 product: IProduct;
}

export function ProductDetails({ product }: ProductDetailsProps) {
 return (
  <section className="min-w-screen p-24">

   <div className="w-full h-[800px] bg-zinc-300 border-2 border-zinc-300 shadow-md px-4">
   <main className="flex flex-row item-center justify-between">
    <div className="flex justify-center items-center">
     <img src={product.image} width={500} height={500} alt="Product Image" />
    </div>

   <div className="w-1/2 h-[800px]">
    <div className="flex flex-col mt-6">
     <h3 className="text-2xl font-alt text-title mt-4">Product Details</h3>
     
     <div className="bg-zinc-400 h-0.5 w-full mt-1" />
     
     <div className="flex flex-col mt-6 mb-12">
     <span className="text-xl font-alt text-title">{product.name}</span>
     <span className="text-lg font-alt text-title">{product.description}</span>
     <span className="text-base font-sans text-zinc-500 mt-12">Stock: 10</span>
     </div>

     <div className="bg-zinc-400 h-0.5 w-full mt-1" />

     <div className="flex justify-center items-center mt-12">
     <Button className="h-10 px-20 text-primary bg-transparent border-2 border-primary hover:text-white hover:border-violet-200">
       Buy
     </Button>
     </div>

    </div>
   </div>
   </main>
   </div>

  </section>
 )
}