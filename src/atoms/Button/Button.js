import { TEST_IDS } from '../../constants/testids';

export const Button = ({ className, onClick, label }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      data-testid={TEST_IDS.button}
    >
      {label}
    </button>
  );
};
