import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Button } from "@/components/Button/Button";
import { ProductList } from "@/components/Products/ProductList/ProductList";

export default function Home() {
  return (
   <div>
    <Button size="default">Teste</Button>

    <ProductList />
   </div>
  )
}
