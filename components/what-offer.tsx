import { Josefin_Sans } from 'next/font/google'
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'],
})

export default function whatWeOffer(){
   return (
    <div className='mx-[20px] mt-[45px]'>
      <h2 className={`${josefinSans.className} mb-[10px] text-center text-[26px] text-[#1A0B5B] font-bold`}>What Shopex Offer!</h2>
      <ul className='flex gap-[10px] justify-evenly flex-wrap'>
        <li className={`${josefinSans.className} shadow-lg w-[105px] h-[120px] flex flex-col gap-2 items-center justify-center`} ><img src="/24-hours-support 1.png" alt="" /><h2>24/7 Support</h2></li>
        <li className={`${josefinSans.className} shadow-lg w-[105px] h-[120px] flex flex-col gap-2 items-center justify-center`}><img src="/cashback 1.png" alt="" /><h2>24/7 Support</h2></li>
        <li className={`${josefinSans.className} shadow-lg w-[105px] h-[120px] flex flex-col gap-2 items-center justify-center`}><img src="/group.png" alt="" /><h2>24/7 Support</h2></li>
        <li className={`${josefinSans.className} shadow-lg w-[105px] h-[120px] flex flex-col gap-2 items-center justify-center`}><img src="/premium-quality 1.png" alt="" /><h2>24/7 Support</h2></li>
      </ul>
    </div>
   )    
}
