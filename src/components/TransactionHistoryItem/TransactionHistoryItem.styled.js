import styled from 'styled-components';

export const TableRow = styled.tr`
    background-color: ${props => props.index % 2 ? '#ecf2f4' : '#FFFF'};
    color: grey;
    height: 30px;
`;

export const TableData = styled.td`
    text-align: center;
`;