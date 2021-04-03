import React from "react";

const Options = ({ element, addOption, deleteOption, updateOption }) => {
  return (
    <div className="col-md-12 my-3 input-group">
      <input
        className="form-control"
        placeholder="options"
        value={element.value}
        onChange={(e) => updateOption(element.uid, e.target.value)}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={addOption}
        >
          +
        </button>
        <button
          className="btn btn-outline-secondary "
          type="button"
          onClick={() => deleteOption(element.uid)}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Options;
