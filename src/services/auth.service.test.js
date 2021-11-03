import { loginAsync } from './auth.service';

const mockedLog = jest.fn();
const mockedError = new Error('Mocked Error');
const mockedResult = {
  token: 'token',
};
global.console.log = mockedLog;

describe('Auth.Service', () => {
  it('should return token when ok', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockedResult),
      })
    );

    const response = await loginAsync({});
    expect(response).toStrictEqual(mockedResult);
  });
  it('should log the error when failed', async () => {
    global.fetch = jest.fn(() => Promise.reject(mockedError));
    const response = await loginAsync({});

    expect(response).toBe(undefined);
    expect(mockedLog).toBeCalledTimes(1);
    expect(mockedLog).toBeCalledWith(mockedError);
  });
});
