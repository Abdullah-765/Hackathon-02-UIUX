import { Josefin_Sans } from 'next/font/google'
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'],
})

export default function FeaturedProducts(){
   return (
    <div id="featured-products" className="mx-[20px] mt-[45px]">
        <h2 className={`${josefinSans.className} mt-6 mb-1 text-center text-[26px] text-[#1A0B5B] font-bold`}>Featured Products</h2>
        <h3 className="text-center text-[14px] text-[#FB2E86] mb-3 font-bold ">Check All</h3>
        <ul className="grid grid-cols-2 gap-[20px]" id="featured-products">

          <div className="flex items-center justify-center flex-col shadow-sm">
            <img src="/items/image 1168.png" alt="" className="bg-[#F6F7FB] h-[70%] mb-[10px]"/>
            <ul className="flex justify-center flex-col items-center bg-white w-[100%] gap-[4px] ">
              <h3 className="text-[#FB2E86] font-[600]">Cantiliver Chair</h3>
              <ul id="colors" className="flex gap-2 items-center">
                <li className="w-[7px] h-[2px] bg-[#05E6B7]"></li>
                <li className="w-[7px] h-[2px] bg-[#F701A8]"></li>
                <li className="w-[7px] h-[2px] bg-[#00009D]"></li>
              </ul>
              <p className={josefinSans.className}>Code - Y523201</p>
              <p className={josefinSans.className}>$42.00</p>
            </ul>
          </div>
          <div className="flex items-center justify-center flex-col shadow-sm">
            <img src="/items/image 1169.png" alt="" className="bg-[#F6F7FB] h-[70%] mb-[10px]"/>
            <ul className="flex justify-center flex-col items-center bg-white w-[100%] gap-[4px] ">
              <h3 className="text-[#FB2E86] font-[600]">Cantiliver Chair</h3>
              <ul id="colors" className="flex gap-2 items-center">
                <li className="w-[7px] h-[2px] bg-[#05E6B7]"></li>
                <li className="w-[7px] h-[2px] bg-[#F701A8]"></li>
                <li className="w-[7px] h-[2px] bg-[#00009D]"></li>
              </ul>
              <p className={josefinSans.className}>Code - Y523201</p>
              <p className={josefinSans.className}>$42.00</p>
            </ul>
          </div>

          <div className="flex items-center justify-center flex-col shadow-sm">
            <img src="/items/image 3.png" alt="" className="bg-[#F6F7FB] h-[70%] mb-[10px]"/>
            <ul className="flex justify-center flex-col items-center bg-white w-[100%] gap-[4px] ">
              <h3 className="text-[#FB2E86] font-[600]">Cantiliver Chair</h3>
              <ul id="colors" className="flex gap-2 items-center">
                <li className="w-[7px] h-[2px] bg-[#05E6B7]"></li>
                <li className="w-[7px] h-[2px] bg-[#F701A8]"></li>
                <li className="w-[7px] h-[2px] bg-[#00009D]"></li>
              </ul>
              <p className={josefinSans.className}>Code - Y523201</p>
              <p className={josefinSans.className}>$42.00</p>
            </ul>
          </div>
          <div className="flex items-center justify-center flex-col shadow-sm">
            <img src="/items/image 1.png" alt="" className="bg-[#F6F7FB] h-[70%] mb-[10px]"/>
            <ul className="flex justify-center flex-col items-center bg-white w-[100%] gap-[4px]">
              <h3 className="text-[#FB2E86] font-[600]">Cantiliver Chair</h3>
              <ul id="colors" className="flex gap-2 items-center">
                <li className="w-[7px] h-[2px] bg-[#05E6B7]"></li>
                <li className="w-[7px] h-[2px] bg-[#F701A8]"></li>
                <li className="w-[7px] h-[2px] bg-[#00009D]"></li>
              </ul>
              <p className={josefinSans.className}>Code - Y523201</p>
              <p className={josefinSans.className}>$42.00</p>
            </ul>
          </div>
        </ul>
      </div>
   )    
}
