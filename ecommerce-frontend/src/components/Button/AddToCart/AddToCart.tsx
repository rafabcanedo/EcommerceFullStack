"use client"
import React from "react"
import { Button } from "../Button"
import { IProduct } from "@/@types"
import { increment, productQntSelector } from "@/redux/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";

interface Props {
 product: IProduct
}

const AddToCart = (props: Props) => {
  const dispatch = useAppDispatch()
  
  const qty = useAppSelector((state) =>
  productQntSelector(state, props.product.id)
  )
 return (
  <div className="flex justify-center">
    <Button
     onClick={() => dispatch(increment(props.product))}
    >
     Buy
    </Button>
  </div>
 )
}

export default AddToCart;