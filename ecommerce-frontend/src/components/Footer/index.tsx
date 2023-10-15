export function Footer() {
  return (
    <div className="w-full top-0 left-0">
      <footer className="flex flex-row justify-between md:flex items-center bg-nav py-4 md:px-10 px-7 shadow-sm">
        <div>
        <h3>Logo</h3>
        </div>

        <div className="flex flex-row gap-8">
         <div className="flex flex-col gap-2">
          <a className="text-base font-sans font-normal hover:underline decoration-emerald-600 cursor-pointer">
           Home
          </a>

          <a className="text-base font-sans font-normal hover:underline decoration-emerald-600 cursor-pointer">
           Shop
          </a>
         </div>
         <div className="flex flex-col gap-2">
          <a className="text-base font-sans font-normal hover:underline decoration-emerald-600 cursor-pointer">
           My Cart
          </a>

          <a className="text-base font-sans font-normal hover:underline decoration-emerald-600 cursor-pointer">
           About Us
          </a>
         </div>
        </div>

        <div>&copy; {new Date().getFullYear()} Canedo. All rights reserved</div>
      </footer>
    </div>
  )
}
