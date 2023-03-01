import React from "react";

const TextAreaField = ({ value, name, placeholder, onChange, styles }) => (
  <div className="px-5 py-2 w-[50%]">
    <textarea
      name={name}
      placeholder={placeholder}
      rows={4}
      cols={40}
      onChange={onChange}
      className={styles}
      value={value}
    />
  </div>
);

export default TextAreaField;
