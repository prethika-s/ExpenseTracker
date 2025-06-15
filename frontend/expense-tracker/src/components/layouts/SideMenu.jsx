import React, { useContext } from 'react';
import { SIDE_MENU_DATA } from '../../utils/data';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import CharAvatar from '../Cards/CharAvatar';

const SideMenu = ({ activeMenu }) => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = (route) => {
    if (route === 'logout') {
      localStorage.clear();
      clearUser();
      navigate('/login');
    } else {
      navigate(route);
    }
  };

  return (
    <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200 p-5 sticky top-[61px] z-20">
      <div className="flex flex-col items-center mb-6">
        {user?.profileImageUrl ? (
          <img
            src={user.profileImageUrl}
            alt="Profile"
            className="w-16 h-16 rounded-full mb-2"
          />
        ) : (<CharAvatar
            fullName={user?.fullName}
            width="w-20"
            height="h-20"
            style="text-xl"
        />
    )}
        <h5 className="text-center font-semibold">{user?.fullName || ''}</h5>
      </div>

      {SIDE_MENU_DATA.map((item, index) => (
        <button
          key={`menu_${index}`}
          className={`w-full flex items-center gap-3 text-sm ${
            activeMenu === item.label
              ? 'bg-primary text-white'
              : 'text-gray-800'
          } py-3 px-4 rounded-lg mb-2 hover:bg-gray-100 transition-all`}
          onClick={() => handleClick(item.path)}
        >
          <item.icon className="text-lg" />
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default SideMenu;
