import { useAuthenticationState } from "./useAuthenticationState";
import { useLocalAuthentication } from "./useLocalAuthentication";

export const useAuth = () => {
  const { loading, isCompatible } = useLocalAuthentication();
  const { setUnlocked } = useAuthenticationState();

  const handleSuccess = () => {
    setUnlocked(true);
  };

  return { loading, isCompatible, handleSuccess };
};
