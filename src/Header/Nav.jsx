import { MenuMobile, Menu } from './Menu';

const Nav = () => {
  return (
    <header
      className={'flex justify-between items-center  p-6 relative md:px-36'}
    >
      <img src="images\logo.svg" alt="" />
      <Menu />
      <MenuMobile />
    </header>
  );
};

export default Nav;
