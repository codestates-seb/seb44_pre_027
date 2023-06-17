import { css, styled } from 'styled-components';

export const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexColumnCenter = css`
  ${FlexCenter};
  flex-direction: column;
`;