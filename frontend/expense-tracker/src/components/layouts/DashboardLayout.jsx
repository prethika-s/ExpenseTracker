import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import Navbar from './Navbar';
import SideMenu from './SideMenu';

const DashboardLayout = ({ children, activeMenu }) => {
  const { user } = useContext(UserContext);

  return (
    <div className="flex flex-col h-screen">
      <Navbar activeMenu={activeMenu} />
      {user && (
        <div className="flex flex-1">
          {/* Sidebar: always visible on large screens */}
          <div className="hidden lg:block">
            <SideMenu activeMenu={activeMenu} />
          </div>

          {/* Main content */}
          <div className="flex-grow px-5 py-6 overflow-y-auto">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
