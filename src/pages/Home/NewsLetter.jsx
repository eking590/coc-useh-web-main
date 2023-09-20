import React from "react";

const NewsLetter = () => {
  return (
    <div className=" w-full flex flex-col items-center pb-[251px] gap-y-[20px] mt-[53px]">
      <div className=" text-[24px] md:text-[40px] font-[400] md:font-[500]">
        Join Our Weekly Newsletters
      </div>
      <div className=" w-[90%] md:w-[804px] p-[10px] rounded-[12px] flex border-[1px] border-[#C1BFBF] gap-x-[5px]">
        <input
          type="text"
          placeholder="Enter your email"
          className=" grow outline-none text-[#000] placeholder:text-[#000]"
        />
        <button className=" w-[126px] h-[34px] p-[10px] rounded-[12px] text-[#000] bg-[#EA5954] flex items-center justify-center">
          Join
        </button>
      </div>
      <div className=" text-[12px] md:text-[16px] font-[400]">
        Join to get weekly updates, and daily spiritual articles
      </div>

      <div className=" text-[12px] md:text-[16px] font-[400]">
        © 2023 COC. All rights reserved.
      </div>

      <div className=" flex gap-x-[10px] md:gap-x-[31px] text-[10px] font-[400]">
        <div>
          <div>Call Us</div>
          <div className=" flex items-center gap-x-[4px] md:gap-x-[8px]">
            <img
              src="/images/phone.png"
              alt=""
              className=" w-[24px] h-[24px] "
            />
            +2340000000000
          </div>
        </div>

        <div>
          <div>Send us a mail</div>
          <div className="flex items-center gap-x-[4px] md:gap-x-[8px]">
            <img
              src="/images/email.png"
              alt=""
              className=" w-[24px] h-[24px]"
            />
            cocuseh@gmail.com
          </div>
        </div>

        <div>
          <div>Socials</div>
          <div className=" flex gap-x-[4px] md:gap-x-[8px]">
            <img
              src="/images/facebook.png"
              alt=""
              className=" w-[24px] h-[24px]"
            />
            <img
              src="/images/instagram.png"
              alt=""
              className=" w-[24px] h-[24px]"
            />
            <img
              src="/images/whatsapp.png"
              alt=""
              className=" w-[24px] h-[24px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
