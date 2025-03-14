import React from "react";
import Cookies from "js-cookie";
import { sidebarRoutes } from "../../routes";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Logo from "../../assets/img/logo.png"; 

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogOut = () => {
    Cookies.remove("adminInfo", { sameSite: "None", secure: true });
    navigate("/login");
  };

  return (
    <div className="bg-[#192030] w-[15vw] h-screen py-6 flex flex-col justify-between text-white">
      {/* Logo and Title */}
      <div>
        <div className="px-3">
        <div className="flex items-center justify-center border-b-[1px] border-gray-700 pb-5">
          <img src={Logo} alt="logo" className="w-30 h-14 relative right-3" />
          {/* <h1 className="text-3xl font-normal w-full  mt-4 ">spaze</h1>
          <div className="text-xs text-gray-400">Product Managment Dashboard</div> */}
        </div>
        </div>
      

        {/* Sidebar Links */}
        <div className="mt-3 space-y-1">
          {sidebarRoutes.map((route, index) => (
            <Link
            key={index}
            to={route.path}
            className={`flex items-center text-base px-6 py-3 font-semibold transition-all duration-1000 ${
              location.pathname.includes(route.path)
                ? "bg-gradient-to-r from-white/30 to-white/10 text-white backdrop-blur-md"
                : "text-gray-500 hover:bg-gray-700/50"
            }`}
          >
              {<route.icon className="mr-3 text-lg" />}
              {route.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Help & Logout Section */}
      <div className="space-y-1 px-3">
        <div className="border-t border-gray-700 pt-3">
          <Link
            to="/help"
            className="flex items-center px-4 py-2 rounded-md text-gray-400 hover:text-white transition-all"
          >
            <HelpOutlineIcon className="mr-3" />
            Help & Center
          </Link>
          <Link
            to="/settings"
            className="flex items-center px-4 py-2 rounded-md text-gray-400 hover:text-white transition-all"
          >
            <SettingsIcon className="mr-3" />
            Settings
          </Link>
        </div>

        <button
          onClick={handleLogOut}
          className="flex items-center w-full px-4 py-3 text-red-500 rounded-md duration-1000
           hover:bg-red-500 hover:text-white hover:cursor-pointer transition-all"
        >
          <LogoutOutlinedIcon className="mr-3" />
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
