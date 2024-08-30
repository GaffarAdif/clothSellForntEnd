import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import "../GlobalCss/global.css";
import axios from "axios";
import { useRef } from "react";
import LoaderUpload from "./Loader/LoaderUpload";
import { useSelector } from "react-redux";

export const ProfileUploadCompo = ({
  changeUpload,
  porfileState,
  showUploadBtn,
}) => {
  const serverUrl = useSelector((state) => state.SerVerUrlSave);

  const myElementRef = useRef(null);
  const [Loader, setLoader] = useState(false);

  const userDBnumber = localStorage.getItem("userNumber") || null;

  const userEmail = "gaffar@gmail.com";

  // profileUpolad sectoin here

  const HandleProfilePic = (e) => {
    e.preventDefault();

    setLoader(true);
    let file;
    if (myElementRef.current) {
      const fileInput = myElementRef.current;
      file = fileInput.files[0];
      if (file) {
        console.log("file is selected", file);
      } else [console.log("there is problem in file")];
    }
    // Create a new FormData object
    const formData = new FormData();
    formData.append("email", userEmail);
    formData.append("profilePic", file);
    axios
      .post(`${serverUrl}profileUpdate/${userDBnumber}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data.porfileUrl);
        localStorage.setItem("profile", response.data.porfileUrl);

        changeUpload();
        showUploadBtn(false);

        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className={`absolute z-50    ${
        porfileState ? "uploead-section-success" : null
      }  top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] p-2 bg-blue-200 w-[90%]  rounded-md flex justify-center items-start`}
    >
      <form
        onSubmit={HandleProfilePic}
        className="h-fit w-full py-3 flex items-center flex-col gap-4 overflow-hidden"
      >
        {/* input sectoin  */}

        <div className="h-[100px] relative  w-[100px] bg-blue-300 rounded-full flex justify-center items-center ">
          {Loader ? <LoaderUpload /> : null}

          <input
            ref={myElementRef}
            type="file"
            id="profileInput"
            className="hidden"
          />
          <label htmlFor="profileInput" className="">
            <FaCloudUploadAlt className="w-[80px] h-[80px]" />
          </label>
        </div>

        {/* Button section */}
        <div className="w-full h-10  flex justify-center items-center gap-3 bg-indigo-300">
          <button type="submit" className="h-10 w-1/2 bg-purple-400 rounded-md">
            {" "}
            Save
          </button>
          <button
            type="reset"
            onClick={() => changeUpload()}
            className="h-10 w-1/2 bg-red-200 rounded-md"
          >
            {" "}
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
