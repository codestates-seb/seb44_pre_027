import { SvgPropsType } from '@/types';

interface XIconProps extends SvgPropsType {}

const XIcon = (attribute: XIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={'20'} height={'20'} viewBox="0 0 15 15"><path d="M3.25,3.25l8.5,8.5M11.75,3.25l-8.5,8.5"></path></svg>
  );
};

// style: fill, backgroundColor, strokeWidth, stroke

export default XIcon;