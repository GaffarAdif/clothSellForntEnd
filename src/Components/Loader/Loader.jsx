import React from "react";
import "../../GlobalCss/global.css"; // Ensure you create this CSS file

const Loader = () => {
  return (
    <div className="fixed h-[80px] w-[80px] z-50 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
      <div className="loader">
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Loader;
