import { useAuthenticationState } from "./useAuthenticationState";
import { useLocalAuthentication } from "./useLocalAuthentication";

export const useAuth = () => {
  const { loading, isCompatible } = useLocalAuthentication();
  const { unlock } = useAuthenticationState();

  const handleSuccess = () => {
    unlock();
  };

  return { loading, isCompatible, handleSuccess };
};
