import React from "react";

const Qusetion = ({ qText, setQtext }) => {
  return (
    <div className="col-md-12">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">
          ?
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Question"
          value={qText}
          onChange={(e) => setQtext(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Qusetion;
