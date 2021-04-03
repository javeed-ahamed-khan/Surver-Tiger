import React, { useState } from "react";
import { useHistory } from "react-router";
import Options from "./Options";
import Qusetion from "./Question";
import TypeSelector from "./TypeSelector";

const CreateSurvey = ({ questions, setQuestions }) => {
  const getRandom = () => {
    return Math.floor(Math.random() * 10000 + 1);
  };
  const history = useHistory();
  const [qType, setQtype] = useState(0);
  const [qText, setQtext] = useState("");
  const [opt, setOpt] = useState([
    { uid: getRandom(), value: "" },
    { uid: getRandom(), value: "" },
  ]);

  const typeChange = (type) => {
    setQtype(type);
    setOpt([
      { uid: getRandom(), value: "" },
      { uid: getRandom(), value: "" },
    ]);
  };

  const addOption = () => {
    if (qType === 1) {
      let newObj = {
        uid: getRandom(),
        value: "",
      };
      let newOpt = [...opt, newObj];
      setOpt(newOpt);
    }
  };

  const deleteOption = (id) => {
    if (opt.length === 2) {
      alert("A Question should have atleast two options.");
    } else {
      let newOpt = [...opt];
      let temp = newOpt.filter((e) => e.uid !== id);
      setOpt(temp);
    }
  };

  const updateOption = (id, text) => {
    let targetIndex = opt.findIndex((e) => e.uid === id);
    let newOpt = [...opt];
    newOpt[targetIndex].value = text;
    setOpt(newOpt);
  };
  const isOptionFieldEmpty = () => {
    for (let i = 0; i < opt.length; i++) {
      if (opt[i].value.trim() === "") {
        return true;
      }
    }
    return false;
  };

  const addQuestion = () => {
    if (qText.trim() === "") {
      alert("You have not provided any Question!");
    } else if (isOptionFieldEmpty()) {
      alert("Fill all the options or delete extra input boxes");
    } else {
      let newObj = {
        type: qType,
        question: qText,
        option: opt,
      };
      let newQuestions = [...questions, newObj];
      setQuestions(newQuestions);
      setQtext("");
      setQtype(0);
      setOpt([
        { uid: getRandom(), value: "" },
        { uid: getRandom(), value: "" },
      ]);
    }
  };
  const publish = () => {
    history.push("/publish");
  };

  return (
    <>
      <TypeSelector qType={qType} typeChange={typeChange} />
      {qType !== 0 ? (
        <>
          <Qusetion qText={qText} setQtext={setQtext} />
          {opt.map((ele, index) => {
            return (
              <Options
                element={ele}
                key={index}
                addOption={addOption}
                deleteOption={deleteOption}
                updateOption={updateOption}
              />
            );
          })}
          {qType === 2 || (qType === 1 && opt.length >= 4) ? (
            <>
              <button className="btn btn-danger m-1" onClick={addQuestion}>
                Add Question
              </button>
              <button className="btn btn-danger m-1" onClick={publish}>
                Publish
              </button>
            </>
          ) : null}
        </>
      ) : null}
    </>
  );
};

export default CreateSurvey;
