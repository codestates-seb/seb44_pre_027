import { SvgPropsType } from '@/types';
import React from 'react';

interface HeadMenuIcon extends SvgPropsType {}

const HeadMenuIcon = (attribute: HeadMenuIcon) => {
  return (
    <svg width={20} height={20} viewBox="0 0 18 18" {...attribute}>
        <path d="M15 1H3a2 2 0 0 0-2 2v2h16V3a2 2 0 0 0-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 0 0 2-2v-2H1v2Zm16-7H1v4h16V6Z"></path>
    </svg>
  );
};

export default HeadMenuIcon;
