import { Button } from "@/components/Button/Button";
import { ArrowLeft } from 'lucide-react';

export default function Cart() {
 return (
  <div className="flex flex-row justify-between">
   <div className="w-[1100px] border-2 border-gray-200 shadow-md">
    <div className="flex flex-row">
    <h1>Shopping Cart</h1>
    <span>3 Items</span>
    </div>
    <div className="bg-zinc-400 h-0.5 w-40" />
    <div>
    <h3>Your cart is empty</h3>
    <span>Please, go to Shop and select an item</span>
    </div>

    <div className="flex flex-row">
     <ArrowLeft className="text-base text-title" />
     <span className="text-lg text-title">
       Continue Shopping
     </span>
    </div>
   </div>

   <div>
    
   <div className="w-[500px] bg-zinc-300 border-2 border-zinc-300 shadow-md">
     <h3>Order Summary</h3>
     <div className="bg-zinc-400 h-0.5 w-40" />

     <div>
      <span>3 Itenms</span>
      <span>$42.00</span>
     </div>

     <div className="flex flex-col">
     <span>Promo Code</span>
     <input
      className="h-10 w-48 border-none outline-none rounded-sm px-4 bg-gray-200"
      placeholder="Enter Promo Code..."
     />
     </div>
     <div>
     <Button>Apply</Button>
     </div>

     <div className="bg-zinc-400 h-0.5 w-40" />

     <div>
      <span>Total Price</span>
      <span>$42.00</span>
     </div>

     <div>
      <Button size="lg">Checkout</Button>
     </div>
   </div>

  </div>
    
  </div> 
 )
}