'use client'
import { useState } from 'react'
import { X, AlignLeft } from 'lucide-react'

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <div className="w-full top-0 left-0">
      <nav className="md:flex items-center justify-between bg-red-200 py-4 md:px-10 px-7">
        <div>
          <h3>Ecommerce</h3>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <X /> : <AlignLeft />}
        </div>

        <ul>
          <li>Shop</li>
          <li>About Us</li>
          <li>My Cart</li>
        </ul>
        <div>
          <button>Login</button>
        </div>
      </nav>
    </div>
  )
}
