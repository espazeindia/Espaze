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
    <div className="bg-[#111827] w-[250px] h-screen p-6 flex flex-col justify-between text-gray-300">
      {/* Logo and Title */}
      <div>
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="logo" className="w-6 h-6" />
          <h1 className="text-lg font-semibold">DESKBOARD</h1>
        </div>
        <p className="text-sm text-gray-500">Sales Management Dashboard</p>

        {/* Sidebar Links */}
        <div className="mt-6 space-y-3">
          {sidebarRoutes.map((route, index) => (
            <Link
              key={index}
              to={route.path}
              className={`flex items-center text-[16px] px-4 py-3 rounded-md font-medium transition-all ${
                location.pathname.includes(route.path)
                  ? "bg-gradient-to-r from-gray-600 to-gray-400/40 text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-700/40"
              }`}
            >
              {<route.icon className="mr-3 text-lg" />}
              {route.name}
              {/* Example notification badge for Invoices */}
              {route.name === "Invoices" && (
                <span className="ml-auto bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Help & Logout Section */}
      <div className="space-y-3">
        <div className="border-t border-gray-700 pt-3">
          <Link
            to="/help"
            className="flex items-center px-4 py-3 rounded-md text-gray-400 hover:bg-gray-700/40 hover:text-white transition-all"
          >
            <HelpOutlineIcon className="mr-3" />
            Help & Center
          </Link>
          <Link
            to="/settings"
            className="flex items-center px-4 py-3 rounded-md text-gray-400 hover:bg-gray-700/40 hover:text-white transition-all"
          >
            <SettingsIcon className="mr-3" />
            Settings
          </Link>
        </div>

        <button
          onClick={handleLogOut}
          className="flex items-center w-full px-4 py-3 text-red-500 border border-red-500 rounded-md hover:bg-red-600/20 transition-all"
        >
          <LogoutOutlinedIcon className="mr-3" />
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
