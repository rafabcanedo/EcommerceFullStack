import { Button } from "@/components/Button/Button";
import { InputAddress } from "@/components/Inputs/InputAddress/InputAddress";

export default function Profile() {
  return (
  <section className="min-h-screen flex flex-col items-center justify-center">
   <div>
    <h1 className="text-lg text-title font-semibold underline decoration-zinc-500 ml-4">
     Your Profile
    </h1>

    <div className="flex flex-col items-center justify-center w-[800px] h-96 bg-zinc-300 border-2 border-zinc-300 shadow-md px-4">
    <div className="grid grid-cols-2 gap-4 mt-4">
    <div className="flex flex-col">
     <label className="font-sans text-lg text-title">Your name</label>
     <InputAddress
      placeholder="Rafael Canedo"
      type="text"
     />
    </div>
    <div className="flex flex-col">
     <label className="font-sans text-lg text-title">Your email</label>
     <InputAddress 
      placeholder="example@gmail.com"
      type="email"
      disabled
      className="cursor-not-allowed"
     />
    </div>
    <div className="flex flex-col">
     <label className="font-sans text-lg text-title">Your new password</label>
     <InputAddress 
      placeholder="Your new password"
      type="password"
     />
    </div>
    <div className="flex flex-col">
     <label className="font-sans text-lg text-title">Confirm your password</label>
     <InputAddress 
      placeholder="Confirm your new password"
      type="password"
     />
    </div>
    </div>

    <div className="flex w-full justify-end mt-8 px-12">
     <Button size="xl">Save</Button>
    </div>
    </div>

   </div>
  </section>
  )
}