import styled from 'styled-components';

export const Container = styled.div<{color:string}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props)=>props.color};
`;

export const ColumnContent = styled.div<{size:number}>`
    width: ${(props)=>props.size}px;
    padding: 24px 16px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: transparent;
`;

export const FlexItem = styled.div<{size:number}>`
    width: ${(props)=>props.size}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: transparent;
`;