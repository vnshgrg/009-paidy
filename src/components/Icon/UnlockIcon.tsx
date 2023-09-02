import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const UnlockIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
      />
    </Svg>
  );
};
