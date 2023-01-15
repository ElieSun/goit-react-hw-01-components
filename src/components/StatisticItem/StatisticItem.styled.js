import styled from 'styled-components';

export const Item = styled.li`
    display: flex;
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
    flex-wrap: nowrap; 
    align-content: flex-start;
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
    height: 65px;
    background-color: ${props => props.color};
    width: 100%;
`;

export const Label = styled.span`

`;

export const Percentage = styled.span`

`;