import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TEST_IDS } from '../../constants/testids';

import { EmailInput } from './EmailInput';

describe('EmailInput', () => {
  it('should render correctly with correct props', () => {
    const mockedName = 'mocked-name';
    const Component = render(<EmailInput name={mockedName} />);

    expect(
      Component.getByTestId(TEST_IDS.emailInput.inputElement).getAttribute(
        'name'
      )
    ).toBe(mockedName);
  });

  it('should render error state', () => {
    const mockedName = 'mocked-name';
    const Component = render(<EmailInput name={mockedName} />);
    const inputElement = Component.getByTestId(
      TEST_IDS.emailInput.inputElement
    );
    userEvent.type(inputElement, 'wrong');

    expect(
      Component.getByTestId(TEST_IDS.emailInput.hasError)
    ).toBeInTheDocument();
  });

  it('should render success state', () => {
    const mockedName = 'mocked-name';
    const Component = render(<EmailInput name={mockedName} />);
    const inputElement = Component.getByTestId(
      TEST_IDS.emailInput.inputElement
    );
    userEvent.type(inputElement, 'success@email.com');

    expect(
      Component.getByTestId(TEST_IDS.emailInput.success)
    ).toBeInTheDocument();
  });
});

describe('EmailInput snapshots', () => {
  test('snap 1', () => {
    const mockedName = 'mocked-name';
    const Component = render(<EmailInput name={mockedName} />);
    expect(Component).toMatchSnapshot();
  });

  test('snap 2', () => {
    const mockedName = 'mocked-name';
    const Component = render(<EmailInput name={mockedName} />);
    const inputElement = Component.getByTestId(
      TEST_IDS.emailInput.inputElement
    );
    userEvent.type(inputElement, 'wrong');

    expect(Component).toMatchSnapshot();
  });

  test('snap 3', () => {
    const mockedName = 'mocked-name';
    const Component = render(<EmailInput name={mockedName} />);
    const inputElement = Component.getByTestId(
      TEST_IDS.emailInput.inputElement
    );
    userEvent.type(inputElement, 'success@email.com');
    expect(Component).toMatchSnapshot();
  });
});
