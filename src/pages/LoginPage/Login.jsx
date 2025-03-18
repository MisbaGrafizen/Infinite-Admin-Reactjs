import React, { useEffect, useState } from "react";
import logo from "../../../public/Header/logo.webp";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import loginMain from "../../../public/adminmain.webp"

import loginMain2 from "../../../public/Header/back.jpg"
export default function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = Cookies.get("email");
    const savedPassword = Cookies.get("password");
    if (savedEmail && savedPassword) {
      setFormData({ email: savedEmail, password: savedPassword });
      setIsChecked(true);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleLogin = async () => {
    const { email, password } = formData;

    if (!email || !password) {
      toast("Please fill in both fields.", "error");
      return;
    }

    if (isChecked) {
      Cookies.set("email", email, { expires: 1 / 12 });
      Cookies.set("password", password, { expires: 1 / 12 });
    } else {
      Cookies.remove("email");
      Cookies.remove("password");
    }

    try {
      const response = await axios.post("https://server.grafizen.in/api/v2/cuckoo/auth/admin/login", formData);
      console.log("Login API Response:", response);
      const user = response.data?.user;
      console.log('user', user)
      const token = user?.tokens?.access?.token;
      if (token) {
        console.log('token', token)
        Cookies.set('authToken', token)
        toast("Login successful!", "success");
        navigate("/landing");
      } else {
        alert("invalid email or password.")
        throw new Error("Login failed: Invalid user data.");
      }
    } catch (error) {
      alert("invalid email or password.")
      console.error("Login error:", error);
      toast(error.message || "Failed to login. Please try again.", "error");
    }
  };

  return (
    <div className="w-[100%] font-Poppins h-[100vh]  bg-main relative">
      <img
        className="w-[100%] absolute h-[100vh] flex z-[-20] "
        src={loginMain2}
        alt="Login Background"
      />

      <div className=" flex h-[100%] items-center">


        <div className=" w-[100%]  flex relative h-[480px] items-center justify-end pr-[70px]">
          <div className=" bg-white w-fit   flex-col flex  h-[370px] rounded-br-[25px]  border rounded-tl-[25px] justify-center items-center ">


            <div className=" absolute top-[0px]">
              <img className='  w-[170px] ' src={logo} />
            </div>
            <div className="z-30 flex bg-[#] pt-[30px] justify-end items-center ">
              <div className="flex flex-col gap-[30px]   p-[30px] rounded-[10px] w-[460px]">
                <div className="  border-[1px] border-[#005f94] rounded-[10px]">
                  <input
                    className="w-[100%] h-[45px]  rounded-[10px] px-[20px] text-[17px] outline-none"
                    placeholder="Enter email"
                    type="email"
                    name="email"
                    value={formData?.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="  border-[1px] border-[#005f94] rounded-[10px]">
                  <input
                    className="w-[100%] h-[45px] rounded-[10px] px-[20px] text-[17px] outline-none"
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={formData?.password}
                    onChange={handleInputChange}
                    onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                  />
                </div>
                <label className="flex gap-[10px] px-[10px] text-[17px] cursor-pointer text-[#005f94]">
                  <input
                    type="checkbox"
                    id="custom-checkbox"
                    style={{ display: "none" }}
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <span
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: isChecked ? "#005f94" : "#fff",
                      borderRadius: "28%",
                      border: "1px solid #005f94",
                      display: "inline-block",
                      position: "relative",
                      cursor: "pointer",
                    }}
                  >
                    {isChecked && (
                      <span
                        style={{
                          position: "absolute",
                          top: "3px",
                          left: "5px",
                          width: "6px",
                          height: "10px",
                          border: "solid white",
                          borderWidth: "0 2px 2px 0",
                          transform: "rotate(45deg)",
                        }}
                      ></span>
                    )}
                  </span>
                  <p>Remember my Preference</p>
                </label>

                <div
                  className="text-white cursor-pointer bg-[#005f94] text-[23px] font-[500] bg-[#005f94] flex justify-center items-center py-[8px] rounded-[10px] transition duration-300 ease-in-out transform hover:bg-[#244077] hover:scale-20 active:scale-105"
                  onClick={handleLogin}
                >
                  <p>LOGIN</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

