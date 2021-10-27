import { memo } from 'react';

const CounterAction = ({ label, onClick }) => {
  console.log('CounterAction Render...');
  return (
    <button className="button is-link" onClick={onClick}>
      {label}
    </button>
  );
};

export default memo(CounterAction);
