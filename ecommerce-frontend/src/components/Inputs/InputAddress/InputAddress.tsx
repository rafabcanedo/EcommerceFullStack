import { ComponentProps } from "react"
import { VariantProps, tv } from "tailwind-variants"

const inputaddress = tv({
 base: 'rounded border-2 border-zinc-400 focus:border-2 focus:border-zinc-500 px-3 bg-transparent text-zinc-900 focus:borer-none focus:outline-none',
 variants: {
  size: {
   default: 'h-10 w-72',
   lg: 'h-10 w-82',
   sm: 'h-10 w-56',
  },
 },
 defaultVariants: {
  size: 'default',
 }
})

export type InputAddressProps = ComponentProps<'input'> & VariantProps<typeof inputaddress> & {}

export function InputAddress({ size, className, ...props }: InputAddressProps) {
 return (
  <input
   className={inputaddress({ size, className })}
   {...props}
  />
 )
}