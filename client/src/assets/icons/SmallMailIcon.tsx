import { SvgPropsType } from '@/types';
import React from 'react';

interface SmallMailIcon extends SvgPropsType {}

const SmallMailIcon = (attribute: SmallMailIcon) => {
  return (
    <svg width={8} height={8} viewBox="0 0 14 14" {...attribute}>
        <path d="M7 9 1.52 5.87a1 1 0 0 1 0-1.74L7 1l5.48 3.13a1 1 0 0 1 0 1.74L7 9ZM1 7.14l6 3.6 6-3.6v5.43c0 .8-.71 1.43-1.5 1.43h-9c-.79 0-1.5-.62-1.5-1.43V7.14Z"></path>
    </svg>
  );
};

export default SmallMailIcon;
