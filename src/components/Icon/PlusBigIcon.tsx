import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const PlusBigIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </Svg>
  );
};
