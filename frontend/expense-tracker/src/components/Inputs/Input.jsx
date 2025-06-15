import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = ({ value, onChange, placeholder, label, type }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-4">
      {label && <label className="text-[13px] text-slate-800 block mb-1">{label}</label>}

      <div className="relative">
        <input
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          className="input-box pr-10 bg-slate-100"
          value={value}
          onChange={onChange}
        />

        {type === 'password' && (
          <span
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500 cursor-pointer"
            onClick={toggleShowPassword}
          >
            {showPassword ? <FaRegEye size={20} /> : <FaRegEyeSlash size={20} />}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
