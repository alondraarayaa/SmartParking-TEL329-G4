import React, { useState } from 'react';
import { BlueSectionContainer, LogoStyled, GlobalContainer, FormContainer, Form, Input, ButtonLogin, Title, SubTitle } from './loginStyles';
import { ReactComponent as BlueSectionSvg } from '../../asset/Ellipse 1.svg'; 
import logoImage from '../../asset/parking.png';

const Login = ({ onLogin }) => {  // Recibe la función como prop
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
          const response = await fetch('http://localhost:4000/api/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, password }),
          });
  
          if (response.ok) {
              const data = await response.json();
              localStorage.setItem('userId', data.userId); // Guarda el userId en el localStorage
              onLogin(data.role); // Supón que el backend devuelve el rol del usuario, por ejemplo 'admin' o 'user'
          } else {
              setErrorMessage('Credenciales incorrectas');
          }
      } catch (error) {
          console.error('Error al iniciar sesión:', error);
          setErrorMessage('Error al conectar con el servidor');
      }
  };
  
  

    return (
      <GlobalContainer>
        <FormContainer>
          <BlueSectionContainer>
            <BlueSectionSvg />
            <img src={logoImage} alt="Logo" style={{
                position: 'absolute',
                top: '50%', 
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100px',
                height: 'auto'
              }} />
          </BlueSectionContainer>
          <Title>SmartParking</Title>
          <SubTitle>Iniciar sesión</SubTitle>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ButtonLogin type="submit">Ingresar</ButtonLogin>
            {errorMessage && (
              <div style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</div>
            )}
          </Form>
        </FormContainer>
      </GlobalContainer>
    );
  };

export default Login;
