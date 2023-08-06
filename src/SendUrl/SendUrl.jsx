import PreviewUrl from './previewUrl';

const data = [
  {
    preview: 'https://www.frontendmentor.iso',
    newUrl: 'https://rel.ink/k4lKyk',
  },
  {
    preview: 'https://www.frontendmentor.iao',
    newUrl: 'https://rel.ink/k4lKyk',
  },
  {
    preview: 'https://www.frontendmentor.iqo',
    newUrl: 'https://rel.ink/k4lKyk',
  },
];

const SendUrl = () => {
  return (
    <section className="px-6 md:px-36 mt-20 md:mt-16">
      <form
        action=""
        className="bg-[url('images/bg-boost-mobile.svg')] bg-left bg-[#3A3054] flex flex-wrap p-6 rounded-lg space-y-6 md:space-y-0 justify-between md:bg-[url('images/bg-boost-desktop.svg')]"
      >
        <input
          className="w-full md:w-[83%] py-2 px-3 rounded-lg outline-[#F46363]"
          placeholder="Shorten a link here..."
          type="text"
        />
        <button className="w-full md:w-[15%] py-3 bg-[#2BD0D0] rounded-lg font-bold text-white">
          Shorten It!
        </button>
      </form>

      {data.map(({ preview, newUrl }) => {
        return <PreviewUrl key={preview} preview={preview} newUrl={newUrl} />;
      })}
    </section>
  );
};

export default SendUrl;
