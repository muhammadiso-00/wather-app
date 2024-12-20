import Temp from "/temp.svg";
import Osadka from "/osadka.svg";
import Wind from "/wind.svg";
import Pressure from "/pressure.svg";

const TodayExtra = ({ temp, pressure, osadkov, wind }) => {
  return (
    <div className="phone:py-[35px] py-[20px] h-full  gap-[24px] justify-center flex flex-col px-[20px] phone:px-[32px] shadow-lg rounded-[20px] w-full bg-no-repeat bg-right-top bg-[url('/bg_img.png')]">
      <div className="temp flex items-center  gap-[15px] phone:gap-[20px]">
        <div className=" py-[12px] px-[12px] rounded-full shadow-3xl">
          <img src={Temp} alt="" className="w-[25px] h-[25px]" />
        </div>
        <h3 className="phone:text-[20px] font-base text-[#939CB0]">Температура</h3>
        <span className="phone:text-[20px]">{temp}</span>
      </div>

      <div className="pressure flex items-center  gap-[20px]">
        <div className=" py-[12px] px-[12px] rounded-full shadow-3xl">
          <img src={Pressure} alt="" className="w-[25px] h-[25px]" />
        </div>
        <h3 className="phone:text-[20px] font-base text-[#939CB0]">Давление </h3>
        <span className="phone:text-[20px]">{pressure}</span>
      </div>

      <div className="osadka flex  items-center gap-[20px]">
        <div className=" py-[12px] px-[12px] rounded-full shadow-3xl">
          <img src={Osadka} alt="" className="w-[25px] h-[25px]" />
        </div>

        <h3 className="phone:text-[20px] font-base text-[#939CB0]">Осадки</h3>
        <span className="phone:text-[20px]">{!osadkov?"clear sky":"нет осадки"}</span>
      </div>
      <div className="wind flex items-center gap-[20px]">
        <div className=" py-[12px] px-[12px] rounded-full shadow-3xl">
          <img src={Wind} alt="" className="w-[25px] h-[25px]" />
        </div>

        <h3 className="phone:text-[20px] font-base text-[#939CB0]">Ветер</h3>
        <span className="phone:text-[20px]">{wind}</span>
      </div>
    </div>
  );
};

export default TodayExtra;
