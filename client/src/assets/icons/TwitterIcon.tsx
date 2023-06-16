import { SvgPropsType } from '@/types';
import React from 'react';

interface TwitterIcon extends SvgPropsType {}

const TwitterIcon = (attribute: TwitterIcon) => {
    const blue = "#2AA3EF"
    const gray = "#9ca3af"
  return (
    <svg aria-hidden="true" width={18} height={18} viewBox="0 0 18 18" {...attribute}>
        <path fill={gray} d="M17 4.04c-.59.26-1.22.44-1.88.52a3.3 3.3 0 0 0 1.44-1.82c-.64.37-1.34.64-2.09.79a3.28 3.28 0 0 0-5.6 2.99A9.3 9.3 0 0 1 2.12 3.1a3.28 3.28 0 0 0 1.02 4.38 3.28 3.28 0 0 1-1.49-.4v.03a3.29 3.29 0 0 0 2.64 3.22 3.34 3.34 0 0 1-1.48.06 3.29 3.29 0 0 0 3.07 2.28 6.58 6.58 0 0 1-4.85 1.36 9.33 9.33 0 0 0 5.04 1.47c6.04 0 9.34-5 9.34-9.33v-.42a6.63 6.63 0 0 0 1.63-1.7L17 4.04Z"></path>
    </svg>
  );
};

export default TwitterIcon;
