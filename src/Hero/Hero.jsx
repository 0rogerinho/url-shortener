const Hero = () => {
  return (
    <section className="overflow-hidden flex flex-wrap p-6 gap-7 md:px-36 md:flex-nowrap md:flex-row-reverse md:gap-0 md:justify-between">
      <img
        className="block w-[450px] scale-110 z-0 translate-x-[28%] md:scale-105 md:translate-x-[50%]"
        src="images/illustration-working.svg"
      />

      <section className="text-center  text-[#34313D] space-y-3 md:w-[565px] md:text-start">
        <h1 className="font-bold text-[2.4375rem] md:text-[5rem]">
          More than just shorter links
        </h1>
        <p className="text-lg md:text-xl">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="py-3 px-10 bg-[#2BD0D0] rounded-3xl font-bold text-white md:py-4 md:px-12">
          Get Started
        </button>
      </section>
    </section>
  );
};

export default Hero;
