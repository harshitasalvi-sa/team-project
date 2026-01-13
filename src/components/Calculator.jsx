import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [value, setValue] = useState("");

  function handleClick(val) {
    setValue(value + val);
  }

  function handleClear() {
    setValue("");
  }

  function handleDelete() {
    setValue(value.slice(0, -1));
  }

  function handleResult() {
    try {
      setValue(eval(value).toString());
    } catch {
      setValue("Error");
    }
  }

  return (
    <div className="calc-container">
      <div className="calc-box">
        <input type="text" value={value} readOnly />

        <div className="buttons">
          <button onClick={handleClear} className="operator">C</button>
          <button onClick={handleDelete} className="operator">DEL</button>
          <button onClick={() => handleClick("/")} className="operator">÷</button>
          <button onClick={() => handleClick("*")} className="operator">×</button>

          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("-")} className="operator">−</button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("+")} className="operator">+</button>

          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={handleResult} className="equal">=</button>

          <button onClick={() => handleClick("0")} className="zero">0</button>
          <button onClick={() => handleClick(".")}>.</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
