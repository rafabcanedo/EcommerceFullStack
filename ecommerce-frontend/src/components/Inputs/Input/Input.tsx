import { ComponentProps } from "react"
import { VariantProps, tv } from "tailwind-variants"

const input = tv({
 base: 'rounded border-2 border-zinc-400 focus:border-2 focus:border-zinc-500 px-3 bg-transparent text-zinc-900 focus:borer-none focus:outline-none',
 variants: {
  size: {
   default: 'h-10 w-72',
  },
 },
 defaultVariants: {
  size: 'default',
 },
})

export type InputProps = ComponentProps<'input'> & VariantProps<typeof input> & {}

export function Input({ size, ...props }:InputProps) {
 return (
  <input
   className={input({ size })}
   {...props}
  />
 )
}