import { Button } from "@/components/Button/Button";
import { InputAddress } from "@/components/Inputs/InputAddress/InputAddress";

export default function Address() {
 return (
  <section className="min-h-screen flex flex-col items-center justify-center">
    <div>
    <h1 className="text-lg text-title font-pop underline decoration-zinc-500">
     Your Address
    </h1>
    </div>

    <div className="flex flex-col items-center justify-center w-[800px] h-96 bg-zinc-300 border-2 border-zinc-300 shadow-md px-4">
    <div className="grid grid-cols-2 gap-4 mt-4">
    <div>
    <InputAddress 
     placeholder="Enter your name"
     type="text"
    />
    </div>

    <div>
    <InputAddress 
     placeholder="Your Street"
     type="text"
    />
    </div>
    
    <div>
    <InputAddress
     placeholder="Your District"
     type="text"
    />
    </div>

    <div>
    <InputAddress 
     placeholder="Your Number"
     type="number"
     className="h-10 w-36"
    />
    </div>

    <div>
    <InputAddress
     placeholder="Your City"
     type="text"
    />
    </div>
    
    <div>
    <InputAddress
     placeholder="Your State"
     type="text"
    />
    </div>

    <div>
    <InputAddress 
     placeholder="Zip Code"
     type="number"
     className="h-10 w-36"
    />
    </div>
    </div>

    <div className="flex w-full justify-end mt-8 px-12">
     <Button size="xl">Save</Button>
    </div>
    </div>

  </section>
 )
}