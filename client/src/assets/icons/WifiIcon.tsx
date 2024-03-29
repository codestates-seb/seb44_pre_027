import { SvgPropsType } from '@/types';
import React from 'react';

interface Wifiicon extends SvgPropsType {}

const Wifiicon = (attribute: Wifiicon) => {

  return (
    <svg  width={18} height={18} viewBox="0 0 18 18" {...attribute}>
        <path d="M3 1a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3Zm0 1.5c6.9 0 12.5 5.6 12.5 12.5H13C13 9.55 8.45 5 3 5V2.5Zm0 5c4.08 0 7.5 3.41 7.5 7.5H8c0-2.72-2.28-5-5-5V7.5Zm0 5c1.36 0 2.5 1.14 2.5 2.5H3v-2.5Z"></path>    
    </svg>
  );
};

export default Wifiicon;
