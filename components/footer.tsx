import { Josefin_Sans } from 'next/font/google'
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'],
})

export default function Footer(){
   return (
    <div>
      <div className='mt-[45px] w-[100%] flex  flex-col h-auto bg-[#EEEFFB] p-[10px]'>
      <div>
        <li className={`${josefinSans.className} text-[24px] font-bold mb-[10px]`}>Hekto</li>
            <li className="flex border-none bg-white w-fit border-[1px] h-[35px] rounded-sm p-[5px] items-center">
                <input type="text" className="h-[30px] text-[12px] p-[10px] rounded-sm outline-none border-none" placeholder='Enter Email Address'/>
                <button className="bg-[#FB2E86] h-[30px] m-0 px-[5px] w-[65px] text-[10px] rounded-sm text-white">Sign Up</button>
            </li>
        <li className='text-[#8A8FB9] text-[10px] leading-[18px] mt-[10px]'><p>Contact Info <br />17 Princess Road, London, Greater London NW1 8JR, UK</p></li> 

        </div>

        <ul id='footer-links' className='flex flex-wrap gap-x-[50px] gap-y-[30px] mt-[20px]'>
        <div>
        <h2 className={`${josefinSans.className} font-bold text-[11px]`}>Categories</h2>
        <li>Laptops & Computers</li>
        <li>Cameras & Photography</li>
        <li>Smart Phones & Tablets</li>
        <li>Video Games & Consoles</li>
        <li>Waterproof Headphones</li>
      </div>
      <div>
        <h2 className={`${josefinSans.className} font-bold text-[11px]`} >Customer Care</h2>
        <li>My Account</li>
        <li>Discount</li>
        <li>Returns</li>
        <li>Orders History</li>
        <li>Order Tracking</li>
      </div>
      <div>
        <h2 className={`${josefinSans.className} font-bold text-[11px]`}>Pages</h2>
        <li>Blog</li>
        <li>Browse the Shop</li>
        <li>Category</li>
        <li>Pre-Built Pages</li>
        <li>Visual Composer Elements</li>
        <li>WooCommerce Pages</li>
      </div>
        </ul>
    </div>

    <ul className='bg-[#E7E4F8] text-[#9DA0AE] text-[10px] p-[8px] items-center flex justify-between'>
      <li>©Webecy - All Rights Reserved</li>
      <ul className='flex gap-x-[5px]'>
      <li className='relative flex items-center justify-center'>        
          <img src="/final-logos/ellipse.png" alt="" />
          <img src="/final-logos/bx_bxl-facebook.png" alt="" className='absolute'/>
        </li>
        <li className='relative flex items-center justify-center'>        
          <img src="/final-logos/ellipse.png" alt="" />
          <img src="/final-logos/bx_bxl-instagram-alt.png" alt="" className='absolute'/>
        </li>
        <li className='relative flex items-center justify-center'>        
          <img src="/final-logos/ellipse.png" alt="" />
          <img src="/final-logos/twitter.png" alt="" className='absolute'/>
        </li>
      </ul>
    </ul>
    </div>
    
   )    
}
