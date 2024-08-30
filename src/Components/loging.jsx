import React, { useState } from "react";
import { Header } from "./Header";
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa6";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";

import "../GlobalCss/global.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export const Logging = () => {
  const serverUrl = useSelector((state) => state.SerVerUrlSave);

  const navigate = useNavigate();

  // for eyey econ
  const [eyeOpen, setEyeopen] = useState(true);
  const [passtpe, setpasstpe] = useState("text");
  // for eyey econ

  // input handle
  const [PhoneNumbre, setPhoneNumber] = useState("");
  const [Password, setPassword] = useState("");
  // input handle

  const [showError, setShowError] = useState(false);

  // pasword eye iacon handle

  const passwordHandle = () => {
    if (eyeOpen) {
      setpasstpe("password");
    } else {
      setpasstpe("text");
    }

    setEyeopen((prev) => !prev);
  };

  // password Data Hanlde

  const HandleInputData = (e) => {
    const targatedItem = e.target;

    if (targatedItem.name == "phoneNumber") {
      setPhoneNumber(targatedItem.value);
    }
    if (targatedItem.name == "password") {
      setPassword(targatedItem.value);
    }
  };

  // for phone number check
  const PhoneNerValidate = () => {
    const numlenth = PhoneNumbre.length === 11 ? true : false;
    const checkNumOnly = isNaN(Number(PhoneNumbre)) ? false : true;

    const check01haveOrNot = PhoneNumbre.includes("01");

    if (numlenth && checkNumOnly && check01haveOrNot) {
      console.log("all okey");
      return true;
    } else {
      console.log("all not okey");

      return false;
    }
  };

  //   for set localstorage and local variable

  const setUserInfo = (data) => {
    const { FullName, Email, phoneNumber, ProfileIamge } = data;

    localStorage.setItem("userNumber", phoneNumber);
    localStorage.setItem("profile", ProfileIamge);
    localStorage.setItem("FullName", FullName);
    localStorage.setItem("Email", Email);

    setTimeout(() => {
      navigate("/");
    }, 300);
  };

  // loging hadnle section here
  const HandleLoging = async (e) => {
    e.preventDefault();

    const CheckValidation = PhoneNerValidate();
    console.log(CheckValidation);
    if (CheckValidation) {
      try {
        await axios
          .get(`${serverUrl}loinginfo/${PhoneNumbre}/${Password}`)
          .then((response) => {
            console.log(response.data.UserInfo);
            setUserInfo(response.data.UserInfo);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {}
    } else {
      setShowError(true);

      setTimeout(() => {
        setShowError(false);
      }, 2000);
    }
  };

  return (
    <div className="h-screen w-full ">
      <Header />

      <div className="w-full divHightWithoutHeader   px-2 py-5 ">
        <div className="w-full h-fit py-5 mt-[80px] bg-[#a4c3b277] rounded-md">
          <h3 className="w-full h-8 text-center text-[25px]">Loging</h3>
          <form className="my-2" onSubmit={HandleLoging}>
            {/* number section  */}
            <div className="w-full h-fit py-1 px-1 flex gap-2">
              <div className="w-[30%] h-10 flex justify-end items-center ">
                <label
                  className="flex items-center justify-center gap-2"
                  htmlFor="number"
                >
                  Number
                  <FaPhoneAlt /> :{" "}
                </label>
              </div>
              <div className="w-[70%] h-fit ">
                <input
                  onChange={HandleInputData}
                  required
                  className="h-10 w-full bg-transparent px-2 rounded-md border border-black"
                  value={PhoneNumbre}
                  id="number"
                  type="text"
                  name="phoneNumber"
                />
              </div>
            </div>
            {/* number section  */}

            {/* password section  */}
            <div className="w-full h-fit py-1 px-1 flex gap-2 mt-2">
              <div className="w-[30%] h-10 flex justify-end items-center ">
                <label
                  className="w-full px-1 flex items-center justify-center gap-2"
                  htmlFor="password"
                >
                  Password
                  <FaKey /> :{" "}
                </label>
              </div>
              <div className="w-[70%] h-fit relative ">
                <button
                  type="button"
                  onClick={passwordHandle}
                  className="absolute top-[50%]  translate-y-[-50%] right-2 text-[25px]"
                >
                  {eyeOpen ? <GoEye /> : <GoEyeClosed />}
                </button>

                <input
                  onChange={HandleInputData}
                  required
                  className="h-10 w-full bg-transparent px-2 rounded-md border border-black"
                  type={passtpe}
                  value={Password}
                  name="password"
                  id="password"
                />
              </div>
            </div>
            {/* password section  */}

            {/* Error messege div  */}
            {showError ? (
              <div className="w-full h-8  flex justify-center origin-center text-red-900">
                <p>Number Or Password Not Match</p>
              </div>
            ) : null}

            {/* Error messege div  */}

            {/* loing button   */}
            <div className="h-fit w-full py-2 flex justify-center items-center mt-2">
              <button
                type="submit"
                className="h-10 w-[75%] rounded-md bg-[#588157]"
              >
                Loging
              </button>
            </div>
            {/* loing button   */}

            <div className="h-fit w-full  flex justify-center items-center mt-2">
              <Link
                to={"/account/registration"}
                className="h-10 w-1/2 bg-[#a3b18a] rounded-md flex items-center justify-center"
              >
                <span>Registration</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
