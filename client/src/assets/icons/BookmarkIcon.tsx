import { SvgPropsType } from '@/types';
import React from 'react';

interface BookmarkIconProps extends SvgPropsType {}

const BookmarkIcon = ({ ...attribute }: BookmarkIconProps) => {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" {...attribute}>
      <path
        fill="rgb(156 163 175)"
        d="m9 10.6 4 2.66V3H5v10.26l4-2.66ZM3 17V3c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v14l-6-4-6 4Z"
      ></path>
    </svg>
  );
};

export default BookmarkIcon;
