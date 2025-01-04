import { Josefin_Sans } from "next/font/google";
const josefinSans = Josefin_Sans({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "600", "700"],
});

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (

  )
}


export default function NewSidebar () {
    return (
        <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
        <div id="sidebar" className="mx-[20px] mt-[30px] flex flex-col gap-[20px]">
            {/* product brand */}
            <ul className="flex flex-col gap-[8px] ">
                <h3 className={`${josefinSans.className} text-[#151875] underline underline-offset-4`}>Product Brand</h3>
                <li>
                    <div className="relative">
                        <input type="checkbox" id="checkbox1" className="peer hidden" />
                        <label
                            htmlFor="checkbox1"
                            className="flex items-center justify-center w-4 h-4 bg-purple-100 text-purple-500 font-bold peer-checked:text-purple-100 cursor-pointer"
                        >
                            {/* The checkmark */}
                            &#10003;
                        </label>
                    </div>
                    <p>Coaster Furniture</p>
                </li>
                <li>
                    <div className="relative">
                        <input type="checkbox" id="checkbox2" className="peer hidden" />
                        <label
                            htmlFor="checkbox2"
                            className="flex items-center justify-center w-4 h-4 bg-purple-100 text-purple-500 font-bold peer-checked:text-purple-100 cursor-pointer"
                        >
                            {/* The checkmark */}
                            &#10003;
                        </label>
                    </div>
                    <p>Fusion Dot High Fashion</p>
                </li>
                <li>
                    <div className="relative">
                        <input type="checkbox" id="checkbox3" className="peer hidden" />
                        <label
                            htmlFor="checkbox3"
                            className="flex items-center justify-center w-4 h-4 bg-purple-500 text-purple-100 font-bold peer-checked:text-purple-500 bg-purple-100cursor-pointer"
                        >
                            {/* The checkmark */}
                            &#10003;
                        </label>
                    </div>
                    <p>Unique Furniture Restor</p>
                </li>
                <li>
                    <div className="relative">
                        <input type="checkbox" id="checkbox4" className="peer hidden" />
                        <label
                            htmlFor="checkbox4"
                            className="flex items-center justify-center w-4 h-4 bg-purple-100 text-purple-500 font-bold peer-checked:text-purple-100 cursor-pointer"
                        >
                            {/* The checkmark */}
                            &#10003;
                        </label>
                    </div>
                    <p>Dream Furniture Flipping</p>
                </li>
                <li>
                    <div className="relative">
                        <input type="checkbox" id="checkbox5" className="peer hidden" />
                        <label
                            htmlFor="checkbox5"
                            className="flex items-center justify-center w-4 h-4 bg-purple-100 text-purple-500 font-bold peer-checked:text-purple-100 cursor-pointer"
                        >
                            {/* The checkmark */}
                            &#10003;
                        </label>
                    </div>
                    <p>Young Repurposed</p>
                </li>
                <li>
                    <div className="relative">
                        <input type="checkbox" id="checkbox6" className="peer hidden" />
                        <label
                            htmlFor="checkbox6"
                            className="flex items-center justify-center w-4 h-4 bg-purple-100 text-purple-500 font-bold peer-checked:text-purple-100 cursor-pointer"
                        >
                            {/* The checkmark */}
                            &#10003;
                        </label>
                    </div>
                    <p>Green DIY Furniture</p>
                </li>
            </ul>

            {/* Discount offer */}
            <ul className="flex flex-col gap-[8px]">
                <h3 className={`${josefinSans.className} text-[#151875] underline underline-offset-4`}>Discount Offer</h3>
                <li>
                    <div className="relative">
                        <input
                            type="checkbox"
                            id="Discountcheckbox1"
                            className="peer hidden"
                        />
                        <label
                            htmlFor="Discountcheckbox1"
                            className="flex items-center justify-center w-4 h-4 bg-[#FFDBF1] text-[#FF3EB2] font-bold peer-checked:text-[#FFDBF1] cursor-pointer"
                        >
                            {/* The checkmark */}
                            &#10003;
                        </label>
                    </div>
                    <p>20% Cashback</p>
                </li>
                <li>
                    <div className="relative">
                        <input
                            type="checkbox"
                            id="Discountcheckbox2"
                            className="peer hidden"
                        />
                        <label
                            htmlFor="Discountcheckbox2"
                            className="flex items-center justify-center w-4 h-4 bg-[#FFDBF1] text-[#FF3EB2] font-bold peer-checked:text-[#FFDBF1] cursor-pointer"
                        >
                            {/* The checkmark */}
                            &#10003;
                        </label>
                    </div>
                    <p>5% Cashback Offer</p>
                </li>
                <li>
                    <div className="relative">
                        <input
                            type="checkbox"
                            id="Discountcheckbox3"
                            className="peer hidden"
                        />
                        <label
                            htmlFor="Discountcheckbox3"
                            className="flex items-center justify-center w-4 h-4 bg-[#FFDBF1] text-[#FF3EB2] font-bold peer-checked:text-[#FFDBF1] cursor-pointer"
                        >
                            {/* The checkmark */}
                            &#10003;
                        </label>
                    </div>
                    <p>25% Discount Offer</p>
                </li>
            </ul>

            {/* Rating Item */}
            <ul className="flex flex-col gap-[8px]">
                <h3 className={`${josefinSans.className} text-[#151875] underline underline-offset-4`}>Rating Item</h3>
                <li>
                    <div className="relative">
                        <input
                            type="checkbox"
                            id="Ratingcheckbox1"
                            className="peer hidden"
                        />
                        <label
                            htmlFor="Ratingcheckbox1"
                            className="flex items-center justify-center w-4 h-4 bg-[#FFF6DA] text-[#FFCC2E] font-bold peer-checked:text-[#FFF6DA] cursor-pointer"
                        >
                            {/* The checkmark */}
                            &#10003;
                        </label>
                    </div>
                    <ul id="colors" className="flex items-center">
                        <li>
                            <img src="/star-filled.png" alt="" />
                        </li>
                        <li>
                            <img src="/star-filled.png" alt="" />
                        </li>
                        <li>
                            <img src="/star-filled.png" alt="" />
                        </li>
                        <li>
                            <img src="/star-filled.png" alt="" />
                        </li>
                        <li>
                            <img src="/star-empty.png" alt="" />
                        </li>
                        <p className={`${josefinSans.className} text-black ml-[5px]`}>(2341)</p>
                    </ul>
                </li>
                <li>
                    <div className="relative">
                        <input
                            type="checkbox"
                            id="Ratingcheckbox2"
                            className="peer hidden"
                        />
                        <label
                            htmlFor="Ratingcheckbox2"
                            className="flex items-center justify-center w-4 h-4 bg-[#FFCC2E] text-[#FFF6DA] font-bold peer-checked:text-[#FFCC2E] cursor-pointer"
                        >
                            {/* The checkmark */}
                            &#10003;
                        </label>
                    </div>
                    <ul id="colors" className="flex items-center">
                        <li>
                            <img src="/star-filled.png" alt="" />
                        </li>
                        <li>
                            <img src="/star-filled.png" alt="" />
                        </li>
                        <li>
                            <img src="/star-filled.png" alt="" />
                        </li>
                        <li>
                            <img src="/star-empty.png" alt="" />
                        </li>
                        <li>
                            <img src="/star-empty.png" alt="" />
                        </li>
                        <p className={`${josefinSans.className} text-black ml-[5px]`}>(1726)</p>
                    </ul>
                </li>
                <li>
                    <div className="relative">
                        <input
                            type="checkbox"
                            id="Ratingcheckbox3"
                            className="peer hidden"
                        />
                        <label
                            htmlFor="Ratingcheckbox3"
                            className="flex items-center justify-center w-4 h-4 bg-[#FFF6DA] text-[#FFCC2E] font-bold peer-checked:text-[#FFF6DA] cursor-pointer"
                        >
                            {/* The checkmark */}
                            &#10003;
                        </label>
                    </div>
                    <ul id="colors" className="flex items-center">
                        <li>
                            <img src="/star-filled.png" alt="" />
                        </li>
                        <li>
                            <img src="/star-filled.png" alt="" />
                        </li>
                        <li>
                            <img src="/star-empty.png" alt="" />
                        </li>
                        <li>
                            <img src="/star-empty.png" alt="" />
                        </li>
                        <li>
                            <img src="/star-empty.png" alt="" />
                        </li>
                        <p className={`${josefinSans.className} text-black ml-[5px]`}>(258)</p>
                    </ul>
                </li>
                <li>
                    <div className="relative">
                        <input
                            type="checkbox"
                            id="Ratingcheckbox4"
                            className="peer hidden"
                        />
                        <label
                            htmlFor="Ratingcheckbox4"
                            className="flex items-center justify-center w-4 h-4 bg-[#FFF6DA] text-[#FFCC2E] font-bold peer-checked:text-[#FFF6DA] cursor-pointer"
                        >
                            {/* The checkmark */}
                            &#10003;
                        </label>
                    </div>
                    <ul id="colors" className="flex items-center">
                        <li>
                            <img src="/star-filled.png" alt="" />
                        </li>
                        <li>
                            <img src="/star-filled.png" alt="" />
                        </li>
                        <li>
                            <img src="/star-empty.png" alt="" />
                        </li>
                        <li>
                            <img src="/star-empty.png" alt="" />
                        </li>
                        <li>
                            <img src="/star-empty.png" alt="" />
                        </li>
                        <p className={`${josefinSans.className} text-black ml-[5px]`}>(25)</p>
                    </ul>
                </li>
            </ul>

            {/* catergories */}
            <ul className="flex flex-col gap-[8px]">
                <h3 className={`${josefinSans.className} text-[#151875] underline underline-offset-4`}>Categories</h3>
                <li>
                    <div className="relative">
                        <input
                            type="checkbox"
                            id="Categoriescheckbox1"
                            className="peer hidden"
                        />
                        <label
                            htmlFor="Categoriescheckbox1"
                            className="flex items-center justify-center w-4 h-4 bg-[#FFDBF1] text-[#FF3EB2] font-bold peer-checked:text-[#FFDBF1] cursor-pointer"
                        >
                            {/* The checkmark */}
                            &#10003;
                        </label>
                    </div>
                    <p>Prestashop</p>
                </li>
                <li>
                    <div className="relative">
                        <input
                            type="checkbox"
                            id="Categoriescheckbox2"
                            className="peer hidden"
                        />
                        <label
                            htmlFor="Categoriescheckbox2"
                            className="flex items-center justify-center w-4 h-4 bg-[#FFDBF1] text-[#FF3EB2] font-bold peer-checked:text-[#FFDBF1] cursor-pointer"
                        >
                            {/* The checkmark */}
                            &#10003;
                        </label>
                    </div>
                    <p>Magento</p>
                </li>
                <li>
                    <div className="relative">
                        <input
                            type="checkbox"
                            id="Categoriescheckbox3"
                            className="peer hidden"
                        />
                        <label
                            htmlFor="Categoriescheckbox3"
                            className="flex items-center justify-center w-4 h-4 bg-[#FF3EB2] text-[#FFDBF1] font-bold peer-checked:text-[#FF3EB2] cursor-pointer"
                        >
                            {/* The checkmark */}
                            &#10003;
                        </label>
                    </div>
                    <p>Bigcommerce</p>
                </li>
                <li>
                    <div className="relative">
                        <input
                            type="checkbox"
                            id="Categoriescheckbox4"
                            className="peer hidden"
                        />
                        <label
                            htmlFor="Categoriescheckbox4"
                            className="flex items-center justify-center w-4 h-4 bg-[#FFDBF1] text-[#FF3EB2] font-bold peer-checked:text-[#FFDBF1] cursor-pointer"
                        >
                            {/* The checkmark */}
                            &#10003;
                        </label>
                    </div>
                    <p>osCommerce</p>
                </li>
                <li>
                    <div className="relative">
                        <input
                            type="checkbox"
                            id="Categoriescheckbox5"
                            className="peer hidden"
                        />
                        <label
                            htmlFor="Categoriescheckbox5"
                            className="flex items-center justify-center w-4 h-4 bg-[#FFDBF1] text-[#FF3EB2] font-bold peer-checked:text-[#FFDBF1] cursor-pointer"
                        >
                            {/* The checkmark */}
                            &#10003;
                        </label>
                    </div>
                    <p>3dcart</p>
                </li>
                <li>
                    <div className="relative">
                        <input
                            type="checkbox"
                            id="Categoriescheckbox6"
                            className="peer hidden"
                        />
                        <label
                            htmlFor="Categoriescheckbox6"
                            className="flex items-center justify-center w-4 h-4 bg-[#FFDBF1] text-[#FF3EB2] font-bold peer-checked:text-[#FFDBF1] cursor-pointer"
                        >
                            {/* The checkmark */}
                            &#10003;
                        </label>
                    </div>
                    <p>Bags</p>
                </li>
                <li>
                    <div className="relative">
                        <input
                            type="checkbox"
                            id="Categoriescheckbox7"
                            className="peer hidden"
                        />
                        <label
                            htmlFor="Categoriescheckbox7"
                            className="flex items-center justify-center w-4 h-4 bg-[#FFDBF1] text-[#FF3EB2] font-bold peer-checked:text-[#FFDBF1] cursor-pointer"
                        >
                            {/* The checkmark */}
                            &#10003;
                        </label>
                    </div>
                    <p>Accessories</p>
                </li>
                <li>
                    <div className="relative">
                        <input
                            type="checkbox"
                            id="Categoriescheckbox8"
                            className="peer hidden"
                        />
                        <label
                            htmlFor="Categoriescheckbox8"
                            className="flex items-center justify-center w-4 h-4 bg-[#FFDBF1] text-[#FF3EB2] font-bold peer-checked:text-[#FFDBF1] cursor-pointer"
                        >
                            {/* The checkmark */}
                            &#10003;
                        </label>
                    </div>
                    <p>Jewellery</p>
                </li>
                <li>
                    <div className="relative">
                        <input
                            type="checkbox"
                            id="Categoriescheckbox9"
                            className="peer hidden"
                        />
                        <label
                            htmlFor="Categoriescheckbox9"
                            className="flex items-center justify-center w-4 h-4 bg-[#FFDBF1] text-[#FF3EB2] font-bold peer-checked:text-[#FFDBF1] cursor-pointer"
                        >
                            {/* The checkmark */}
                            &#10003;
                        </label>
                    </div>
                    <p>Watches</p>
                </li>
            </ul>

            {/* price filter */}
            <ul className="flex flex-col gap-[8px]">
                <h3 className={`${josefinSans.className} text-[#151875] underline underline-offset-4`}>Price filter</h3>
                <li>
                    <div className="relative">
                        <input
                            type="checkbox"
                            id="Pricecheckbox1"
                            className="peer hidden"
                        />
                        <label
                            htmlFor="Pricecheckbox1"
                            className="flex items-center justify-center w-4 h-4 bg-[#FFDBF1] text-[#FF3EB2] font-bold peer-checked:text-[#FFDBF1] cursor-pointer"
                        >
                            {/* The checkmark */}
                            &#10003;
                        </label>
                    </div>
                    <p>$0.00 - $150.00</p>
                </li>
                <li>
                    <div className="relative">
                        <input
                            type="checkbox"
                            id="Pricecheckbox2"
                            className="peer hidden"
                        />
                        <label
                            htmlFor="Pricecheckbox2"
                            className="flex items-center justify-center w-4 h-4 bg-[#FFDBF1] text-[#FF3EB2] font-bold peer-checked:text-[#FFDBF1] cursor-pointer"
                        >
                            {/* The checkmark */}
                            &#10003;
                        </label>
                    </div>
                    <p>$150.00 - $350.00</p>
                </li>
                <li>
                    <div className="relative">
                        <input
                            type="checkbox"
                            id="Pricecheckbox3"
                            className="peer hidden"
                        />
                        <label
                            htmlFor="Pricecheckbox3"
                            className="flex items-center justify-center w-4 h-4 bg-[#FF3EB2] text-[#FFDBF1] font-bold peer-checked:text-[#FF3EB2] cursor-pointer"
                        >
                            {/* The checkmark */}
                            &#10003;
                        </label>
                    </div>
                    <p>$150.00 - $504.00</p>
                </li>
                <li>
                    <div className="relative">
                        <input
                            type="checkbox"
                            id="Pricecheckbox4"
                            className="peer hidden"
                        />
                        <label
                            htmlFor="Pricecheckbox4"
                            className="flex items-center justify-center w-4 h-4 bg-[#FFDBF1] text-[#FF3EB2] font-bold peer-checked:text-[#FFDBF1] cursor-pointer"
                        >
                            {/* The checkmark */}
                            &#10003;
                        </label>
                    </div>
                    <p>$450.00 +</p>
                </li>

                {/* Search Box */}

                <li className="flex items-center gap-[5px] p-[5px] mt-[20px] border w-fit ">
                    <input type="search" placeholder="$10.00 - 20000$" className="outline-none py-[3px] px-[5px]" id="" />
                    <img src="/search-grey-sidebar.png" alt="" />
                </li>
            </ul>


            {/* filter by color */}
            <div className="flex flex-col gap-[8px]">
                <h3 className={`${josefinSans.className} text-[#151875] underline underline-offset-4`}>Filter By Color</h3>
                <ul className="grid grid-cols-3 gap-[5px]">
                    <li><div className="w-[8px] h-[8px] rounded-full bg-[#5E37FF]"></div>Blue</li>
                    <li><div className="w-[8px] h-[8px] rounded-full bg-[#FF9437]"></div>Orange</li>
                    <li><div className="w-[8px] h-[8px] rounded-full bg-[#FFBF95]"></div>Brown</li>
                    <li><div className="w-[8px] h-[8px] rounded-full bg-[#33D221]"></div>Green</li>
                    <li><div className="w-[8px] h-[8px] rounded-full bg-[#E248FF]"></div>Purple</li>
                    <li><div className="w-[8px] h-[8px] rounded-full bg-[#26CBFF]"></div>Sky</li>

                </ul>
            </div>
        </div>
        </main>
        </SidebarProvider>
    );
}
