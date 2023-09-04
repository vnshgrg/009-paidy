import React from "react";
import { render } from "@testing-library/react-native";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { LoginButton } from "./index";

jest.mock("../../hooks/useLocalAuthentication", () => ({
  useLocalAuthentication: () => ({
    isBiometricsSaved: true,
    authenticate: jest.fn(),
    openAppSettings: jest.fn(),
  }),
}));

describe("LoginButton with isBiometricsSaved", () => {
  const mockStore = configureStore([]);

  it("renders correctly when biometrics are saved", () => {
    const store = mockStore({});
    const { getByText } = render(
      <Provider store={store}>
        <LoginButton onSuccess={() => {}} />
      </Provider>
    );

    const unlockButton = getByText("Unlock");
    expect(unlockButton).toBeTruthy();
  });
});
