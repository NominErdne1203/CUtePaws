import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function BackIcon() {
  return (
    <Svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" width={24} height={24}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
      />
    </Svg>
  );
}

export default BackIcon;
