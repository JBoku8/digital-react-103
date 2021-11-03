import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TEST_IDS } from '../../constants/testids';
import { Button } from './Button';

const mockedProps = {
  className: 'mocked-className',
  label: 'mocked-label',
  onClick: jest.fn(),
};

describe('Button test', () => {
  describe('Button events', () => {
    it('should call onClick function', () => {
      const Component = render(<Button {...mockedProps} />);

      userEvent.click(Component.getByTestId(TEST_IDS.button));

      expect(mockedProps.onClick).toBeCalledTimes(1);
    });
  });

  describe('Button snaps', () => {
    it('should render with correct props', () => {
      const Component = render(<Button {...mockedProps} />);
      expect(Component).toMatchSnapshot();
    });
  });
});
