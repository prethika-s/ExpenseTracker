import React, { useState } from 'react';
import SideMenu from './SideMenu';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-30">
        <button
          className="block lg:hidden"
          onClick={() => setOpenSideMenu(!openSideMenu)}
        >
          {openSideMenu ? (
            <HiOutlineX className="text-2xl" />
          ) : (
            <HiOutlineMenu className="text-2xl" />
          )}
        </button>
        <h2 className="text-xl font-bold">Expense Tracker</h2>
      </div>

      {/* Mobile SideMenu */}
      {openSideMenu && (
        <div className="lg:hidden">
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </>
  );
};

export default Navbar;
