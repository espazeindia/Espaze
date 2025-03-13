import "./App.css";
import Cookies from "js-cookie";
import React, { lazy } from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const ForgetPassword = lazy(() => import("./pages/ForgetPassword"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

function ProtectedRoute({ children }) {
  const token = Cookies.get("adminInfo") ? JSON.parse(Cookies.get("adminInfo")) : null;
  return token ? children : <Navigate to="/login" />;
}

function PublicRoute({ children }) {
  const token = Cookies.get("adminInfo") ? JSON.parse(Cookies.get("adminInfo")) : null;
  return token ? <Navigate to="/" /> : children;
}

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          {/* Public Routes (Redirect to Dashboard if already logged in) */}
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/signup" element={<PublicRoute><SignUp /></PublicRoute>} />
          <Route path="/forgot-password" element={<PublicRoute><ForgetPassword /></PublicRoute>} />

          {/* Protected Route (Only logged-in users can access Dashboard) */}
          <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

          {/* Catch-all Route (Redirect unknown paths to login) */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
