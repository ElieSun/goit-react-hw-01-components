import styled from 'styled-components';

export const Friend = styled.li`
    width: 300px;
    height: 70px;
    background-color: #ffffff;
    display: flex;
    justify-content: flex-start;
    align-items: center; 
    flex-direction: row; 
    flex-wrap: nowrap; 
    align-content: center;
    box-shadow: 0px 3px 4px 3px rgba(0,0,0,0.17);
    margin-top: 10px;
`;
export const Status = styled.span`
    background-color: ${prpps => prpps.isOnline ? 'green' : 'red'};
    border-radius: 50%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-left: 25px;
`;
export const Avatar = styled.img`
    margin-left: 25px;
`;

export const Name = styled.p`
    margin-left: 25px;
`;