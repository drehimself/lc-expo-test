import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function IconSettings(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      className="prefix__h-6 prefix__w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
      />
    </Svg>
  );
}

export default IconSettings;
