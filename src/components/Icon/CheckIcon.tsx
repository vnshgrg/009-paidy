import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CheckIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </Svg>
  );
};
