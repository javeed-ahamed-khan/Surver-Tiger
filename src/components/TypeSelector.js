import React from "react";

const TypeSelector = ({ qType, typeChange }) => {
  return (
    <div className="col-md-12 my-3">
      <select
        className="custom-select"
        value={qType}
        onChange={(e) => typeChange(parseInt(e.target.value))}
      >
        <option value="0">Choose Qusetion Type</option>
        <option value="1">Multi Select</option>
        <option value="2">Single Select</option>
      </select>
    </div>
  );
};

export default TypeSelector;
