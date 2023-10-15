import { CheckCircle } from "lucide-react"
import { ComponentProps } from "react"
import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
 base: 'flex items-center justify-center text-sm rounded bg-[#7c73e6] font-medium text-zinc-900 hover:bg-[#756cdd]',
 variants: {
  size: {
   default: 'h-10 px-4',
   lg: 'h-10 px-8',
   xl: 'h-8 px-10',
   sm: 'h-8 px-3',
   xs: 'h-6 px-2 text-xs',
  },
  success: {
   true: 'bg-emerald-500 hover:bg-emerald-600',
  },
 },
 defaultVariants: {
  size: 'default',
  success: false,
 }
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ success, size, className, ...props }: ButtonProps) {
 return (
  <button
   data-success={success}
   className={button({ size, success, className })}
   {...props}
  >
   { success ? <CheckCircle className="w-4 h-4" /> : props.children}
  </button>
 )
}