import { css, styled } from 'styled-components';

export const defaultBtnStyles = css`
  border: 1px solid;
  border-radius: 3px;

  font-size: 13px;
`;

export const PrimaryBtn = styled.button<{ size: string | number }>`
  ${defaultBtnStyles};
  width: ${(props) => (typeof props.size === 'string' ? props.size : `${props.size}px`)};
  padding: 10.4px;

  border-color: #1f9eff;
  color: white;
  background-color: #0a95ff;

  &:hover {
    background-color: #0074cc;
    box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4);
  }
`;

export const FilledBtn = styled.button<{ size: string | number }>`
  ${defaultBtnStyles};
  width: ${(props) => (typeof props.size === 'string' ? props.size : `${props.size}px`)};

  padding: 8px 10.4px;
  border-color: #7aa7c7;
  color: #39739d;
  background-color: #e1ecf4;

  &:hover {
    color: #2c5877;
    background-color: #b3d3ea;
    box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.7);
  }
`;

export const TransparentBtn = styled.button<{ size: string | number }>`
  width: ${(props) => (typeof props.size === 'string' ? props.size : `${props.size}px`)};
  height: 34.84px;
  padding: 9.6px;

  font-size: 12px;
  line-height: 12px;
  vertical-align: top;
  color: #0074cc;
  background-color: white;
  border: 1px solid #379fef;
  border-radius: 3px;
  &:hover {
    background-color: #f0f8ff;
    color: #0063bf;
  }
`;
