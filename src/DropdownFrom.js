import React from "react";
import Select from "react-select";
import { useState } from "react";
import "./DropdownFrom.css"

const DropdownForm = () => {
  const [selectedValue, setSelectedValue] = useState();

  const handleChange = (e) => {
    setSelectedValue(e);
  };

  const optionList = [
    { value: "red", label: "red" },
    { value: "blue", label: "blue" },
    { value: "green", label: "green" },
    { value: "yellow", label: "yellow" },
    { value: "white", label: "white" },
    { value: "black", label: "black" },
  ];
  return (
    <>
      <div className="heading">Select you favorite color</div>
      <Select
        className="select"
        options={optionList}
        value={selectedValue}
        placeholder="Red..."
        onChange={handleChange}
        isSearchable={true}
        isMulti
      ></Select>
    </>
  );
};

export default DropdownForm;
