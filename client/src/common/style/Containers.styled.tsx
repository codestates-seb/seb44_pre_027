import { css, styled } from 'styled-components';
import { FlexCenter, FlexColumnCenter } from './styles';

export const Container = styled.div<{color:string}>`
  width: 100%;
  ${FlexColumnCenter}
  background-color: ${(props)=>props.color};
`;

export const ContentContainer = styled.div<{size:number}>`
    width: ${(props)=>props.size}px;
    height: 100vh;
    padding: 24px 16px;
    ${FlexColumnCenter}
    background-color: transparent;
`;

export const ColumnItemWrapper = styled.div<{size:number|string, gap:number}>`
    width: ${(props)=> typeof props.size === 'string' ? props.size : `${props.size}px`};
    ${FlexColumnCenter}
    gap: ${(props)=> props.gap}px;
    background-color: transparent;
`;

export const RowItemWrapper = styled.div`
  ${FlexCenter};
  gap: 5px;
`;