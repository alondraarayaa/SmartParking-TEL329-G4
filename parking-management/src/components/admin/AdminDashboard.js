import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    GlobalContainer,
    ContentContainer,
    Title,
    SubTitle,
    Section,
    ActionButton,
} from './AdminDashboardStyles';
import NavBar from '../NavBar';

const AdminDashboard = ({ logout }) => {
    const navigate = useNavigate();

    return (
        <GlobalContainer>

            <ContentContainer>
                <Title>Panel de administrador</Title>
                <SubTitle>Aquí puedes gestionar estacionamientos y publicar nuevos espacios.</SubTitle>
                <Section>
                    <ActionButton onClick={() => navigate('/view-parking')}>Ver Estacionamientos</ActionButton>
                    <ActionButton onClick={() => navigate('/add-parking')}>Publicar Estacionamiento</ActionButton>
                    <ActionButton onClick={() => navigate('/occupation-history')}>Ver Historial de Ocupación</ActionButton>
                </Section>
            </ContentContainer>
        </GlobalContainer>
    );
};

export default AdminDashboard;
