import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const PlusIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </Svg>
  );
};
