import { IProduct } from "@/@types";
import { Button } from "@/components/Button/Button";
import Image from "next/image";

// interface ProductCardProps {
//  product: IProducts
// }

export function ProductCard({ name, image, price, }:IProduct) {
 return (
  <div className="flex w-64 flex-col items-center justify-center rounded-md bg-[#eeeeee]">
   <Image src={image} width={200} height={200} alt="Image Product" />
   <div className="flex flex-col items-center justify-center p-2">
    <div className="m-2 h-[2px] w-56 bg-zinc-600 p-0" />

    <h3 className="font-sans text-xl text-title">{name}</h3>
    <p className="text-lg font-medium text-slate-900">R$ {price}</p>

    <Button size="sm">Comprar</Button>

   </div>
  </div>
 )
}

/*

import { IProduct } from '@/@types'
import AddToCart from './AddToCart'

interface ProductCardProps {
  product: IProduct
}

export function ProductCard(props: ProductCardProps) {
  return (
    <div className="flex w-64 flex-col items-center justify-center rounded-md bg-[#eeeeee]">
      <img src={props.image} width={200} height={200} />
      <div className="flex flex-col items-center justify-center p-2">
        <div className="m-2 h-[2px] w-56 bg-cinza p-0" />
        <h3 className="font-sans text-xl text-title">{props.name}</h3>
        <p className="text-lg font-medium text-hover">R$ {props.price}</p>
        <AddToCart product={props.product} />
      </div>
    </div>
  )
}
*/