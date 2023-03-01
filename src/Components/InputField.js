import React from "react";

const InputField = ({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
  styles,
}) => (
  <div className="px-5 py-5 w-[50%]">
    {label && (
      <p htmlFor="" className="text-sm text-left px-2">
        {label}
      </p>
    )}
    <input
      type={type}
      value={value}
      name={name}
      className={styles}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

export default InputField;
