import Button from "../../components/Button";
import Menu from "./Menu";

const Banner = () => {
  return (
    <div className=" bg-[url('/images/bannerSmall.png')] md:bg-[url('/images/banner.png')] h-[266px] md:h-[766px] flex flex-col items-center">
      <Menu />
      <div className=" text-[32px] md:text-[64px] text-[#fff] font-[700] text-center ">
        Salvation is Within Your Reach
      </div>
      <div className=" text-[12px] md:text-[16px] font-[400] text-[#fff] text-center px-[20px] md:px-[0]">
        "For it is by grace you have been saved, through faith"
      </div>
      <div className=" text-[12px] md:text-[16px] font-[400] text-[#fff]">
        ~Ephesians 2:8-9
      </div>
      <Button text={"Worship With US"} />
    </div>
  );
};

export default Banner;
