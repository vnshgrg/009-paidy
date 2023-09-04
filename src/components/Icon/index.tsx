import React from "react";
import { SvgProps } from "react-native-svg";
import { TrashIcon } from "./TrashIcon";
import { MinusIcon } from "./MinusIcon";
import { CheckIcon } from "./CheckIcon";
import { PlusIcon } from "./PlusIcon";
import { LockIcon } from "./LockIcon";
import { UnlockIcon } from "./UnlockIcon";
import { ListBulletIcon } from "./ListBulletIcon";
import { PlusBigIcon } from "./PlusBigIcon";

const values = {
  sizes: {
    sm: 16,
    md: 20,
    base: 24,
    lg: 32,
    xl: 48,
  },
  colors: {
    default: "#0288D1",
    destructive: "#F4511E",
    cancel: "#B0BEC5",
    positive: "#4F7942",
  },
};

export type Icon =
  | "trash"
  | "plus"
  | "plus-big"
  | "minus"
  | "check"
  | "lock"
  | "unlock"
  | "list-bullet";
export type IconType = "default" | "destructive" | "cancel" | "positive";
export type IconSize = "sm" | "md" | "base" | "lg" | "xl";

export type IconProps = SvgProps & {
  icon: Icon;
  type?: IconType;
  size?: IconSize;
};

export const Icon: React.FC<IconProps> = ({
  icon,
  type,
  size,
  style,
  ...props
}) => {
  const iconProps = {
    strokeWidth: 2,
    stroke: values.colors[type || "default"],
    width: values.sizes[size || "base"],
    height: values.sizes[size || "base"],
  };

  if (icon === "trash") {
    return <TrashIcon {...iconProps} {...props} />;
  } else if (icon === "minus") {
    return <MinusIcon {...iconProps} {...props} />;
  } else if (icon === "check") {
    return <CheckIcon {...iconProps} {...props} />;
  } else if (icon === "plus") {
    return <PlusIcon {...iconProps} {...props} />;
  } else if (icon === "plus-big") {
    return <PlusBigIcon {...iconProps} {...props} />;
  } else if (icon === "lock") {
    return <LockIcon {...iconProps} {...props} />;
  } else if (icon === "unlock") {
    return <UnlockIcon {...iconProps} {...props} />;
  } else if (icon === "list-bullet") {
    return <ListBulletIcon {...iconProps} {...props} />;
  }
  return null;
};
