import { SvgPropsType } from '@/types';
import React from 'react';

interface LinkIcon extends SvgPropsType {}

const LinkIcon = (attribute: LinkIcon) => {
    return(
        <svg width={18} height={20} viewBox="0 0 18 18" {...attribute}>
            <path d="M7.22 11.83a6 6 0 0 0 1.62.85l.61-1.8a4.1 4.1 0 1 1 4.04-.8l1.26 1.42a6 6 0 1 0-7.53.33Zm3.43-5.6a6 6 0 0 0-1.6-.87L8.4 7.15a4.1 4.1 0 1 1-4.05.73L3.12 6.43a6 6 0 1 0 7.53-.2Z"></path>
        </svg>
    )
};

export default LinkIcon;