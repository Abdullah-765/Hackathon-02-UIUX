import { Josefin_Sans } from 'next/font/google'
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'],
})

export default function TrendingProducts(){
   return (
    <div id="Trending-products" className="mx-[20px] mt-[45px]">
        <h2 className={`${josefinSans.className} mt-6 mb-1 text-center text-[26px] text-[#1A0B5B] font-bold`}>Trending Products</h2>
        <ul className="grid grid-cols-2 gap-[20px]" id="featured-products">
          <div className="flex items-center justify-center flex-col shadow-sm">
            <img src="/Trending-products/image 1171.png" alt="" className="bg-[#F6F7FB] h-[70%] mb-[10px]"/>
            <ul className="flex justify-center flex-col items-center bg-white w-[100%] gap-[4px] py-[10px]">
              <h3 className="text-[#1A0B5B] font-[600] text-[10px]">Cantiliver Chair</h3>
              <ul>
                <p className={`${josefinSans.className} inline-block mr-[10px] text-[#151875]`}>$22.00</p>
                <p className={`${josefinSans.className}  inline-block opacity-60 line-through`}>$42.00</p>
              </ul>
            </ul>
          </div>
          <div className="flex items-center justify-center flex-col shadow-sm">
            <img src="/Trending-products/image 1170.png" alt="" className="bg-[#F6F7FB] h-[70%] mb-[10px]"/>
            <ul className="flex justify-center flex-col items-center bg-white w-[100%] gap-[4px] py-[10px] ">
              <h3 className="text-[#1A0B5B] font-[600] text-[10px]">Cantiliver Chair</h3>
              <ul>
                <p className={`${josefinSans.className} inline-block mr-[10px] text-[#151875]`}>$22.00</p>
                <p className={`${josefinSans.className}  inline-block opacity-60 line-through`}>$42.00</p>
              </ul>
              
            </ul>
          </div>

          <div className="flex items-center justify-center flex-col shadow-sm">
            <img src="/Trending-products/image 31.png" alt="" className="bg-[#F6F7FB] h-[70%] mb-[10px]"/>
            <ul className="flex justify-center flex-col items-center bg-white w-[100%] gap-[4px] py-[10px] ">
              <h3 className="text-[#1A0B5B] font-[600] text-[10px]">Cantiliver Chair</h3>
              <ul>
                <p className={`${josefinSans.className} inline-block mr-[10px] text-[#151875]`}>$22.00</p>
                <p className={`${josefinSans.className}  inline-block opacity-60 line-through`}>$42.00</p>
              </ul>
            </ul>
          </div>
          <div className="flex items-center justify-center flex-col shadow-sm">
            <img src="/Trending-products/image 32.png" alt="" className="bg-[#F6F7FB] h-[70%] mb-[10px]"/>
            <ul className="flex justify-center flex-col items-center bg-white w-[100%] gap-[4px] py-[10px]">
              <h3 className="text-[#1A0B5B] font-[600] text-[10px]">Cantiliver Chair</h3>
              <ul>
                <p className={`${josefinSans.className} inline-block mr-[10px] text-[#151875]`}>$22.00</p>
                <p className={`${josefinSans.className}  inline-block opacity-60 line-through`}>$42.00</p>
              </ul>
            </ul>
          </div>
        </ul>

        <ul className="flex  flex-wrap gap-[20px] mt-[20px]">
        <div className=' h-auto p-[10px] bg-[#FFF6FB] flex-1 flex justify-between'>
          <li className='flex flex-col justify-stretch items-start'>
            <h2 className={`${josefinSans.className} text-[#1A0B5B] text-[18px] text-nowrap font-bold`}>23% off in all products</h2>
            <h3 className="text-[#FB2E86] underline text-[10px]">Shop Now</h3>
          </li>
            <img src="/Trending-products/image 1162.png" alt="" className='w-[110px]' />
        </div>  
        <div className='grid grid-cols-2 gap-[20px]'>
        <div className=' h-auto p-[10px] bg-[#EEEFFB] flex flex-col justify-between '>
          <li className='flex flex-col justify-stretch items-start'>
            <h2 className={`${josefinSans.className} text-[#1A0B5B] text-[18px] font-bold`}>23% off in all products</h2>
            <h3 className="text-[#FB2E86] underline text-[10px]">View Collection</h3>
          </li>
          <img src="/Trending-products/image 1161.png" alt=""  />
        </div>  
        <ul className=' h-auto p-[10px] gap-[20px] flex flex-col'>
            <li>
              <img src="/Trending-products/image 30.png" alt="" className='w-[70px] py-[2px] px-[10px] bg-[#F6F7FB]'/>
              <p className={`${josefinSans.className} text-[12px] text-[#151875]`}>Executive Seat chair <br /><span className='text-[#151875]'>$32.00</span></p>
            </li>
            <li>
              <img src="/Trending-products/image 30.png" alt="" className='w-[70px] py-[2px] px-[10px] bg-[#F6F7FB]'/>
              <p className={`${josefinSans.className} text-[12px] text-[#151875]`}>Executive Seat chair <br /><span className='text-[#151875]'>$32.00</span></p>
            </li>
            <li>
              <img src="/Trending-products/image 30.png" alt="" className='w-[70px] py-[2px] px-[10px] bg-[#F6F7FB]'/>
              <p className={`${josefinSans.className} text-[12px] text-[#151875]`}>Executive Seat chair <br /><span className='text-[#151875]'>$32.00</span></p>
            </li>
        </ul>  
        </div>
        </ul>
      </div>
   )    
}
