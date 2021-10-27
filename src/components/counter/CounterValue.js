export const CounterValue = ({ value }) => {
  // console.log('COUNTER VALUE RE RENDER...');

  return (
    <div className="column">
      <h2 className="is-size-3">Counter - {value}</h2>
    </div>
  );
};
