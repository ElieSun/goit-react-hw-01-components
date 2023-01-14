import styled from 'styled-components';

export const Card = styled.div`
    width: 300px;
    margin: 50px 0px;
    border: 1px;
    border-radius: 4px;
    box-shadow: 0px 3px 4px 3px rgba(0,0,0,0.17);
    background-color: #ffffff;
`;  

export const Description = styled.div`
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
`;

export const Image = styled.img`
    display: block;
    width: 50%;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 30px;
`;

export const Name = styled.p`
    margin: 4px 0px;
    font-size: 24px;
    font-weight: 600;
    color: #505050;
`;

export const Tag = styled.p`
    margin: 4px 0px;
    color: #757575;
    font-weight: 400;
`;

export const Location = styled.p`
    margin: 4px 0px;
    color: #757575;
    font-weight: 400;
`;

export const Stats = styled.ul`
    list-style-type: none;
    margin: 30px 0 0 0;
    padding: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: stretch;
    align-items: flex-start;
    background-color: #f3f6f9;
    border-top: 1px solid #cdcdcd;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    width: 100%;    
    padding: 10px 0px;
`;

export const Label = styled.span`
    padding: 3px 0px;
    color: #757575;
    font-weight: 400;
`;

export const Quantity = styled.span`
    padding: 3px 0px;
    color: #505050;
    font-weight: 800;
`;