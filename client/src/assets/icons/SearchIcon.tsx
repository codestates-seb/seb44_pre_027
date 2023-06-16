import { SvgPropsType } from '@/types';
import React from 'react';

interface SearchIcon extends SvgPropsType {}

const SearchIcon = (attribute: SearchIcon) => {
    return(
        <svg width={16} height={16} viewBox="0 0 18 18" {...attribute}>
            <path d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"></path>
        </svg>
    )
};

export default SearchIcon;
