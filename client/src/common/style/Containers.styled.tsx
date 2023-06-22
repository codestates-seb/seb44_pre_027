import { css, styled } from 'styled-components';
import { FlexCenter, FlexColumnCenter } from './styles';

export const Container = styled.div<{color:string}>`
  width: 100%;
  ${FlexColumnCenter}
  background-color: ${(props)=>props.color};
`;

export const ContentContainer = styled.div<{size:number|string, direction:string}>`
    width: ${(props)=> typeof props.size === 'string' ? props.size : `${props.size}px`};
    height: 100vh;
    padding: 24px 16px;
    ${FlexCenter}
    flex-direction: ${(props)=>props.direction};
    background-color: transparent;
`;

export const ColumnItemWrapper = styled.div<{size:number|string, gap:number, align?:string|undefined}>`
    width: ${(props) => typeof props.size === 'string' ? props.size : `${props.size}px`};
    height: 100%;
    ${ (props) => props.align === 'center' ?
      FlexColumnCenter
      :
      css`
        display: flex;
        flex-direction: column;
      `
    }
    gap: ${(props)=> props.gap}px;
    background-color: transparent;
`;

export const RowItemWrapper = styled.div<{gap:number}>`
  display: flex;
  gap: ${(props)=> props.gap}px;
`;