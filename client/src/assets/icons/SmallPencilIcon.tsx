import { SvgPropsType } from '@/types';
import React from 'react';

interface SmallPencilIconProps extends SvgPropsType {}

const SmallPencilIcon = ({ ...attributes }: SmallPencilIconProps) => {
  return (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" {...attributes}>
      <path d="m11.1 1.71 1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0ZM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88Z"></path>
    </svg>
  );
};

export default SmallPencilIcon;
