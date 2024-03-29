import { SvgPropsType } from '@/types';
import React from 'react';

interface InformationIconProps extends SvgPropsType {}

const InformationIcon = (attribute: InformationIconProps) => {
  return (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" {...attribute}>
      <path d="M7 1a6 6 0 1 1 0 12A6 6 0 0 1 7 1Zm1 10V6H6v5h2Zm0-6V3H6v2h2Z"></path>
    </svg>
  );
};

export default InformationIcon;
