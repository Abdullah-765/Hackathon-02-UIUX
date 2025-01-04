import { Josefin_Sans } from 'next/font/google'
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'],
})

export default function DiscountItem(){
   return (
    <div id="Discount-item" className='mx-[20px] mt-[45px]'>
    <h2 className={`${josefinSans.className} mt-6 mb-1 text-center text-[26px] text-[#1A0B5B] font-bold`}>Discount Item</h2>
      <ul className="text-center text-[#1A0B5B] flex justify-evenly text-[12px] mb-3">
        <li className="text-[#FB2E86] underline">Wood Chair &#x2022;</li>
        <li>Plastic Chair</li>
        <li>Sofa Collection</li>
      </ul>

      <div>
        <div>
          <img src="/items/discount-item.png" alt="" />
          </div>
        <div>
        <h1 className={`${josefinSans.className} text-[18px] text-[#1A0B5B] font-bold`}>20% Discount Of All Products</h1>
          <h3 className={`${josefinSans.className} text-[12px] text-[#FB2E86]`}>Eams Sofa Compact</h3>
          <p className='text-[#B7BACB] text-[10px] mb-[10px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
          <ul className='flex flex-col gap-y-[5px] gap-x-[20px]'>
            <li className='text-[#B7BACB] text-[10px]' >&#10003; Material expose like metals</li>
            <li className='text-[#B7BACB] text-[10px]'>&#10003; Clear lines and geomatric figures</li>
            <li className='text-[#B7BACB] text-[10px]'>&#10003; Simple neutral colours.</li>
            <li className='text-[#B7BACB] text-[10px]'>&#10003; Material expose like metals</li>
          </ul>
          <button className={`${josefinSans.className} bg-[#FB2E86] text-white py-[10px] px-[28px] cursor-pointer text-[12px] mt-[10px]`}>Shop Now</button>
        </div>
      </div>
    </div>
   )    
}   
