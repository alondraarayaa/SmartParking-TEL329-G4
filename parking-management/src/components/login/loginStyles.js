import styled from 'styled-components';
import parkingImage from '../../asset/parking.png';

export const GlobalContainer = styled.div`
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  flex: 1;
  overflow: hidden;
  `;

export const FormContainer = styled.div`
  width: 25vw;
  margin: auto;
  border-radius: 15px;
  background: var(--grses-y-blancos-ffffff, #FFF);
  display: flex;
  flex-direction: column;
  justify-content: center;

  `;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  padding: 20px;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 34px;
  border: 1px solid var(--grses-y-blancos-808285, #6B7585);
  background: #FFF;
  width:70%;
`;

export const ButtonLogin = styled.button`
  text-decoration: none;
  text-align: center;
  margin-bottom: 10px;
  background-color: #83a3fb; 
  color: white; 
  padding: 10px; 
  border-radius: 34px;
  &:hover {
    opacity: 0.9;
  }
  width:70%;
`;

export const BlueSectionContainer = styled.div`
 width: 100%;
  border-radius: 15px;
  border-top-left-radius: 15px;
  overflow: hidden; 
  align-items: center;
  justify-content: center;
  position: relative; 
`;

export const LogoStyled = styled.div`
  width: 100%;
  height: 100%; 
  background-image: url(${parkingImage});
  background-size: cover; 
  background-position: center; 
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h1`
  font-size: 32px;
  color: #e7b419; 
  text-align: center;
`;

export const SubTitle = styled.h2`
  font-size: 24px;
  color: #333; 
  text-align: center;
`;