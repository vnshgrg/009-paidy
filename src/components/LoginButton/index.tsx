import { Button, View } from "react-native";
import { useLocalAuthentication } from "../../hooks";

type LoginButtonProps = {
  onSuccess: () => void;
};

export const LoginButton = ({ onSuccess }: LoginButtonProps) => {
  const { isBiometricsSaved, authenticate, openAppSettings } =
    useLocalAuthentication();

  const handleAuthentication = () => {
    authenticate(onSuccess);
  };

  return (
    <View>
      {isBiometricsSaved ? (
        <Button title="Unlock" onPress={handleAuthentication} />
      ) : (
        <Button title="Configure" onPress={openAppSettings} />
      )}
    </View>
  );
};
