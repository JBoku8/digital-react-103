import { memo } from 'react';

const CounterTitle = () => {
  console.log('COUNTER TITLE RE RENDER...');
  return (
    <div className="column">
      <h2 className="is-size-2">Play Counter</h2>
    </div>
  );
};

export default memo(CounterTitle);
