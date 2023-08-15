const CardStatistic = ({ title, content, img }) => {
  return (
    <div className=" bg-white max-w-[100%] md:max-w-[31%] py-10 px-9 rounded-[5px] text-center md:text-left space-y-3  relative z-10">
      {/* Image container */}
      <div className="w-max p-6 bg-[#3A3054] rounded-full absolute -top-[20%] left-1/2 transform -translate-x-1/2 md:left-0 md:mx-9 md:translate-x-0">
        <img className="block w-10 h-10" src={img} alt="Statistic Icon" />
      </div>

      {/* Content */}
      <h1 className="text-2xl text-[#34313D] font-bold">{title}</h1>
      <p className="text-[#9E9AA8]">{content}</p>
    </div>
  );
};

export default CardStatistic;
