import React, { useState, lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Internal imports
import { routes } from "../../routes/index";
import Sidebar from "../sidebar/Sidebar";

// const Page404 = lazy(() => import("@/pages/404"));

const Layout = () => {
  const [sideBarOpen, setSideBarOpen] = useState(true);

  return (
    <div className={`flex h-screen ${sideBarOpen && "overflow-hidden"}`}>
      {sideBarOpen && <Sidebar />}

      <div className="w-[85vw]">
          <Routes>
            {routes.map((route, i) => (
              route.component ? (
                <Route key={i} path={`${route.path}`} element={<route.component />} />
              ) : null
            ))}
            <Route path="*" element={<Navigate to="/dashboard"/>}/> 
            {/* Show 404 page for unknown routes */}
            {/* <Route path="*" element={<Page404 />} /> */}
          </Routes>
      </div>
    </div>
  );
};

export default Layout;
