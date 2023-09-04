import { authenticate } from "../store";
import { useAppDispatch, useAppSelector } from "./useStore";

export const useAuthenticationState = () => {
  const { isAuthenticated } = useAppSelector((state) => state.authentication);
  const dispatch = useAppDispatch();

  const lock = () => {
    dispatch(authenticate(false));
  };

  const unlock = () => {
    dispatch(authenticate(true));
  };

  return { isAuthenticated, lock, unlock };
};
