import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState([]);

  async function request(url, options) {
    const response = await fetch(url, options);
    const json = await response.json();
    setData((prevState) => [...prevState, json]);
    console.log(data);
  }

  return { data, request };
};

export default useFetch;
