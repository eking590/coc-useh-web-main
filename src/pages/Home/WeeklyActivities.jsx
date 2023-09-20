import React from "react";

const WeeklyActivities = () => {
  return (
    <div className="w-full my-[64px] px-[1.5rem] md:px-[3rem]">
      <div className=" text-[32px] md:text-[40px] font-[700] md:font-[500] text-[#000] text-center md:mb-[61px]">
        Our Weekly Activities
      </div>

      <div className=" w-full flex-col md:flex-row flex justify-start md:justify-between">
        <div className=" p-[20px_36px] flex flex-col justify-center md:items-center text-[#000]">
          <div className=" text-[28px] font-[700]">Sunday Worship</div>
          <div>
            <span className=" text-[24px] font-[500]">Time</span>
            <span className=" text-[18.522px] font-[400]">: 9a</span>
            <span className=" text-[16px] font-[400]">m every Sunday</span>
          </div>
          <div>
            <span className=" text-[24px] font-[500]">Venue</span>
            <span className=" text-[18.522px] font-[400]">: </span>
            <span className=" text-[16px] font-[400]">Church Auditorium</span>
          </div>
        </div>

        <div className=" p-[20px_36px] flex flex-col justify-center md:items-center text-[#000]">
          <div className=" text-[28px] font-[700]">Bible Study</div>
          <div>
            <span className=" text-[24px] font-[500]">Time</span>
            <span className=" text-[18.522px] font-[400]">: 5p</span>
            <span className=" text-[16px] font-[400]">m every Wednesday</span>
          </div>
          <div>
            <span className=" text-[24px] font-[500]">Venue</span>
            <span className=" text-[18.522px] font-[400]">: </span>
            <span className=" text-[16px] font-[400]">Church Auditorium</span>
          </div>
        </div>

        <div className=" p-[20px_36px] flex flex-col justify-center md:items-center text-[#000]">
          <div className=" text-[28px] font-[700]">Song Practice</div>
          <div>
            <span className=" text-[24px] font-[500]">Time</span>
            <span className=" text-[18.522px] font-[400]">: 6p</span>
            <span className=" text-[16px] font-[400]">m every Saturday</span>
          </div>
          <div>
            <span className=" text-[24px] font-[500]">Venue</span>
            <span className=" text-[18.522px] font-[400]">: </span>
            <span className=" text-[16px] font-[400]">Church Auditorium</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyActivities;
