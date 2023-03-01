import React from "react";
import Select from "react-select";

const MultiSelect = ({ options, onChange, styles, value, name }) => (
  <div className="px-5 py-2 w-[50%]">
    <Select
      isMulti
      name={name}
      value={value}
      options={options}
      styles={styles}
      className="basic-multi-select"
      classNamePrefix="select"
      onChange={onChange}
      placeholder={name}
    />
  </div>
);

export default MultiSelect;
