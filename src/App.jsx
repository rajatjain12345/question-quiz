import React, { useEffect, useState } from "react";
import { data } from "./data";

function App() {
  const [questionumber, setQuestioNumber] = useState(0);
  const [selectoption, setSelectOption] = useState("");
  const [answer, setAnswer] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuestioNumber(questionumber + 1);
      console.log(questionumber);
    }, 3000);
    return () => clearInterval(interval);
  }, [questionumber]);

  const handleSelect = (current) => {
    setSelectOption(current);
  };

  return (
    <>
      <div className="">
        <div className="">
          <h3 className="">{data[questionumber].question}</h3>
        </div>
        <div className="">
          {data[questionumber].options.map((current, index) => {
            return (
              <>
                <label key={index}>
                  <input
                    type="radio"
                    value={current}
                    name="demo"
                    onClick={handleSelect(current)}
                  />
                  <span>{current}</span>
                </label>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
