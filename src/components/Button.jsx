import React from "react";

const Button = ({ text }) => {
  return (
    <button className="flex items-center justify-center w-[120px] md:w-[265px] h-[25px] md:h-[63px] p-[10px]  rounded-[12px] bg-[#EA5954] mt-[20px] text-[12px] md:text-[24px] text-[#fff] font-[400]">
      {text}
    </button>
  );
};

export default Button;
