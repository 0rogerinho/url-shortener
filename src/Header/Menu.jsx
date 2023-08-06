import React from 'react';

const ul = ['Features', 'Pricing', 'Resources'];

export const Menu = () => {
  return (
    <nav className="w-full ml-5 hidden md:flex justify-between items-center">
      <ul className="flex gap-5">
        {ul.map((item) => {
          return (
            <li
              key={item}
              className="text-[#9E9AA8] font-bold hover:text-black cursor-pointer"
            >
              {item}
            </li>
          );
        })}
      </ul>

      <div className=" space-x-4">
        <button className="text-[#9E9AA8] hover:text-black font-bold">
          Login
        </button>
        <button className="py-2 px-6 font-bold text-[13px] text-white bg-[#2BD0D0] rounded-3xl">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export const MenuMobile = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  function handleClick(event) {
    event.preventDefault();
    setOpenMenu(!openMenu);
  }

  return (
    <div onClick={handleClick} className={`md:hidden z-10`}>
      <div className="group space-y-1">
        <div className="w-4 h-0.5 bg-gray-700 "></div>
        <div className="w-4 h-0.5 bg-gray-700"></div>
        <div
          className={`w-4 h-0.5 bg-gray-700 ${
            openMenu ? 'rotate-[-60deg] translate-y-1 translate-x-1' : ''
          } transition-all duration-300 `}
        ></div>
      </div>
      <div
        className={` ${
          openMenu ? 'opacity-full delay-300' : 'opacity-0'
        } w-[80%] p-6 m-auto bg-[#3A3054] rounded-xl rounded-tr-none top-[59px] right-[69px] absolute translate-x-6  transition-all 
        `}
      >
        <ul className="flex flex-col items-center gap-8 text-white text-lg font-medium">
          <h1>Features</h1>
          <h1>Pricing</h1>
          <h1>Resources</h1>
          <div className="w-full h-[1.2px] bg-[#9E9AA8] "></div>
          <button>Login</button>
          <button className="py-3 px-20 font-bold text-[13px] bg-[#2BD0D0] rounded-3xl">
            Sign Up
          </button>
        </ul>
      </div>
    </div>
  );
};
