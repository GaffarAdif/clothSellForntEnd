import React, { useEffect, useState } from "react";
import { CiDeliveryTruck, CiLocationOn } from "react-icons/ci";
import { FaUserPen } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import { MdMenuBook } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { SiGithubsponsors } from "react-icons/si";
import { ImFacebook2 } from "react-icons/im";
import { FaAddressCard } from "react-icons/fa";
import { ProfileUploadCompo } from "./ProfileUploadCompo";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const AccountManu = () => {
  const [porfileUpload, setProfileUpload] = useState(false);

  const [profileUrlclint, setProfileUrl] = useState(
    "https://res.cloudinary.com/dj6ekrbq6/image/upload/v1724925457/aknvoquczokzncw4omay.jpg"
  );

  const userProfileDatabseLink = localStorage.getItem("profile") || null;

  const navigate = useNavigate();
  const [uploadButtonShow, setUploadButtonShow] = useState(true);

  const HandleProfilePic = () => {
    setProfileUpload((prev) => !prev);
  };

  // logout hande
  const logoutHandle = () => {
    localStorage.clear();

    setTimeout(() => {
      navigate("/");
    }, 300);
  };

  useEffect(() => {
    if (userProfileDatabseLink) {
      setProfileUrl(userProfileDatabseLink);
      if (true) {
        setUploadButtonShow(false);
      }
    }
  }, [uploadButtonShow]);

  // logout hande

  return (
    <div className="w-full relative z-10 flex items-start justify-center ">
      {/* here is Profile pic upload section  */}

      {porfileUpload ? (
        <ProfileUploadCompo
          porfileState={porfileUpload}
          changeUpload={HandleProfilePic}
          showUploadBtn={setUploadButtonShow}
        />
      ) : null}

      {/* here is Profile pic upload section  */}

      {/* './Images/Importat_Image/defultUserImage.jpg' */}

      <div className="w-full  lg:w-[70%] mt-10">
        {/* profile picture sectoin  */}
        <div
          style={{ backgroundImage: `url(${profileUrlclint})` }}
          className={`h-[150px] z-10 relative w-[150px] rounded-full mx-auto bg-cover bg-center    flex justify-center items-center`}
        >
          {uploadButtonShow ? (
            <div
              onClick={HandleProfilePic}
              className="w-[150px] h-[150px] rounded-full  backdrop-blur-sm flex items-center justify-center"
            >
              <button className="w-[80%] h-10 rounded-md bg-[#78bbe781]">
                Upload
              </button>
            </div>
          ) : null}
        </div>

        {/* Name section  */}
        <div className="w-full h-10">
          <h2 className="text-center text-[25px]">Gaffar Adif</h2>
        </div>
        {/* Functionality section  */}
        <div className="w-full grid grid-cols-4 gap-1 lg:gap-3 py-3 ">
          <button className="bg-[#94d2bd] h-fit w-full py-2 flex flex-col justify-center items-center rounded-md">
            <FaUserPen className="w-8 h-8" />
            <span className="text-[12px]">Personal Info</span>
          </button>
          <button className="bg-[#94d2bd] h-fit w-full py-2  flex flex-col justify-center items-center rounded-md">
            <FaAddressCard className="w-8 h-8" />
            <span className="text-[12px]">My Address</span>
          </button>

          <button className="bg-[#94d2bd] h-fit w-full py-2 flex flex-col justify-center items-center rounded-md">
            <SiGithubsponsors className="w-8 h-8" />
            <span className="text-[12px]">Wish List</span>
          </button>

          <button className="bg-[#94d2bd] h-fit w-full py-2 flex flex-col justify-center items-center rounded-md">
            <CiDeliveryTruck className="w-8 h-8" />
            <span className="text-[12px]">My Order</span>
          </button>

          <button className="bg-[#94d2bd] h-fit w-full py-2 flex flex-col justify-center items-center rounded-md">
            <CiLocationOn className="w-8 h-8" />
            <span className="text-[12px]">Track Order</span>
          </button>

          <button className="bg-[#94d2bd] h-fit w-full py-2  flex flex-col justify-center items-center rounded-md">
            <MdMenuBook className="w-8 h-8" />
            <span className="text-[12px]">Policies</span>
          </button>
          <button className="bg-[#94d2bd] h-fit w-full py-2  flex flex-col justify-center items-center rounded-md">
            <MdOutlineMessage className="w-8 h-8" />
            <span className="text-[12px]">Notification</span>
          </button>
          <button className="bg-[#94d2bd] h-fit w-full py-2  flex flex-col justify-center items-center rounded-md">
            <ImFacebook2 className="w-8 h-8" />
            <span className="text-[12px]">Page</span>
          </button>
        </div>

        {/* logout section  */}
        <div
          onClick={logoutHandle}
          className="w-full h-fit grid place-content-center mt-5"
        >
          <button className="h-10 w-[170px] bg-gray-500 rounded-md flex justify-center items-center">
            <div className="flex gap-1 justify-center items-center text-[20px]">
              <span>Logout</span>
              <CiLogout />
            </div>
          </button>
        </div>
      </div>
      {/* Avatar Section  */}
    </div>
  );
};
