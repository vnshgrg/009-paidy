import { authenticate } from "../store";
import { useAppDispatch, useAppSelector } from "./useStore";

export const useAuthenticationState = () => {
  const { isAuthenticated } = useAppSelector((state) => state.authentication);
  const dispatch = useAppDispatch();

  const setUnlocked = (newValue: boolean) => {
    dispatch(authenticate(newValue));
  };
  return { isAuthenticated, setUnlocked };
};
