import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
interface ISvgIcon extends SvgProps {}

const RightArrowIcon = (props: ISvgIcon) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M4.66543 14.01C4.99209 14.3367 5.51876 14.3367 5.84543 14.01L11.3854 8.47C11.6454 8.21 11.6454 7.79 11.3854 7.52999L5.84543 1.99C5.51876 1.66333 4.99209 1.66333 4.66543 1.99C4.33876 2.31666 4.33876 2.84333 4.66543 3.17L9.49209 8.00333L4.65876 12.8367C4.33876 13.1567 4.33876 13.69 4.66543 14.01Z"
      fill="white"
    />
  </Svg>
);
export default RightArrowIcon;
