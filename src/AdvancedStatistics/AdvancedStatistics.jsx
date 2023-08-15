import CardStatistic from './CardStatistic';

const data = [
  {
    title: 'Brand Recognition',
    content:
      'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
    img: 'images/icon-brand-recognition.svg',
  },
  {
    title: 'Detailed Records',
    content:
      'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
    img: 'images/icon-detailed-records.svg',
  },
  {
    title: 'Fully Customizable',
    content:
      'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    img: 'images/icon-fully-customizable.svg',
  },
];

const AdvancedStatistics = () => {
  return (
    <section className=" px-6 md:px-40 mt-40 flex items-center relative">
      <div className="flex flex-col gap-32 after:w-[10px] after:h-[100%] after:left-2/4 after:bg-[#2BD0D0] after:absolute md:after:w-[60%] md:after:h-[10px] md:flex-row md:justify-around md:gap-0 md:after:top-2/4 md:after:left-auto md:after:-translate-y-2/4 md:[&>*:nth-child(1)]:-top-14 md:[&>*:nth-child(3)]:top-14">
        {data.map(({ title, content, img }) => (
          <CardStatistic
            key={title}
            title={title}
            content={content}
            img={img}
          />
        ))}
      </div>
    </section>
  );
};

export default AdvancedStatistics;
