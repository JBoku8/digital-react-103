import { useState } from "react";
import PropTypes from "prop-types";

export function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue);

  const addNumber = () => {
    setCount(count + 1);
  };

  const subtractNumber = () => {
    setCount(count - 1);
  };

  const resetNumber = () => {
    setCount(0);
  };

  const handleClick = (value) => {
    setCount(count + value);
  };

  console.log("COUNTER RE RENDER...");

  return (
    <div className="column columns is-flex-direction-column">
      <div className="column">
        <h2 className="is-size-3">Counter - {count}</h2>
      </div>
      <div className="column">
        <button className="button is-primary" onClick={addNumber}>
          +1
        </button>
        <button className="button is-grey mx-2" onClick={resetNumber}>
          0
        </button>
        <button className="button is-warning" onClick={subtractNumber}>
          -1
        </button>
      </div>
      <div className="column">
        <button className="button is-link" onClick={() => handleClick(10)}>
          +10
        </button>
        <button className="button is-link" onClick={() => handleClick(5)}>
          +5
        </button>
        <button className="button is-danger mx-2" onClick={resetNumber}>
          0
        </button>
        <button className="button is-info" onClick={() => handleClick(-5)}>
          -5
        </button>
        <button className="button is-info" onClick={() => handleClick(-10)}>
          -10
        </button>
      </div>
    </div>
  );
}

Counter.defaultProps = {
  initialValue: 0,
};

Counter.propTypes = {
  initialValue: PropTypes.number.isRequired,
};
