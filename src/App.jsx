import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Count />
    </div>
  );
}

function Count() {
  const [count, setCount] = useState(0);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  function handleNext() {
    setCount(count + 1);
  }

  function handlePrevious() {
    setCount(count - 1);
    console.log(count);
  }
  return (
    <div>
      <button onClick={handlePrevious}>-</button>
      <span>count:{count}</span>
      <button onClick={handleNext}>+</button>
      <p className="message">
        <span>
          {count === 0
            ? `Today is `
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was`}
        </span>
        {date.toDateString()}
      </p>
    </div>
  );
}
export default App;
