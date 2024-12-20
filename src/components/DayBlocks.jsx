const DayBlocks = ({ day, date, img, temp, tempNight, weatherStatus }) => {
    return (
      <div className="flex flex-col items-start w-full phone:w-[150px] p-[11px] gap-2 bg-[#4793FF33] rounded-[10px] shadow-md text-start">
        <div className="flex flex-col ">
          <h3 className="capitalize text-[18px] font-medium pr-[70px]">{day}</h3>
          <span className="text-[#939CB0] font-normal text-[14px]">{date}</span>
        </div>
        <img src={img} alt={weatherStatus} className="w-20 h-20 pt-[12px] pb-[12px]" />
        <div className="flex flex-col">
          <span className="text-[18px] font-medium text-black">{temp}</span>
          <span className="text-[13px] font-normal text-[#939CB0]">{tempNight}</span>
        </div>
        <span className="text-[13px] font-normal text-[#939CB0]">{weatherStatus}</span>
      </div>
    );
  };
  
  export default DayBlocks;
  