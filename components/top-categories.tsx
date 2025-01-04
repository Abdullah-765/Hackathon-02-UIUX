import { Josefin_Sans } from 'next/font/google'
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'],
})

export default function TopCategories(){
   return (
    <div id="Top-categories" className="mx-[20px] mt-[45px]">
        <h2 className={`${josefinSans.className} mt-6 mb-1 text-center text-[26px] text-[#1A0B5B] font-bold`}>Top Categories</h2>
        <ul className="grid grid-cols-2 gap-[20px]" id="top-categories">

        <div className='flex items-center flex-col gap-[10px] shadow-sm'>
          <div id='top-categories-image-hover-shadow-div' className="group flex items-center justify-center  bg-[#F6F7FB] rounded-full h-[145px] w-[145px] relative hover:shadow-[-3px_5px_0px_0px_rgb(152,119,231)]">
          <img src="/top-categories/image 23.png" alt=""/>
          <button className='absolute bg-[#08D15F] p-[5px] text-[8px] text-white bottom-3 hidden group-hover:block'>View Shop</button>
          </div>
          <ul className="flex justify-center flex-col items-center w-[100%] gap-[4px] ">
              <p className={josefinSans.className}>Mini LCW Chair</p>
              <p className={josefinSans.className}>$42.00</p>
            </ul>
          </div>
          <div className='flex items-center flex-col gap-[10px] shadow-sm'>
          <div id='top-categories-image-hover-shadow-div' className="group flex items-center justify-center  bg-[#F6F7FB] rounded-full h-[145px] w-[145px] relative hover:shadow-[-3px_5px_0px_0px_rgb(152,119,231)]">
          <img src="/top-categories/image 1171.png" alt=""/>
          <button className='absolute bg-[#08D15F] p-[5px] text-[8px] text-white bottom-3 hidden group-hover:block'>View Shop</button>
          </div>
          <ul className="flex justify-center flex-col items-center w-[100%] gap-[4px] ">
              <p className={josefinSans.className}>Mini LCW Chair</p>
              <p className={josefinSans.className}>$42.00</p>
            </ul>
          </div>
          <div className='flex items-center flex-col gap-[10px] shadow-sm'>
          <div id='top-categories-image-hover-shadow-div' className="group flex items-center justify-center  bg-[#F6F7FB] rounded-full h-[145px] w-[145px] relative hover:shadow-[-3px_5px_0px_0px_rgb(152,119,231)]">
          <img src="/top-categories/image 1168.png" alt=""/>
          <button className='absolute bg-[#08D15F] p-[5px] text-[8px] text-white bottom-3 hidden group-hover:block'>View Shop</button>
          </div>
          <ul className="flex justify-center flex-col items-center w-[100%] gap-[4px] ">
              <p className={josefinSans.className}>Mini LCW Chair</p>
              <p className={josefinSans.className}>$42.00</p>
            </ul>
          </div>
          <div className='flex items-center flex-col gap-[10px] shadow-sm'>
          <div id='top-categories-image-hover-shadow-div' className="group flex items-center justify-center  bg-[#F6F7FB] rounded-full h-[145px] w-[145px] relative hover:shadow-[-3px_5px_0px_0px_rgb(152,119,231)]">
          <img src="/top-categories/image 1171.png" alt=""/>
          <button className='absolute bg-[#08D15F] p-[5px] text-[8px] text-white bottom-3 hidden group-hover:block'>View Shop</button>
          </div>
          <ul className="flex justify-center flex-col items-center w-[100%] gap-[4px] ">
              <p className={josefinSans.className}>Mini LCW Chair</p>
              <p className={josefinSans.className}>$42.00</p>
            </ul>
          </div>
        </ul>
      </div>
   )    
}
