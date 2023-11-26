import React from "react";
import logo from "../../../public/images/logo.svg"
import item1 from "../../../public/images/item1.webp"
import "./Navbar.css";

export default function Navbar() {
   return <div>
      <header className="fixed w-full bg-white shadow-headerShadow">
         <div className="mx-auto flex items-center max-w-[1440px] px-4 h-16" dir="rtl">
            <div className="flex justify-between items-center w-full h-12">
               <div className="w-full flex items-center">
                  <figure className="flex-none w-12 h-12 cursor-pointer me-2">
                     <img className="w-full" src={logo} alt="" />
                  </figure>
                  <div className="w-[1.5px] h-6 mx-2 bg-[rgba(0,0,0,.12)]"></div>
                  <div className="flex-none flex gap-2 h-10 rounded px-4 hover:bg-[#0000000A] transition-all duration-300 items-center IRANSansWeb_Medium text-sm text-[rgba(0,0,0,.56)] hover:text-black cursor-pointer">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                     </svg>
                     <span>تهران</span>
                  </div>
                  <div className="flex-none flex gap-2 h-10 rounded px-4 ms-4 hover:bg-[#0000000A] transition-all duration-300 items-center IRANSansWeb_Medium text-sm text-[rgba(0,0,0,.56)] hover:text-black cursor-pointer">
                     <span>دسته‌ها</span>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[14px] h-[14px]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                     </svg>
                  </div>
                  <div className="flex gap-2 min-[1160px]:w-[480px] max-[1160px]:w-full h-10 ms-3 bg-[#F5F5F5] rounded px-4 transition-all duration-300 items-center IRANSansWeb text-sm text-[rgba(0,0,0,.87)] hover:text-black">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-[#ADADAD] hover:text-black transition-all duration-300">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                     </svg>
                     <input className="bg-[#F5F5F5] placeholder:text-sm placeholder:text-[#ADADAD] outline-none" placeholder="جستجو در همهٔ آگهی‌ها" type="text" />
                  </div>
               </div>
               <div className="flex-none flex items-center">
                  <div className="flex-none flex gap-2 h-10 rounded px-4 hover:bg-[#0000000A] transition-all duration-300 items-center IRANSansWeb_Medium text-xs text-[rgba(0,0,0,.56)] hover:text-black cursor-pointer">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                     </svg>
                     <span>دیوار من</span>
                  </div>
                  <div className="flex-none flex gap-2 h-10 rounded px-4 ms-2 hover:bg-[#0000000A] transition-all duration-300 items-center IRANSansWeb_Medium text-xs text-[rgba(0,0,0,.56)] hover:text-black cursor-pointer">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                     </svg>
                     <span>چت</span>
                  </div>
                  <div className="flex-none flex h-10 rounded px-4 ms-2 hover:bg-[#0000000A] transition-all duration-300 items-center IRANSansWeb_Medium text-xs text-[rgba(0,0,0,.56)] hover:text-black cursor-pointer">
                     پشتیبانی
                  </div>
                  <div className="flex-none flex h-10 rounded px-4 ms-4 hover:bg-[#be3737] transition-all duration-300 items-center bg-[#a62626] text-white IRANSansWeb_Medium text-sm cursor-pointer">ثبت آگهی</div>
               </div>
            </div>
         </div>
      </header>
      <section className="pt-16 flex justify-center mx-auto" dir="rtl">
         <div className="flex max-w-[1440px]"> {/* max-w */}
            <div className="fixed top-16 w-[280px] h-screen overflow-y-auto hiddenScrollbar pt-8 px-4 bg-red-600"></div>
            <div className="flex flex-col items-end ps-[300px] pe-4 w-full h-screen mt-8">
               <div className="text-xs IRANSansWeb text-[rgba(0,0,0,.56)] leading-[1.5rem] pb-2">
                  دیوار تهران - نیازمندی‌ های رایگان، آگهی‌های خرید، فروش نو و دست دوم و کارکرده، استخدام و خدمات
               </div>
               {/* items */}
               <div className="flex flex-wrap justify-end gap-4 pt-2">
                  {/* a item */}
                  <div className="h-[168px] cursor-pointer">
                     <div className="flex max-w-[364px] rounded h-full p-4" style={{ boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.08), inset 0 0 0 1px #fff' }}>
                        <div>
                           <div className="IRANSansWeb_Medium text-base leading-7 mb-2">چرخ گوشت نوتمیز یکبارامتحان شده قدرت</div>
                           <div className="IRANSansWeb flex flex-col text-[#0000008f]">
                              <span className="text-sm leading-6">در حد نو</span>
                              <span className="text-sm leading-6">۱,۵۰۰,۰۰۰ تومان</span>
                              <span className="text-xs leading-6">لحظاتی پیش در لویزان</span>
                           </div>
                        </div>
                        <div className="flex items-end pe-1 text-[rgba(0,0,0,.56)]">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                           </svg>
                        </div>
                        <div className="flex-none w-[136px]">
                           <img src={item1} alt="" />
                        </div>
                     </div>
                  </div>
                  {/* a item */}
                  <div className="h-[168px] cursor-pointer">
                     <div className="flex max-w-[364px] rounded h-full p-4" style={{ boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.08), inset 0 0 0 1px #fff' }}>
                        <div>
                           <div className="IRANSansWeb_Medium text-base leading-7 mb-2">چرخ گوشت نوتمیز یکبارامتحان شده قدرت</div>
                           <div className="IRANSansWeb flex flex-col text-[#0000008f]">
                              <span className="text-sm leading-6">در حد نو</span>
                              <span className="text-sm leading-6">۱,۵۰۰,۰۰۰ تومان</span>
                              <span className="text-xs leading-6">لحظاتی پیش در لویزان</span>
                           </div>
                        </div>
                        <div className="flex items-end pe-1 text-[rgba(0,0,0,.56)]">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                           </svg>
                        </div>
                        <div className="flex-none w-[136px]">
                           <img src={item1} alt="" />
                        </div>
                     </div>
                  </div>
                  {/* a item */}
                  <div className="h-[168px] cursor-pointer">
                     <div className="flex max-w-[364px] rounded h-full p-4" style={{ boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.08), inset 0 0 0 1px #fff' }}>
                        <div>
                           <div className="IRANSansWeb_Medium text-base leading-7 mb-2">چرخ گوشت نوتمیز یکبارامتحان شده قدرت</div>
                           <div className="IRANSansWeb flex flex-col text-[#0000008f]">
                              <span className="text-sm leading-6">در حد نو</span>
                              <span className="text-sm leading-6">۱,۵۰۰,۰۰۰ تومان</span>
                              <span className="text-xs leading-6">لحظاتی پیش در لویزان</span>
                           </div>
                        </div>
                        <div className="flex items-end pe-1 text-[rgba(0,0,0,.56)]">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                           </svg>
                        </div>
                        <div className="flex-none w-[136px]">
                           <img src={item1} alt="" />
                        </div>
                     </div>
                  </div>
                  {/* a item */}
                  <div className="h-[168px] cursor-pointer">
                     <div className="flex max-w-[364px] rounded h-full p-4" style={{ boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.08), inset 0 0 0 1px #fff' }}>
                        <div>
                           <div className="IRANSansWeb_Medium text-base leading-7 mb-2">چرخ گوشت نوتمیز یکبارامتحان شده قدرت</div>
                           <div className="IRANSansWeb flex flex-col text-[#0000008f]">
                              <span className="text-sm leading-6">در حد نو</span>
                              <span className="text-sm leading-6">۱,۵۰۰,۰۰۰ تومان</span>
                              <span className="text-xs leading-6">لحظاتی پیش در لویزان</span>
                           </div>
                        </div>
                        <div className="flex items-end pe-1 text-[rgba(0,0,0,.56)]">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                           </svg>
                        </div>
                        <div className="flex-none w-[136px]">
                           <img src={item1} alt="" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </div>;
}
