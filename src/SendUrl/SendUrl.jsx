import React from 'react';
import PreviewUrl from './previewUrl';
import useFetch from '../hooks/useFetch.js';

const date = [
  {
    link: 'https://www.frontendmentor.iso',
    long_url: 'https://rel.ink/k4lKyk',
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
  const [newUrl, setNewUrl] = React.useState('');

  console.log(newUrl);

  const { request, data } = useFetch();

  function handleSubmit(event) {
    event.preventDefault();
    request('https://api-ssl.bitly.com/v4/shorten', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        long_url: `${newUrl}`,
      }),
    });
  }

  return (
    <section className="px-6 md:px-36 mt-20 md:mt-16">
      <form
        onSubmit={handleSubmit}
        action=""
        className="bg-[url('images/bg-boost-mobile.svg')] bg-left bg-[#3A3054] flex flex-wrap p-6 rounded-lg space-y-6 md:space-y-0 justify-between md:bg-[url('images/bg-boost-desktop.svg')]"
      >
        <input
          onChange={(e) => {
            e.preventDefault();
            setNewUrl(e.target.value);
          }}
          className="w-full md:w-[83%] py-2 px-3 rounded-lg outline-[#F46363]"
          placeholder="Shorten a link here..."
          type="text"
        />
        <button className="w-full md:w-[15%] py-3 bg-[#2BD0D0] rounded-lg font-bold text-white">
          Shorten It!
        </button>
      </form>

      {data.map(({ id, link, long_url }) => {
        return <PreviewUrl key={id} preview={long_url} newUrl={link} />;
      })}
    </section>
  );
};

export default SendUrl;
