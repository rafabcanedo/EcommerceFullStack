"use client"
import { useState, SyntheticEvent } from "react";
import { useDispatch } from "react-redux";
import { api } from "@/services/api";
import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Inputs/Input/Input";
import Link from "next/link";
import { Mail, Lock, User } from 'lucide-react';
import { UserErrors } from "@/errors/errors";

export default function Register() {

  const dispatch = useDispatch();

  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ confirmPassword, setConfirmPassword ] = useState('')
 
 const handleRegister = async (event: SyntheticEvent) => {
  event.preventDefault();
  try {
  await api.post('/users', {
    name,
    email,
    password,
    confirmPassword
  })
  alert("Registration Completed!!");
  } catch(error) {
    if (error?.response?.data?.type === UserErrors.USERNAME_ALREADY_EXISTS) {
      alert("ERROR: Username already in use.")
    } else {
      alert("ERROR: Something went wrong.")
    }
  }
 }

 return (
    <main className="m-0 w-full">
    <div className="flex min-h-screen w-full flex-wrap items-center justify-center p-2">
     <div className="w-[390px] rounded-lg bg-slate-200 px-20 py-20">
     
     <form
      onSubmit={handleRegister}
      className="flex w-full max-w-xs flex-col gap-4 bg-slate-200"
     >
      <div className="flex items-center justify-center">
       <h1 className="font-pop text-title text-xl">
        Ecommerce
       </h1>
      </div>
 
      <div className="flex flex-col gap-4">
      <div className="flex flex-row items-center">
       <User className="h-6 w-6 text-zinc-400" />
       <Input 
        placeholder="Enter your Name"
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
       />
      </div>

      <div className="flex flex-row items-center">
       <Mail className="h-6 w-6 text-zinc-400" />
       <Input 
        placeholder="Enter your Email"
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
       />
      </div>

      <div className="flex flex-row items-center">
       <Lock className="h-6 w-6 text-zinc-400" />
       <Input 
        placeholder="Enter your Password"
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
       />
      </div>

      <div className="flex flex-row items-center">
       <Lock className="h-6 w-6 text-zinc-400" />
       <Input 
        placeholder="Confirm your Password"
        type="password"
        id="confirm_password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
       />
      </div>
      </div>
      
      <div className="flex items-center justify-center">
       <Button type="submit" size="lg" className="px-20">
        Register
       </Button>
      </div>
 
      <div className="flex flex-row items-center justify-center">
       <span className="text-title font-pop text-xs">
        have an accont?
       </span>
       <Link href="login">
       <p className="text-primary ml-1 font-pop text-sm">Login</p>
       </Link>
      </div>
     </form>
     </div>
     </div>
   </main>
 )
}