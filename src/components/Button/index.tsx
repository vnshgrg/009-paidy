import { StyleSheet, TouchableOpacity } from "react-native";
import type { TouchableOpacityProps } from "react-native";
import React from "react";

type ButtonProps = TouchableOpacityProps & {
  type?: "default" | "primary" | "secondary";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  style,
  type,
  ...props
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.buttonBase, styles[type || "default"], style]}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonBase: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  default: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  primary: {},
  secondary: {},
});
