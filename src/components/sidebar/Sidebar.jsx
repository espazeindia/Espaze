import React from "react";
import Cookies from "js-cookie";
import { sidebarRoutes } from "../../routes";
import { Link, useLocation,useNavigate } from "react-router-dom";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

function Sidebar() {
  const navigate=useNavigate();
  const location = useLocation();
  const handleLogOut=() => {
    Cookies.remove("adminInfo", { sameSite: "None", secure: true });
    navigate("/login")
  }

  return (
    <div className="bg-white w-[13vw] border-r p-5 flex flex-col justify-between ">
      <div>
        <div className="text-2xl font-semibold">Espaze</div>
        <div className="space-y-1 mt-5">
          {sidebarRoutes.map((route, index) => (
            <div key={index}>
              <Link
                to={route.path}
                className={`text-lg flex items-center justify-start px-3 py-1 rounded-md ${
                  location.pathname.includes(route.path) ? "bg-black text-white" : "text-black"
                }`}
              >
                {<route.icon />}
                <div className="ml-2">{route.name}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <button onClick={handleLogOut} className="flex text-red-500 justify-center border-red-500 border rounded-md py-2 items-center w-full hover:bg-red-100 hover:cursor-pointer">
        <LogoutOutlinedIcon className="text-red-500 mr-2" />
        Log Out
      </button>
    </div>
  );
}

export default Sidebar;
