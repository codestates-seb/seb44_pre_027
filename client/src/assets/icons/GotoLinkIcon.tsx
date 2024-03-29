import { SvgPropsType } from '@/types';

interface GotoLinkProps extends SvgPropsType {}

const GotoLink = (attribute: GotoLinkProps) => {
  return (
    <svg aria-hidden="true" className="va-text-bottom sm:d-none svg-icon iconShareSm" width="14" height="14" style={{fill:'#0074cc'}}><path d="M5 1H3a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9h-2v2H3V3h2V1Zm2 0h6v6h-2V4.5L6.5 9 5 7.5 9.5 3H7V1Z"></path></svg>
  );
};

export default GotoLink;