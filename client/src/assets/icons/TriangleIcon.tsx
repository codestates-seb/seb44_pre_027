import { SvgPropsType } from '@/types';
import React from 'react';

interface TriangleIconProps extends SvgPropsType {
  direction: 'up' | 'down';
}

const TriangleIcon = ({ direction, ...attribute }: TriangleIconProps) => {
  switch (direction) {
    case 'up':
      return (
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" {...attribute}>
          <path d="M1 12h16L9 4l-8 8Z"></path>
        </svg>
      );
    case 'down':
      return (
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" {...attribute}>
          <path d="M1 6h16l-8 8-8-8Z"></path>
        </svg>
      );
  }
};

export default TriangleIcon;
