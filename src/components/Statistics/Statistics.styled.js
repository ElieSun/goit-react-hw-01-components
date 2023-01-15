import styled from 'styled-components';

export const StatisticsSection = styled.section`
    width: 300px;
    border-radius: 4px;
    box-shadow: 0px 3px 4px 3px rgba(0,0,0,0.17);
    margin-bottom: 50px;
    display: flex;
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
    flex-wrap: nowrap; 
    align-content: flex-start;
    background-color: #ffffff;
`;

export const Title = styled.h2`
    font-size: 24px;
    font-weight: 600;
    color: #505050;
`;

export const StatList = styled.ul`
    list-style-type: none;
    padding: 0px;
    margin: 0px;
    width: 100%;
    display: flex;
    justify-content: space-around; 
    align-items: center; 
    flex-direction: row; 
    flex-wrap: nowrap; 
    align-content: center;
`;

