import { authenticationReducer, authenticate } from "./authenticationSlice";

describe("authenticationSlice", () => {
  describe("reducer", () => {
    const initialState = { isAuthenticated: false };
    it("should handle the login/unlock", () => {
      const newState = authenticationReducer(initialState, authenticate(true));

      // Ensure that the state is updated correctly after the authenticate action.
      expect(newState.isAuthenticated).toEqual(true);
    });
    it("should handle the logout/lock", () => {
      const newState = authenticationReducer(initialState, authenticate(false));

      // Ensure that the state is updated correctly after the authenticate action.
      expect(newState.isAuthenticated).toEqual(false);
    });
  });

  describe("actions", () => {
    it("should create an authenticate action with the correct payload", () => {
      const action = authenticate(true);

      // Ensure that the action type is correct.
      expect(action.type).toEqual("authentication/authenticate");

      // Ensure that the payload is set correctly.
      expect(action.payload).toEqual(true);
    });
  });
});
