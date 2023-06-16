import { SvgPropsType } from '@/types';

interface IconEyeProps extends SvgPropsType {}

const IconEye = (attribute: IconEyeProps) => {
  return (
    <svg aria-hidden="true" className="svg-icon iconEye" width="18" height="18" viewBox="0 0 18 18"><path d="M9.06 3C4 3 1 9 1 9s3 6 8.06 6C14 15 17 9 17 9s-3-6-7.94-6ZM9 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-2a2 2 0 0 0 2-2 2 2 0 0 0-2-2 2 2 0 0 0-2 2 2 2 0 0 0 2 2Z"></path></svg>
  );
};

export default IconEye;