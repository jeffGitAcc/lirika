import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';

import { HiOutlineMenu } from 'react-icons/hi';
import { links } from '../assets/constants';

const NavLinks = ({ handleClick }) => (

  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row my-8 text-sm font-medium text-gray-400 items-center justify-start hover:text-cyan-400"
        onClick={() => handleClick && handleClick()}
      >

        <item.icon className="w-6 h-4 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>

      <div className=" md:flex hidden flex-col w-[200px] py-10 px-4 bg-[#15121f]">
        <h1 className="text-white text-center font-serif tracking-widest">-LIRIKA-</h1>
        <NavLinks />
      </div>

      <div className="absolute top-6 right-0 block md:hidden text-white">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="w-6 text-white mr-2 "
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="w-6 text-white mr-2"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}

      </div>

      <div className={`absolute top-0 md:hidden h-screen w-[200px] bg-gradient-to-tl from-white/10 to-[#483d8b] z-10 ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <h1 className="text-white text-center font-serif tracking-widest">-LIRIKA-</h1>

        <NavLinks />
      </div>
    </>
  );
};

export default Sidebar;
