
const TodayBlock = ({ temp, day, time, city, img }) => {
  return (
    <div className="shadow-lg p-6  max-w-[100%] flex flex-col h-full items-start gap-6 rounded-[20px] overflow-x-hidden">
      <div className="flex phone:flex-row flex-col-reverse items-center phone:items-start justify-between phone:gap-[30px] gap-[10px] w-full mb-[31px]">
        <div className="flex flex-col text-center phone:text-start">
          <span className="text-5xl phone:text-8xl font-medium text-blue-500">{temp}</span>
          <span className="capitalize text-2xl phone:text-4xl font-medium">{day}</span>
        </div>
        <img
          src={img}
          className="w-[100px] h-[100px] phone:w-[119px] phone:h-[119px] items-center"
          loading="lazy"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-[14px] font-medium text-base phone:text-[20px] text-gray-600 w-full text-center phone:text-start">
        <span>Время: {time}</span>
        <span>Город: {city}</span>
      </div>
    </div>
  );
};

export default TodayBlock;
