import React from "react";
import Button from "../../components/Button";

const Sermon = () => {
  return (
    <div>
      <div className=" flex  flex-col md:flex-row justify-between gap-x-[40px] ml-[12px] mr-[12px] md:ml-[24px] md:mr-[56px]">
        <div className=" text-[#000] hidden md:block">
          <div className=" text-[40px] font-[500]">Latest Sermon</div>
          <div className=" text-[16px] font-[400]">
            Find Sermons and other useful resources in our online library.
          </div>
          <Button text={"Library"} />
        </div>
        <img src="/images/img1.png" alt="" className=" hidden md:block" />

        <div className=" w-full h-[406px] bg-[url(/images/img1small.png)] md:hidden">
          <div className=" h-full p-[1.5px] flex flex-col items-center justify-center text-[#fff]">
            <div className=" text-[40px] font-[500]">Latest Sermon</div>
            <div className=" text-[16px] font-[400] text-center">
              Find Sermons and other useful resources in our online library.
            </div>
            <Button text={"Library"} />
          </div>
        </div>
      </div>

      <div className=" flex justify-between gap-x-[40px] ml-[24px] mr-[56px] mt-[120px]">
        <img src="/images/img2.png" alt="" className="hidden md:block" />
        <div className=" text-[#000] hidden md:block">
          <div className=" text-[40px] font-[500]">
            We are a church that believes in God, inviting all to join us.
          </div>

          <Button text={"Contact Us"} />
        </div>
      </div>

      <div className=" w-full h-[406px] bg-[url(/images/img2small.png)] md:hidden">
        <div className=" h-full p-[1.5px] flex flex-col items-center justify-center text-[#fff]">
          <div className=" text-[32px] font-[500] text-center px-[25px]">
            We are a church that believes in God, inviting all to join us.
          </div>
          <Button text={"Library"} />
        </div>
      </div>
    </div>
  );
};

export default Sermon;
