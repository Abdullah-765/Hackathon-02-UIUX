import { Josefin_Sans } from 'next/font/google'
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'],
})

import Image from 'next/image'

export default function MarketingPanel(){
   return (
    <div id="marketing-panel-main-div" className="lg:px-[200px] overflow-hidden box-border flex gap-[5px] w-[100%] justify-evenly bg-[#F1F0FF] relative items-center p-[30px] h-[50vh] sm:h-[60vh] ">
        <div className='max-w-[500px]'>
        <h3 className="text-[#FB2E86] text-[12px]">Best Furniture For Your Castle....</h3>
        <h1 className={josefinSans.className}><span className="text-[24px] font-bold lg:text-[36px]">New Furniture Collection
        Trends in 2020</span></h1>
        <p className="hidden  sm:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
        in phasellus non in justo.</p>
        <button className="bg-[#FB2E86] text-white py-[8px] px-[20px] cursor-pointer text-[12px] mt-[30px]"><span className={josefinSans.className}>Shop Now</span></button>
        </div>
        <Image src={"/lamp-main-page.png"} 
  alt="marketing" 
  width={250} height={250} className='hidden lg:block lg:absolute top-0 left-1' />
        <Image src="/items/sofa-promotional-header.png" alt="marketing" width={450} height={450} layout='responsive' className="w-[60%] max-w-[450px] " />
        <img src="/imgs/promotional page nav.png" alt="marketing" className="w-[10%] max-w-[40px] absolute bottom-0 mb-[20px]" />
      </div>
   )    
}
