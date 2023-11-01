import { IProduct } from "@/@types";
import { Button } from "@/components/Button/Button";
import { useRouter } from "next/navigation";
// import Image from "next/image";

interface Props extends IProduct {
 product: IProduct
}

export function ProductCard({ id, name, image, price, ...props }:Props) {
 
 const router = useRouter();

 return (
      <div className="flex w-64 flex-col items-center justify-center rounded-md bg-[#eeeeee]">
        <img src={image} width={200} height={200} />
        <div className="flex flex-col items-center justify-center p-2">
          <div className="m-2 h-[2px] w-56 bg-cinza p-0" />
          <h3 className="font-sans text-xl text-title">{name}</h3>
          <p className="text-lg font-medium text-hover">R$ {price}</p>
          <Button
           onClick={() => router.push(`/product/${id}`)}
          >
            Ver Produto
          </Button>
        </div>
      </div>
    )
}