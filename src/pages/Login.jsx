import React, { useState } from "react";
import Cookies from "js-cookie";
import { FormControl, Input } from "@mui/joy";
import LoginImage from "../assets/img/login-office.jpeg";
import { Link } from "react-router-dom";
import AdminServices from "../services/AdminServices";
import { notifyError, notifySuccess } from "../utils/toast";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const cookieTimeOut = 0.5;
      const res = await AdminServices.loginAdmin({ ...formData });
      if (res) {
        notifySuccess("Login Success!");
        Cookies.set("adminInfo", JSON.stringify(res), {
          expires: cookieTimeOut,
          sameSite: "None",
          secure: true,
        });
        navigate("/");
      }
    } catch (err) {
      notifyError(err?.response?.data?.message || err?.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex items-center min-h-screen p-6 bg-black">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden rounded-lg  bg-white/10 ">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full"
              src={LoginImage}
              alt="Office"
            />
          </div>

          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-6 text-4xl font-semibold text-white text-center">Login</h1>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <FormControl size="lg" className="space-y-1">
                  <label className="text-xl text-green-400 font-semibold">Email</label>
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    fullWidth
                    size="lg"
                    placeholder="Enter Email"
                  />
                </FormControl>
                <FormControl size="lg" className="space-y-1">
                  <label className="text-xl text-green-400 font-semibold">Password</label>
                  <Input
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    fullWidth
                    size="lg"
                    placeholder="Enter Password"
                  />
                </FormControl>

                <button
                  type="submit"
                  className="w-full bg-green-500 py-2 rounded-lg font-semibold text-white hover:bg-green-600"
                >
                  Login
                </button>
              </form>

              {/* Links */}
              <p className="mt-10">
                <Link
                  className="text-lg w-fit mx-auto font-medium text-green-500 block text-center  hover:underline"
                  to="/forgot-password"
                >
                  Forgot Password?
                </Link>
              </p>
              <p className="mt-1">
                <Link
                  className="text-lg w-fit mx-auto font-medium text-green-500 block text-center  hover:underline"
                  to="/signup"
                >
                  Create an Account
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Login;
