import { Josefin_Sans } from 'next/font/google'
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'],
})

export default function MarketingPanel(){
   return (
    <div id="marketing-panel-main-div" className="flex gap-[5px] w-[100%] justify-evenly bg-[#F1F0FF] relative items-center p-[30px] h-[45vh] sm:h-[60vh] ">
        <div>
        <h3 className="text-[#FB2E86] text-[10px]">Best Furniture For Your Castle....</h3>
        <h1 className={josefinSans.className}><span className="text-[24px] font-bold">New Furniture Collection
        Trends in 2020</span></h1>
        <p className="hidden  sm:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
        in phasellus non in justo.</p>
        <button className="bg-[#FB2E86] text-white py-[8px] px-[12px] cursor-pointer text-[10px]"><span className={josefinSans.className}>Shop Now</span></button>
        </div>
        <img src="/items/sofa-promotional-header.png" alt="marketing" className="w-[60%] max-w-[260px]" />
        <img src="/imgs/promotional page nav.png" alt="marketing" className="w-[10%] max-w-[40px] absolute bottom-0 mb-[20px]" />
      </div>
   )    
}
