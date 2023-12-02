import React from "react";
import "./productpage.css";

export default function productpage() {
  return (
    <>
      <section className="flex justify-center gap-[84px] mt-[160px]" dir="rtl">
        <div className="w-[420px] h-screen px-2">
          <div className="IRANSansWeb_Medium text-2xl leading-[1.5]">
            کالسکه برند Reamoon
          </div>
          <div className="IRANSansWeb mt-2 mb-4 text-[#0000008F] leading-[2] h-8"></div>
          <hr />
          <div className="flex justify-between py-2 cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="text-[#0000008F]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
              </div>
              <div className="IRANSansWeb">زنگ خطرهای قبل از معامله</div>
            </div>
            <div className="flex justify-end items-center w-8 h-8 text-[#0000008F]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </div>
          </div>
          <hr className="h-1" />
          <div className="flex justify-between my-4">
            <div className="IRANSansWeb flex gap-2 text-base">
              <div className="text-white bg-[#A62626] hover:bg-opacity-90 transition-all duration-300 h-10 px-4 rounded flex items-center cursor-pointer">
                اطلاعات تماس
              </div>
              <div
                className="h-10 px-4 flex justify-center rounded text-[#0000008F] items-center w-[125px] cursor-pointer hover:bg-[rgba(0,0,0,.04)] hover:text-black transition-all duration-300"
                style={{ border: "1px solid rgba(0,0,0,.48)" }}
              >
                چت
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center justify-center text-[#0000008F] w-10 h-10 cursor-pointer hover:bg-zinc-100 hover:text-black transition-all duration-300 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-center text-[#0000008F] w-10 h-10 cursor-pointer hover:bg-zinc-100 hover:text-black transition-all duration-300 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between IRANSansWeb py-2 h-12">
              <div className="text-[#0000008F] leading-[2]"></div>
              <div className="leading-[2]"></div>
            </div>
            <hr />
            <div className="flex justify-between IRANSansWeb py-2 h-12">
              <div className="text-[#0000008F] leading-[2]"></div>
              <div className="leading-[2]"></div>
            </div>
            <hr />
            <div className="flex justify-between IRANSansWeb py-2 h-12">
              <div className="text-[#0000008F] leading-[2]">قیمت</div>
              <div className="leading-[2]">۱٬۸۰۰٬۰۰۰ تومان</div>
            </div>
            <hr />
          </div>
          <div className="text-lg IRANSansWeb mt-6 leading-[1.5]">توضیحات</div>
          <p className="leading-[2] IRANSansWeb whitespace-pre-line break-words mt-2">
            کالسکه برند Reamoon مبله شاسی بلند / تشک دوبل قابل جداشدن و شستشو از
            جنس کتان دارای کاور باران، پشه بند ، بادگیر برای محافظت از نور و
            باران چهارچرخ روان ۳۶۰ درجه اصلی(سلامت کامل کودک) دارای ترمز قوی /
            اسکلت آلومینیوم قوی و سایه بان uv5 کیفیت و . آن را اول از اینترنت
            جستجو کنید قیمت بسیار مناسب .
          </p>
        </div>
        <div className="w-[504px] px-2">
          <div className="imageBg"></div>
          <textarea
            className="mt-4 resize-none border border-[rgba(0,0,0,.24)] py-2 px-4 rounded w-full h-[120px] outline-none IRANSansWeb"
            placeholder="یادداشت شما..."
          ></textarea>
          <span className="mt-1 IRANSansWeb text-xs text-[#0000008F]">
            یادداشت تنها برای شما قابل دیدن است و پس از حذف آگهی، پاک خواهد شد.
          </span>
        </div>
      </section>
    </>
  );
}
