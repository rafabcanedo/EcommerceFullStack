import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Inputs/Input/Input";
import Link from "next/link";
import { Mail, Lock } from 'lucide-react';

export default function Login() {
 return (
  <main className="m-0 w-full">
   <div className="flex min-h-screen w-full flex-wrap items-center justify-center p-2">
    <div className="w-[390px] rounded-lg bg-slate-200 px-20 py-20">
    
    <form className="flex w-full max-w-xs flex-col gap-4 bg-slate-200">
     <div className="flex items-center justify-center">
      <h1 className="font-pop text-title text-xl">
       Ecommerce
      </h1>
     </div>

     <div className="flex flex-col gap-4">
     <div className="flex flex-row items-center">
      <Mail className="h-6 w-6 text-zinc-400" />
      <Input 
       placeholder="Enter your Email"
       type="email"
      />
     </div>
     <div className="flex flex-row items-center">
      <Lock className="h-6 w-6 text-zinc-400" />
      <Input 
       placeholder="Enter your Password"
       type="password"
      />
     </div>
     </div>

     <div className="flex flex-row font-pop text-xs justify-end items-center">
      <span className="text-title">
       Forgot your
      </span>
      <p className=" text-title hover:text-primary ml-1 cursor-pointer">password?</p>
     </div>

     <div className="flex items-center justify-center">
      <Button type="submit" size="lg" className="bg-[#2CAEB8] px-20">Login</Button>
     </div>

     <div className="flex flex-row items-center justify-center">
      <span className="text-title font-pop text-xs">
       Don't have an accont?
      </span>
      <Link href="register">
      <p className="text-primary ml-1 font-pop text-sm">Register</p>
      </Link>
     </div>
    </form>
    </div>
    </div>
  </main>
 )
}