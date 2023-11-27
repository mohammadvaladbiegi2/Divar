import React from "react";
import logo from "../../../public/images/logo.svg"
import item1 from "../../../public/images/item1.webp"
import "./Navbar.css";

export default function Navbar() {
   return <div>
      <header className="fixed w-full bg-white shadow-headerShadow">
         <div className="mx-auto flex items-center max-w-[1440px] px-4 h-16" dir="rtl">
            <div className="flex justify-between items-center w-full h-12 relative">
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
                  <select className="outline-none flex-none flex gap-2 h-10 rounded px-4 ms-4 hover:bg-[#0000000A] transition-all duration-300 items-center IRANSansWeb_Medium text-sm text-[rgba(0,0,0,.56)] hover:text-black cursor-pointer">
                     <option value="دسته‌ها">دسته‌ها</option>
                     <option value="دسته‌ها">1</option>
                     <option value="دسته‌ها">2</option>
                     <option value="دسته‌ها">3</option>
                     {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[14px] h-[14px]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                     </svg> */}
                  </select>
                  <div className="flex gap-2 min-[1160px]:w-[480px] max-[1160px]:w-full h-10 ms-3 bg-[#F5F5F5] rounded px-4 transition-all duration-300 items-center IRANSansWeb text-sm text-[rgba(0,0,0,.87)] hover:text-black">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-[#ADADAD] hover:text-black transition-all duration-300">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                     </svg>
                     <input className="bg-[#F5F5F5] w-full placeholder:text-sm placeholder:text-[#ADADAD] outline-none" placeholder="جستجو در همهٔ آگهی‌ها" type="text" />
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
            <div className="fixed top-16 w-[280px] h-screen overflow-y-auto hiddenScrollbar pt-8 px-4 bg-blue-300">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis neque repudiandae, deserunt nostrum dolores officiis culpa at vitae perspiciatis fugit? Cupiditate, nesciunt placeat. Obcaecati atque doloremque reprehenderit similique fuga molestias.
               Recusandae voluptate sequi dolore repudiandae necessitatibus error. Molestias magni repellat nemo, cum necessitatibus distinctio harum illum id aperiam repudiandae consectetur at sunt quo, aliquam recusandae tempora, voluptatem dolorem atque libero!
               Accusantium iure eum labore itaque eligendi, illo incidunt placeat. Illo, pariatur ullam, aut nesciunt exercitationem error soluta tenetur amet quam ratione quos odit explicabo, repudiandae impedit eligendi quas vel ut!
               Non, nihil. Nobis hic natus repellat tenetur, repudiandae mollitia dolorem quidem consequatur facilis quo doloremque ullam odio perspiciatis itaque dolorum ipsa asperiores et dicta accusantium sed fuga blanditiis. Fuga, molestias?
               Ad perferendis vel doloremque ullam quos earum consectetur fugit, nemo voluptas consequuntur nam temporibus necessitatibus enim eius, voluptate similique! Quibusdam adipisci quasi voluptatum. Est, vitae quasi alias corrupti facere aliquam?
               Voluptate iste asperiores cumque harum modi veniam magni repellat optio itaque corrupti, incidunt pariatur explicabo exercitationem maxime ex quidem nobis illo, officia vero impedit alias aliquid rem inventore vel? Qui.
               Commodi debitis nemo dolore nobis molestias magni assumenda sequi, esse minima qui saepe doloribus quaerat odit nulla, obcaecati architecto repellat iste repudiandae consectetur, mollitia voluptatem harum aspernatur et a. Perspiciatis?
               Facilis suscipit maxime porro, tenetur nisi ipsum molestiae omnis dicta vero temporibus nemo ut soluta eius error quasi quidem dolorem! Recusandae aliquid quos culpa pariatur mollitia ea ut, ducimus delectus!
               Possimus eligendi animi cum natus, numquam dolorem fugiat cumque suscipit facilis distinctio. Odit est nisi beatae modi eius, quae id rem, ad recusandae vero tempora consectetur assumenda impedit nam eos?
               Tempore molestias qui sed. Quisquam, exercitationem nihil. Molestias in ipsa obcaecati ipsum recusandae, repellendus exercitationem cumque aut ex voluptate assumenda quos, delectus, sit aliquam natus vero incidunt quo aperiam perspiciatis.
               Similique incidunt voluptatem illum laborum officia aliquam quasi ullam dolorem excepturi veritatis modi dolore quibusdam, doloribus, enim, consectetur iure fuga rem deleniti at. Quaerat quos magni architecto rem doloribus perspiciatis!
               Neque illo voluptas minima doloremque excepturi dicta exercitationem quibusdam, est voluptates expedita illum officia itaque quaerat laudantium perferendis provident maxime aliquid culpa quia assumenda cupiditate odio? Nesciunt vel deserunt obcaecati!
               Laudantium hic veritatis dignissimos et neque suscipit, quas omnis officiis cupiditate aliquam magni excepturi in. Voluptas, suscipit inventore quos ea quibusdam velit veritatis quo aut reiciendis tempore ex explicabo beatae.
               Ab labore possimus accusantium obcaecati tempore, eveniet rem aperiam, aliquam quis molestiae recusandae cumque beatae minima qui voluptas? Repellendus beatae error quaerat commodi delectus maxime amet dicta corporis, temporibus culpa!
               Eligendi architecto quis provident autem nostrum rerum sunt impedit. Nobis quidem error maxime animi repellendus quo reiciendis ea, nesciunt magnam officiis sit voluptatem temporibus recusandae aperiam architecto fugit cupiditate impedit!
               Dolore velit impedit quasi non accusantium sapiente earum deserunt sed maiores praesentium voluptates sint perspiciatis enim, nam, minus totam laudantium! Fugiat maiores possimus molestias eum, at saepe omnis aliquam labore?
               Beatae excepturi consequatur debitis quas officiis? Et dolore, quam pariatur architecto, impedit voluptates mollitia praesentium, magnam sed atque deleniti vel exercitationem ullam iusto molestias. Architecto iure dolores reiciendis aliquid eveniet?
               Quos quisquam, odio, saepe aliquam et qui sapiente accusantium quo commodi corrupti consectetur laudantium laborum officia temporibus iste sit doloremque voluptatem. Accusamus rerum praesentium vel quasi ipsa, quos dolor corrupti?
               Dolorum incidunt consectetur aliquam veritatis nihil laborum eaque quis. Totam modi veniam quaerat animi harum quisquam, quidem beatae voluptas quod quam perspiciatis recusandae possimus placeat reiciendis voluptates. Quae, accusantium totam.
               Magni, itaque eligendi incidunt dolores earum, fugiat consequatur, modi eum vero possimus placeat nostrum! Doloribus soluta quae ipsam sed quia aliquam ad, consectetur qui mollitia nam culpa sequi perferendis accusantium.
               Commodi nisi nesciunt, blanditiis deserunt tenetur exercitationem atque repellat ipsum! Inventore deleniti ducimus amet quis provident enim possimus perspiciatis libero deserunt eaque, voluptas optio, rem vel beatae maxime magni aut.
               Blanditiis cumque eum possimus, quisquam ducimus repellat recusandae. Voluptate in ipsa dolorum sequi fugiat ratione architecto eos consequatur repellendus adipisci soluta consectetur cupiditate laudantium neque, veritatis quidem. Molestiae, pariatur fugit!
               Voluptatibus quis repellendus eligendi consequuntur debitis enim sit aliquid, doloribus, reiciendis nulla sapiente. Aliquid explicabo molestias reprehenderit, vitae sit maiores sunt ab facere. Aliquam iure eaque est ipsam totam veritatis!
               Porro dignissimos numquam quaerat provident eaque dolorum? Repellendus vitae, natus pariatur ipsum ab quam delectus doloremque quia minima, repellat, assumenda aut! Enim expedita vel nobis eos magni repudiandae sint laudantium!
               Iusto ex eum illum quos delectus inventore, cum corporis dignissimos dolorem consequatur, dolor, qui totam? Dolore quae quia dolorem in explicabo voluptas nobis odit, illum officiis itaque aliquid dolor totam!
               Enim veritatis laboriosam dolore reprehenderit quae debitis ipsa pariatur, ipsam exercitationem facere omnis cum, illum eligendi laudantium animi eius ducimus sint tempora? Beatae corrupti dolore, ea enim necessitatibus quos suscipit.
               Possimus distinctio voluptas accusamus. Corporis consequuntur error autem, sunt minima cum et recusandae ullam nisi laborum dolor reiciendis facilis consectetur aperiam quia ipsam! Omnis tempore iste quo animi praesentium vitae!
               Molestias vel id nulla pariatur omnis optio nemo inventore deleniti, exercitationem eum suscipit animi est mollitia, commodi eius? Maxime deserunt saepe cupiditate magni corrupti sit, tenetur quibusdam ut. Debitis, ullam?
               Debitis tempora modi vel accusantium fugit quos mollitia, dolore fuga deleniti doloremque voluptatibus? Dolorem expedita fuga voluptatibus adipisci incidunt rem ipsa facilis dolorum modi enim id, omnis similique nisi et.
               Temporibus, ex. Id dolorem architecto, maiores dolorum corrupti tempora quos, quo possimus eveniet odit, eum facilis! Iste ab, excepturi quae rem, expedita maiores, dolorum et provident voluptates at tenetur. Error.
            </div>
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
