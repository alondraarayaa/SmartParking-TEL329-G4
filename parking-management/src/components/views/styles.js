import styled from 'styled-components';

export const GlobalContainer = styled.div`
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`;

export const ContentContainer = styled.div`
    margin-top: 20px;
    width: 80%;
    max-width: 800px;
    background-color: white;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
    font-size: 24px;
    color: #e7b419;
    text-align: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const Label = styled.label`
    font-size: 16px;
    color: #333;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const Input = styled.input`
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ddd;
    font-size: 16px;
`;

export const SubmitButton = styled.button`
    background-color: #83a3fb;
    color: white;
    padding: 10px;
    border-radius: 20px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    &:hover {
        opacity: 0.9;
    }
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    
    th, td {
        padding: 10px;
        text-align: center;
        border: 1px solid #ddd;
    }
    
    th {
        background-color: #83a3fb;
        color: white;
    }
    
    td {
        background-color: #f9f9f9;
    }
`;

export const ParkingCard = styled.div`
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 5px; /* Reduce el espacio entre los elementos */
    align-items: center;
    text-align: center;

    h3 {
        margin: 5px 0; /* Reduce el margen superior e inferior */
    }

    p {
        margin: 3px 0; /* Reduce el margen superior e inferior */
    }
`;


export const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
`;

export const ActionButton = styled.button`
    background-color: #83a3fb;
    color: white;
    padding: 8px 15px;
    border-radius: 20px;
    font-size: 14px;
    border: none;
    cursor: pointer;
    &:hover {
        opacity: 0.9;
    }
`;
