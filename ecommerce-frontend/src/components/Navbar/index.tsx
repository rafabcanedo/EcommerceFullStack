'use client'
import { useState } from 'react'
import { Button } from '../Button/Button'
import Link from 'next/link'
import { X, AlignLeft } from 'lucide-react'

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <div className="w-full top-0 left-0">
      <nav className="md:flex items-center justify-between bg-nav py-4 md:px-10 px-7 shadow-sm">
        <div>
          <h3>Ecommerce</h3>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <X /> : <AlignLeft />}
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-nuv dark:bg-nav md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open
              ? 'top-20 opacity-100'
              : 'top-[-490px] md:opacity-100 opacity-0'
          }`}>
          <li className='text-lg font-sans font-normal hover:underline decoration-emerald-600 mr-6 md:ml-8 md:my-0 my-0 cursor-pointer'>
           Shop
          </li>
          
          <Link href="cart">
          <li className='text-lg font-sans font-normal hover:underline decoration-emerald-600 mr-6 md:ml-8 md:my-0 my-0 cursor-pointer'>
           My Cart
          </li>
          </Link>

          <Link href="about">
          <li className='text-lg font-sans font-normal hover:underline decoration-emerald-600 mr-6 md:ml-8 md:my-0 my-0 cursor-pointer'>
           About Us
          </li>
          </Link>
        
        <div>
          <Link href="login">
          <Button size="lg">Login</Button>
          </Link>
        </div>
        </ul>
      </nav>
    </div>
  )
}
