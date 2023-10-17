import { ISocialProps } from "@/@types"

export function SocialCard({text, icon: Icon, href}: ISocialProps) {
 return (
  <div className="flex flex-col justify-center items-center">
   <Icon className="w-6 h-6 mt-3 text-primary hover:text-neutral-600 cursor-pointer" />
   <div>
    <p className="text-sm leading-relaxed text-title">
     {text}
    </p>
   </div>
  </div>
 )
}