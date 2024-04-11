import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function UserIcon() {
  return (
    <Svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
      <Path
        d="M5 21a7 7 0 1114 0M16 7a4 4 0 11-8 0 4 4 0 018 0z"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default UserIcon;
