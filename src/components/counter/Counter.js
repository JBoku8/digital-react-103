import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { CounterValue } from './CounterValue';
import CounterAction from './CounterAction';
import CounterTitle from './CounterTitle';
import { useLocalStorage } from '../../hooks';
import { Button } from '../../atoms/Button';

import styles from './Counter.module.css';

export function Counter({ initialValue }) {
  const [count, setCount] = useLocalStorage('counter', initialValue);

  const resetNumber = useCallback(() => {
    setCount(0);
  }, [setCount]);

  const handleClick = value => {
    setCount(count => count + value);
  };

  console.log('COUNTER RE RENDER...');

  return (
    <div className="column columns is-flex-direction-column">
      <CounterTitle demo="string" number={78} />
      <CounterValue value={count} />

      <div className="column">
        <CounterAction label="RESET" onClick={resetNumber} />

        <Button
          label="+10"
          className={`button is-link ml-1 ${styles['custom-style']}`}
          onClick={() => handleClick(10)}
        />

        {/* <button className="button is-link" onClick={() => handleClick(5)}>
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
        </button> */}
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
