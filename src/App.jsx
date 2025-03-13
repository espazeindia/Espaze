import "./App.css";
import Cookies from "js-cookie";
import React, { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const ForgetPassword = lazy(() => import("./pages/ForgetPassword"));
const Layout = lazy(() => import("./components/layout/Layout"));

function ProtectedRoute({ children }) {
  const token = Cookies.get("adminInfo") ? JSON.parse(Cookies.get("adminInfo")) : null;
  return token ? children : <Navigate to="/login" replace />;
}

function PublicRoute({ children }) {
  const token = Cookies.get("adminInfo") ? JSON.parse(Cookies.get("adminInfo")) : null;
  return token ? <Navigate to="/dashboard" replace /> : children;
}

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
            <Route path="/signup" element={<PublicRoute><SignUp /></PublicRoute>} />
            <Route path="/forgot-password" element={<PublicRoute><ForgetPassword /></PublicRoute>} />

            {/* Redirect "/" to "/dashboard" explicitly */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/*" element={<ProtectedRoute><Layout /></ProtectedRoute>} />

            {/* Catch-all route for unknown paths */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
