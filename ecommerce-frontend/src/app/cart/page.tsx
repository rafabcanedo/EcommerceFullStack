"use client"

import { CartProduct } from "@/@types";
import { Button } from "@/components/Button/Button";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Cart() {

 const { cartItems } = useAppSelector((state) => state)

 const dispatch = useAppDispatch()

 return (
  <div className="flex flex-row justify-between px-4">
   <div className="w-[1100px] h-[500px] border-2 border-gray-200 shadow-md px-4">
    <div className="flex flex-row justify-between mt-4">
    <h1 className="text-2xl font-semibold text-title">Shopping Cart</h1>
    <span className="text-base font-medium text-title">$ 900</span>
    </div>
    <div className="bg-zinc-400 h-0.5 w-full mt-1" />
    <div className="flex flex-col items-center justify-center">
    {cartItems && cartItems.length > 0 ? (
      cartItems.map((item) => (
        <div key={item.id}>

        </div>
      ))
    ) : (
     <div>
      <h3>Your cart is empty</h3>
      <span>Please, go to Shop and select an item</span>
     </div>
    )}
    </div>

    <div className="flex flex-row items-center justify-start bottom-0">
     <ArrowLeft className="text-sm text-title" />
     <Link href="/">
     <span className="text-lg text-title">
       Continue Shopping
     </span>
     </Link>
    </div>
   </div>

   <div>
    
   <div className="w-[500px] h-[500px] bg-zinc-300 border-2 border-zinc-300 shadow-md px-4">
     <h3 className="text-xl font-semibold text-title mt-4">Order Summary</h3>
     <div className="bg-zinc-400 h-0.5 w-full mt-1" />

     <div className="flex flex-row mt-4 justify-between">
      <span className="text-sm text-title">3 Items</span>
      <span className="text-sm text-primary">$42.00</span>
     </div>

     <div className="flex flex-col mt-8 gap-2">
     <span className="text-lg text-title font-alt">Promo Code</span>
     <input
      className="h-10 w-48 border-none outline-none rounded-sm px-4 bg-gray-200"
      placeholder="Enter Promo Code..."
     />
     </div>
     <div className="mt-4">
     <Button className="text-white bg-[#eb6e6e] hover:bg-[#d86868] rounded-sm">
      Apply
     </Button>
     </div>

     <div className="bg-zinc-400 h-0.5 w-full mt-4 mb-2" />

     <div className="flex flex-row mt-4 justify-between">
      <span className="text-lg text-title font-alt">Total Price</span>
      <span className="text-title font-medium text-lg">$42.00</span>
     </div>

     <div className="flex justify-center items-center mt-12">
      <Button className="h-10 px-20 text-primary bg-transparent border-2 border-primary hover:text-white hover:border-violet-200">
       Checkout
      </Button>
     </div>
   </div>

  </div>
    
  </div> 
 )
}