import React from "react";
import { useHistory } from "react-router";

const Publish = ({ questions }) => {
  const history = useHistory();
  return (
    <div className="mt-5 text-left">
      {questions.length > 0 ? (
        <>
          {questions.map((e) => {
            return (
              <div>
                <h5>{e.question}</h5>
                {e.type === 1
                  ? e.option.map((x) => {
                      return (
                        <div className="form-check" key={x.uid}>
                          <label className="form-check-label">
                            <input type="checkbox" class="form-check-input" />
                            {x.value}
                          </label>
                        </div>
                      );
                    })
                  : e.option.map((x) => {
                      return (
                        <div className="form-check-inline" key={e.uid}>
                          <label className="form-check-label">
                            <input
                              type="radio"
                              className="form-check-input"
                              name="random"
                            />
                            {x.value}
                          </label>
                        </div>
                      );
                    })}
              </div>
            );
          })}
          <button
            className="btn btn-danger float-right mt-1"
            onClick={() => {
              history.push("/");
            }}
          >
            Confirm
          </button>
        </>
      ) : (
        <h2 className="text-center">"Questions have not been added yet"</h2>
      )}
    </div>
  );
};

export default Publish;
