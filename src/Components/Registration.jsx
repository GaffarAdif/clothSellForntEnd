import React, { useState } from "react";
import { Header } from "./Header";
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa6";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { FaClipboardUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import axios from "axios";

import "../GlobalCss/global.css";
import { Link, useNavigate } from "react-router-dom";

export const Registration = () => {
  const navigate = useNavigate();

  const [eyeOpen, setEyeopen] = useState(true);
  const [CeyeOpen, setCEyeopen] = useState(true);
  const [passtpe, setpasstpe] = useState("text");
  const [Cpasstpe, setCpasstpe] = useState("text");

  // user data
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  // user create succes messege
  const [succesMessege, setSuccesMessege] = useState({
    succses: false,
    messege: "",
  });
  //  for user Confirm pass
  const [confirmPassState, setconfirmPassState] = useState("");

  // for all errror messege
  const [ErrorMesssege, setErrorMassege] = useState({
    emailError: {
      ExistEmail: null,
    },
    PhoneError: {
      WrongPhone: null,
    },
    PasswordError: null,
  });

  ////////////////////////

  const passwordHandle = () => {
    if (eyeOpen) {
      setpasstpe("password");
    } else {
      setpasstpe("text");
    }

    setEyeopen((prev) => !prev);
  };

  const CpasswordHandle = () => {
    if (CeyeOpen) {
      setCpasstpe("password");
    } else {
      setCpasstpe("text");
    }

    setCEyeopen((prev) => !prev);
  };

  //   for confimr password check password check

  const HandleConfirmPass = (event) => {
    setconfirmPassState(event.target.value);
  };

  // for phone number check
  const PhoneNerValidate = () => {
    const numlenth = userData.phoneNumber.length === 11 ? true : false;
    const checkNumOnly = isNaN(Number(userData.phoneNumber)) ? false : true;

    const check01haveOrNot = userData.phoneNumber.includes("01");

    if (numlenth && checkNumOnly && check01haveOrNot) {
      return true;
    } else {
      return false;
    }
  };

  const passwordValidate = () => {
    const passlenth = userData.password.length > 5 ? true : false;
    const pssMathcpass = userData.password === confirmPassState ? true : false;

    if (passlenth && pssMathcpass) {
      return true;
    } else {
      return false;
    }
  };

  // for hadnle chagne
  const HandleChange = (e) => {
    setUserData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  // for handle form submit

  const HandleSubmit = async (event) => {
    event.preventDefault();

    let NumberCheck = PhoneNerValidate();
    let passCheck = passwordValidate();

    //  if phon password Worng
    if (!passCheck) {
      setErrorMassege((prev) => {
        return { ...prev, PasswordError: "Password Not Match" };
      });

      setTimeout(() => {
        setErrorMassege((prev) => {
          return { ...prev, PasswordError: null };
        });
      }, 2000);
    }

    // if  phon enumber wrong
    if (!NumberCheck) {
      setErrorMassege((prev) => {
        return {
          ...prev,
          PhoneError: {
            WrongPhone: "Please Enter Valid Number",
          },
        };
      });

      setTimeout(() => {
        setErrorMassege((prev) => {
          return {
            ...prev,
            PhoneError: {
              WrongPhone: null,
            },
          };
        });
      }, 2000);
    }

    if (NumberCheck && passCheck) {
      try {
        const response = await axios.post(
          "http://localhost:3000/profileUpdate",
          userData
        );
        console.log(response.data); // Handle success response
        ShowSuccesmessege(response.data.Succses, response.data.message);
      } catch (error) {
        // Email Error Handle
        if (error.response.data.whatError === "Email") {
          setErrorMassege((prev) => {
            return {
              ...prev,
              emailError: {
                ExistEmail: "Email Alredy Exist",
              },
            };
          });

          setTimeout(() => {
            setErrorMassege((prev) => {
              return {
                ...prev,
                emailError: {
                  ExistEmail: null,
                },
              };
            });
          }, 2000);
        }

        // Phone Number Error Handle

        if (error.response.data.whatError === "phoneNumber") {
          setErrorMassege((prev) => {
            return {
              ...prev,
              PhoneError: {
                WrongPhone: "Phone Numder Already Exist",
              },
            };
          });

          setTimeout(() => {
            setErrorMassege((prev) => {
              return {
                ...prev,
                emailError: {
                  ExistEmail: null,
                },
              };
            });
          }, 2000);
        }

        // console.error("Error creating user:", error.response.data.ErrorCode); // Handle error response
      }
    } else {
      console.log("password not match or not valid number");
    }
  };

  // for handle Success
  function ShowSuccesmessege(succ, msg) {
    setSuccesMessege({
      succses: succ,
      messege: msg,
    });
    setTimeout(() => {
      navigate("/account/loging");
    }, 1000);
  }

  return (
    <div className="h-screen w-full ">
      <Header />
      <div className="w-full relative divHightWithoutHeader   px-2 py-5 ">
        {/* registration seccsesfull messege  */}
        {succesMessege.succses ? (
          <div
            className={`absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[90%] bg-slate-400 rounded-md z-50 flex flex-col gap3 justify-center items-center ${
              succesMessege.succses ? "logingSuccsecAnimate" : null
            }`}
          >
            <p>{succesMessege.messege}</p>
          </div>
        ) : null}
        {/* registration seccsesfull messege  */}

        <div className="w-full h-fit py-5 mt-10 rounded-md bg-[#77aca244]">
          <h3 className="w-full h-8 text-center text-[25px]">Registration</h3>

          <form className="my-2" method="post" onSubmit={HandleSubmit}>
            {/* fullName section  */}
            <div className={`w-full relative h-fit py-1 px-1 flex gap-2  `}>
              <div className="w-[30%] h-10 flex justify-end items-center ">
                <label
                  className="flex items-center justify-center gap-2"
                  htmlFor="fullName"
                >
                  fullName
                  <FaClipboardUser />:{" "}
                </label>
              </div>
              <div className="w-[70%] h-fit ">
                <input
                  onChange={HandleChange}
                  value={userData.fullName}
                  required
                  className="h-10 w-full bg-transparent px-2 rounded-md border border-black"
                  type="text"
                  name="fullName"
                  id="fullName"
                />
              </div>
            </div>
            {/* fullName section  */}

            {/* email section  */}
            <div
              className={`w-full h-fit py-2 px-1 flex gap-2 ${
                ErrorMesssege.emailError.ExistEmail
                  ? "registratoinErrorShow"
                  : null
              }`}
            >
              {/* error div  */}
              {ErrorMesssege.emailError.ExistEmail ? (
                <div
                  className={`absolute top-[-30px] texxt-[0]  left-[32%] w-[60%] text-[15px] rounded-md bg-purple-400 flex justify-center items-center h-8 ${
                    ErrorMesssege.emailError.ExistEmail
                      ? "ErrormssHide"
                      : "ErrormssShow"
                  }`}
                >
                  <div className="h-8 w-full bg-[#d6ccc2] rounded-md relative">
                    <div
                      className={`absolute top-0 left-0 flex justify-center h-8 w-full items-center duration-300`}
                    >
                      <p>{ErrorMesssege.emailError.ExistEmail}</p>
                    </div>
                  </div>
                </div>
              ) : null}
              {/* error div  */}

              <div className="w-[30%] h-10 flex justify-end items-center ">
                <label
                  className="flex items-center justify-center gap-2"
                  htmlFor="email"
                >
                  Email <MdEmail /> :{" "}
                </label>
              </div>
              <div className="w-[70%] h-fit ">
                <input
                  onChange={HandleChange}
                  value={userData.email}
                  required
                  className="h-10 w-full bg-transparent px-2 rounded-md border border-black"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
            </div>
            {/* email section  */}

            {/* PhoneNumber section  */}
            <div
              className={`w-full h-fit py-2 px-1 flex gap-2 ${
                ErrorMesssege.PhoneError.WrongPhone
                  ? "registratoinErrorShow"
                  : null
              } `}
            >
              {/* error div  */}
              {ErrorMesssege.PhoneError.WrongPhone ? (
                <div
                  className={`absolute top-[-30px] texxt-[0]  left-[32%] w-[60%] text-[15px] rounded-md bg-purple-400 flex justify-center items-center h-8 ${
                    ErrorMesssege.PhoneError.WrongPhone
                      ? "ErrormssHide"
                      : "ErrormssShow"
                  }`}
                >
                  <div className="h-8 w-full bg-[#d6ccc2] rounded-md relative">
                    <div
                      className={`absolute top-0 left-0 flex justify-center h-8 w-full items-center duration-300`}
                    >
                      <p>{ErrorMesssege.PhoneError.WrongPhone}</p>
                    </div>
                  </div>
                </div>
              ) : null}
              {/* error div  */}

              <div className="w-[30%] h-10 flex justify-end items-center ">
                <label
                  className="flex items-center justify-center gap-2"
                  htmlFor="PhoneNumber"
                >
                  Number <FaPhoneAlt /> :{" "}
                </label>
              </div>
              <div className="w-[70%] h-fit ">
                <input
                  onChange={HandleChange}
                  value={userData.phoneNumber}
                  required
                  className="h-10 w-full bg-transparent px-2 rounded-md border border-black"
                  type="text"
                  name="phoneNumber"
                  id="PhoneNumber"
                />
              </div>
            </div>
            {/* PhoneNumber section  */}

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
                  onChange={HandleChange}
                  value={userData.password}
                  required
                  className="h-10 w-full bg-transparent px-2 rounded-md border border-black"
                  type={passtpe}
                  name="password"
                  id="password"
                />
              </div>
            </div>
            {/* password section  */}

            {/* ConfirmPassword section  */}
            <div
              className={`w-full h-fit py-2 px-1 flex gap-2 ${
                ErrorMesssege.PasswordError ? "registratoinErrorShow" : null
              } `}
            >
              {/* error div  */}
              {ErrorMesssege.PasswordError ? (
                <div
                  className={`absolute top-[-30px] texxt-[0]  left-[32%] w-[60%] text-[15px] rounded-md bg-purple-400 flex justify-center items-center h-8 ${
                    ErrorMesssege.PasswordError
                      ? "ErrormssHide"
                      : "ErrormssShow"
                  }`}
                >
                  <div className="h-8 w-full bg-[#d6ccc2] rounded-md  relative">
                    <div
                      className={`absolute top-0 left-0 flex justify-center h-8 w-full items-center duration-300`}
                    >
                      <p>{ErrorMesssege.PasswordError}</p>
                    </div>
                  </div>
                </div>
              ) : null}
              {/* error div  */}

              <div className="w-[30%] h-10 flex justify-end items-center ">
                <label
                  className="w-full px-1 flex items-center justify-center gap-2"
                  htmlFor="ConfirmPassword"
                >
                  Confirm <FaKey /> :{" "}
                </label>
              </div>
              <div className="w-[70%] h-fit relative ">
                <button
                  type="button"
                  onClick={CpasswordHandle}
                  className="absolute top-[50%]  translate-y-[-50%] right-2 text-[25px]"
                >
                  {CeyeOpen ? <GoEye /> : <GoEyeClosed />}
                </button>

                <input
                  onChange={HandleConfirmPass}
                  value={confirmPassState}
                  required
                  className="h-10 w-full bg-transparent px-2 rounded-md border border-black"
                  type={Cpasstpe}
                  name="ConfirmPassword"
                  id="ConfirmPassword"
                />
              </div>
            </div>
            {/* password section  */}

            {/* loing button   */}
            <div className="h-fit w-full py-2 flex justify-center items-center mt-2">
              <button
                type="submit"
                className="h-10 w-[75%] rounded-md bg-[#4f772d]"
              >
                Create Account
              </button>
            </div>
            {/* loing button   */}

            <div className="h-fit w-full  flex justify-center items-center mt-2">
              <Link to={"/account/loging"} className="h-10 w-1/2 bg-[#a3b18a] rounded-md flex items-center justify-center">
                <span>Loging</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
