const PreviewUrl = ({ preview, newUrl }) => {
  return (
    <div className="my-5 p-4 flex flex-wrap items-center justify-between bg-white">
      <p>
        <a href={preview}>{preview}</a>
      </p>

      <hr className="md:hidden" />

      <div className="md:flex gap-3 w-full md:w-[30%] items-center">
        <p className="my-4 text-[#2BD0D0]">
          <a href={newUrl}>{newUrl}</a>
        </p>
        <button className="block w-full md:w-[150px] py-2 bg-[#2BD0D0] rounded-lg text-white font-bold">
          Coppy
        </button>
      </div>
    </div>
  );
};

export default PreviewUrl;
