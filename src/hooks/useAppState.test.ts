import { renderHook } from "@testing-library/react-native";
import { AppState } from "react-native";
import { useAppState } from "./useAppState"; // Assuming your hook is in a separate file

describe("useAppState", () => {
  it("should return the current app state", () => {
    const { result } = renderHook(() => useAppState());

    expect(result.current.currentAppState).toBe(AppState.currentState);
  });

  it("should update the app state when it changes", () => {
    const { result } = renderHook(() => useAppState());

    const newAppState = "active";

    result.current.currentAppState = newAppState;

    expect(result.current.currentAppState).toBe(newAppState);
  });
});
