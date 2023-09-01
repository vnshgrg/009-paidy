import { useEffect, useState } from "react";
import { useAppState } from "./useAppState";
import {
  authenticateAsync,
  hasHardwareAsync,
  isEnrolledAsync,
} from "expo-local-authentication";
import { Linking, Platform, NativeModules, Alert } from "react-native";

const { RNAndroidOpenSettings } = NativeModules;

export const useLocalAuthentication = () => {
  const [loading, setLoading] = useState(true);
  const [isCompatible, setIsCompatible] = useState<boolean>();
  const [isBiometricsSaved, setIsBiometricsSaved] = useState<boolean>();

  const { currentAppState } = useAppState();

  useEffect(() => {
    checkCompatibility();
    checkBiometricsSettings();
  }, [currentAppState]);

  const checkCompatibility = async () => {
    const compatible = await hasHardwareAsync();
    setIsCompatible(compatible);
    setLoading(false);
  };

  const checkBiometricsSettings = async () => {
    const savedBiometrics = await isEnrolledAsync();
    setIsBiometricsSaved(savedBiometrics);
  };

  const openAppSettings = () => {
    if (Platform.OS === "ios") {
      Linking.openURL("App-Prefs:root=TOUCHID_PASSCODE");
    } else {
      RNAndroidOpenSettings.appDetailsSettings();
    }
  };

  const authenticate = async (onSuccess: any) => {
    try {
      const result = await authenticateAsync({
        cancelLabel: "Cancel",
        fallbackLabel: "Use code instead",
        promptMessage: "Unlock device before you can use the app.",
      });
      if (result.success) {
        onSuccess();
      } else if (result.error !== "user_cancel") {
        throw new Error("Could not authenticate");
      }
    } catch (err) {
      const error = err as Error;
      Alert.alert("Authentication Error!", error.message);
    }
  };

  return {
    loading,
    isCompatible,
    isBiometricsSaved,
    openAppSettings,
    authenticate,
  };
};
