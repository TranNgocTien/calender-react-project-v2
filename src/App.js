import { useState } from "react";
export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  const handleReset = function () {
    setCount(0);
    setStep(0);
  };
  const d = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const day = weekday[d.getDay()];
  const date = d.getDate();
  const monthArr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const month = monthArr[d.getMonth()];

  const year = d.getFullYear();
  function handleStep(value) {
    setStep(Number(value));
  }

  return (
    <div>
      <div>
        <div>
          <input
            type="range"
            value={step}
            onInput={(e) => handleStep(e.target.value)}
            min="0"
            max="10"
          />
          <span>Step:{step}</span>
        </div>
        <button onClick={() => setCount((c) => c + step)}>+</button>
        <input
          type="number"
          value={count}
          placeholder={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button onClick={() => setCount((c) => c - step)}>-</button>

        <p>
          {Number(count) > 0 ? `${Number(count)} days from` : ""} today is {day}{" "}
          {month} {date} {year}
        </p>
      </div>
      <button
        style={
          step === 0 && count === 0 ? { display: "none" } : { display: "block" }
        }
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
}
