import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 font-poppins 
    font-medium text-[18px] outline-none 
    text-primary bg-blue-gradient ${styles} rounded-[10px]`}
    >
      Click here
    </button>
  );
};

export default Button;
