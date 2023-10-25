import { InputAddress } from "@/components/Inputs/InputAddress/InputAddress";

export default function Address() {
 return (
  <div>
    <h1>Address</h1>

    <InputAddress 
     placeholder="Seu nome completo"
     type="text"
    />

    <InputAddress 
     placeholder="Nome da sua Rua"
     type="text"
    />
    
    <InputAddress 
     placeholder="Nome do seu Bairro"
     type="text"
    />
    
    <InputAddress 
     placeholder="Zip Code"
     type="number"
     className="h-10 w-36"
    />
  </div>
 )
}