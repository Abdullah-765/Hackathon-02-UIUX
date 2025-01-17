import { Josefin_Sans } from 'next/font/google'
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'],
})

export default function LatestProducts(){
   return (
    <div id="latest-products" className='mx-[20px] flex items-center flex-col'>
    <h2 className={`${josefinSans.className} mt-6 mb-1 text-center text-[26px] text-[#1A0B5B] font-bold`}>Latest Products</h2>
      <ul className="text-center text-[#1A0B5B] gap-[20px] flex justify-between text-[12px] mb-3">
        <li className="text-[#FB2E86] underline">New Arrival</li>
        <li>Best Seller</li>
        <li>Featured</li>
        <li>Special Offer</li>
      </ul>
      {/* <ul className="grid grid-cols-2 gap-[20px] lg:grid-cols-3 lg:mx-[200px]" id="latest-products"> */}
            <ul className="flex flex-wrap gap-[20px] justify-center lg:mx-[200px]" id="latest-products">


        <div className="flex items-center justify-center lg:w-[280px] flex-col shadow-sm">
          <img src="/items/latest-products/image 23.png" alt="" className=" w-[150px] bg-[#F6F7FB] mb-[10px]"/>
          <ul className="flex justify-evenly items-center bg-white w-[100%] gap-[4px] ">
            <h3 className="text-[#151875] font-[600] text-[10px]" >Comfort Handy Craft</h3>
            <p className={`${josefinSans.className} text-[#151875] font-[600] text-[10px]`} >$42.00</p>
            <p className={`${josefinSans.className} text-[#FB2E86] font-[600] text-[10px] line-through`} >$65.00</p>
          </ul>
        </div>
        <div className="flex items-center justify-center lg:w-[280px] flex-col shadow-sm">
          <img src="/items/latest-products/image 3.png" alt="" className="w-[150px] bg-[#F6F7FB] h-[100%] mb-[10px]"/>
          <ul className="flex justify-evenly items-center bg-white w-[100%] gap-[4px] ">
            <h3 className="text-[#151875] font-[600] text-[10px]" >Comfort Handy Craft</h3>
            <p className={`${josefinSans.className} text-[#151875] font-[600] text-[10px]`} >$42.00</p>
            <p className={`${josefinSans.className} text-[#FB2E86] font-[600] text-[10px] line-through`} >$65.00</p>
          </ul>
        </div>

        <div className="flex items-center justify-center lg:w-[280px] flex-col shadow-sm">
          <img src="/items/latest-products/image 32.png" alt="" className="w-[150px] h-[100%] bg-[#F6F7FB] mb-[10px]"/>
          <ul className="flex justify-evenly items-center bg-white w-[100%] gap-[4px] ">
            <h3 className="text-[#151875] font-[600] text-[10px]" >Comfort Handy Craft</h3>
            <p className={`${josefinSans.className} text-[#151875] font-[600] text-[10px]`} >$42.00</p>
            <p className={`${josefinSans.className} text-[#FB2E86] font-[600] text-[10px] line-through`} >$65.00</p>
          </ul>
        </div>
        <div className="flex items-center justify-center lg:w-[280px] flex-col shadow-sm">
          <img src="/items/latest-products/image 1166.png" alt="" className="w-[150px] h-[100%]  bg-[#F6F7FB] mb-[10px]"/>
          <ul className="flex justify-evenly items-center bg-white w-[100%] gap-[4px] ">
            <h3 className="text-[#151875] font-[600] text-[10px]" >Comfort Handy Craft</h3>
            <p className={`${josefinSans.className} text-[#151875] font-[600] text-[10px]`} >$42.00</p>
            <p className={`${josefinSans.className} text-[#FB2E86] font-[600] text-[10px] line-through`} >$65.00</p>
          </ul>
        </div>
        <div className="flex items-center justify-center lg:w-[280px] flex-col shadow-sm">
          <img src="/items/latest-products/image 1168.png" alt="" className="w-[150px] h-[100%]  bg-[#F6F7FB] mb-[10px]"/>
          <ul className="flex justify-evenly items-center bg-white w-[100%] gap-[4px] ">
            <h3 className="text-[#151875] font-[600] text-[10px]" >Comfort Handy Craft</h3>
            <p className={`${josefinSans.className} text-[#151875] font-[600] text-[10px]`} >$42.00</p>
            <p className={`${josefinSans.className} text-[#FB2E86] font-[600] text-[10px] line-through`} >$65.00</p>
          </ul>
        </div>
        <div className="flex items-center justify-center lg:w-[280px] flex-col relative shadow-sm" id="sale-product">
          <img src="/items/latest-products/on sale.png" alt=""  className="w-[150px] h-[100%]  bg-[#F6F7FB] mb-[10px]"/>
          <img src="/items/latest-products/sale sign.png" alt=""  className="absolute w-[60px] top-0 left-0"/>
          <ul className="flex justify-evenly items-center bg-white w-[100%] gap-[4px] ">
            <h3 className="text-[#151875] font-[600] text-[10px]" >Comfort Handy Craft</h3>
            <p className={`${josefinSans.className} text-[#151875] font-[600] text-[10px]`} >$42.00</p>
            <p className={`${josefinSans.className} text-[#FB2E86] font-[600] text-[10px] line-through`} >$65.00</p>
          </ul>
        </div>
      </ul>

    </div>
   )    
}
