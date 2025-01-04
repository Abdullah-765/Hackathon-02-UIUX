import { Josefin_Sans } from 'next/font/google'
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'],
})

export default function UniqueFeaturesTrendingProducts(){
   return (
    <div id="marketing-panel-main-div" className="flex gap-[5px] w-[100%] bg-[#F1F0FF] justify-evenly relative mt-[45px] items-center p-[30px] h-[40vh] sm:h-[60vh] ">
        <img src="/items/group-153.png" alt="marketing" className="w-[50%] max-w-[250px]" />
        <div className='ml-[20px]'>  
        <h1 className={josefinSans.className}><span className="text-[18px] font-bold">Unique Features Of leatest & Trending Poducts</span></h1>
        <ul className='hidden lg:inline-block'>
          <li><div id="bullets" className='bg-red-600 w-[8px] h-[8px] rounded-full'/> <p className='text-[10px]'>All frames constructed with hardwood solids and laminates</p></li>
          <li><div  className='bg-green-600 w-[8px] h-[8px] rounded-full'></div> <p className='text-[10px]'>Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</p></li>
          <li><div  className='bg-blue-600 w-[8px] h-[8px] rounded-full'></div> <p className='text-[10px]'>Arms, backs and seats are structurally reinforced</p></li>
        </ul> 

        <ul className='flex gap-[10px] items-center'>
          <li><button className="bg-[#FB2E86] text-white py-[8px] px-[12px] cursor-pointer text-[10px] mt-[5px]"><span className={josefinSans.className}>Add to Cart</span></button></li>

        <li className='flex flex-col items-start justify-center'>
        <p className={`${josefinSans.className} text-[10px] text-[#151875]`}>B&B Italian Sofa</p>
        <p className={`${josefinSans.className} text-[10px] text-[#151875]`}>$32.00</p>
        </li>
        </ul> 

        </div>
      </div>
   )    
}
