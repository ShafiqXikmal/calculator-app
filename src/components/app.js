const React = require("react");
const { useState } = require("react");
const Calculator = require("./calculator");
const Style = require("./style.css");

function App() {
  const [result, setResult] = useState("");

  function handleClick(event) {
    setResult(result.concat(event.target.name));
  }

  function clearCal() {
    setResult("");
  }

  function clearBack() {
    setResult(result.slice(0));
  }

  function calResult() {
    setResult(eval(result).toString());
  }

  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>

        <div className="keypad">
          <button className="highlight" onClick={clearCal} id="clearCal">
            Clear
          </button>
          <button className="highlight" onClick={clearBack} id="clearBack">
            C
          </button>
          <button name="/" onClick={handleClick}>
            &divide;
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button name="x" onClick={handleClick}>
            &times;
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button name="-" onClick={handleClick}>
            &ndash;
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button name="+" onClick={handleClick}>
            +
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button name="." onClick={handleClick}>
            .
          </button>
          <button className="highlight" onClick={calResult} id="clickResult">
            =
          </button>
        </div>
      </div>
    </>
  );
}

module.exports = App;
