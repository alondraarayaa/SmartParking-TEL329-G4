import React, { useState, useEffect } from 'react';
import {
    GlobalContainer,
    ContentContainer,
    Title,
    SubTitle,
    Section,
    ActionButton,
    StatusBadge
} from './UserDashboardStyles';
import { FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';

const MessageContainer = ({ message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000); // El mensaje desaparecerá después de 3 segundos
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div style={{
            position: 'fixed',
            top: '10px',
            right: '10px',
            padding: '10px 20px',
            backgroundColor: '#4caf50', // Color verde para éxito
            color: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            zIndex: 1000
        }}>
            {message}
        </div>
    );
};

const UserDashboard = ({ userId }) => { // Supongo que tienes acceso al userId actual
    const [parkingSpaces, setParkingSpaces] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchParkingSpaces = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/parkings');
                if (response.ok) {
                    const data = await response.json();
                    setParkingSpaces(data);
                } else {
                    console.error('Error al obtener los datos:', response.statusText);
                }
            } catch (error) {
                console.error('Error en la solicitud al backend:', error);
            }
        };

        fetchParkingSpaces();
    }, []);

    const handleReservation = async (spaceId) => {
        // Recupera el userId del localStorage
        const userId = localStorage.getItem('userId');
        
        if (!userId) {
            setMessage('Por favor, inicia sesión para reservar un espacio.');
            return;
        }
    
        try {
            const response = await fetch('http://localhost:4000/api/reservations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: userId,
                    parkingId: spaceId,
                    startTime: new Date().toISOString(),
                    status: 'active',
                    totalCost: 50 // Ajusta el costo según tu lógica
                }),
            });
    
            if (response.ok) {
                const data = await response.json();
                setMessage('Reserva creada con éxito');
                console.log('Reserva creada:', data);
            } else {
                setMessage('Error al crear la reserva');
                console.error('Error al crear la reserva:', response.statusText);
            }
        } catch (error) {
            setMessage('Error en la conexión con el servidor');
            console.error('Error en la solicitud al backend:', error);
        }
    };

    return (
        <GlobalContainer>
            {message && <MessageContainer message={message} onClose={() => setMessage('')} />}
            <ContentContainer style={{ padding: '20px' }}>
                <Title>Panel de usuario</Title>
                <SubTitle>Aquí puedes ver la disponibilidad de los espacios de estacionamiento y gestionar tus reservas.</SubTitle>
                
                <Section style={{ width: '95%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                        {parkingSpaces.map((space) => (
                            <div key={space._id} style={{
                                display: 'flex', flexDirection: 'column', 
                                gap: '5px', border: '1px solid #ddd', padding: '10px',
                                borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                backgroundColor: '#fff', width: '100%'
                            }}>
                                <span style={{ fontWeight: 'bold', textAlign: 'center' }}>
                                    Estacionamiento {space._id} -{' '}
                                    <StatusBadge>
                                        {space.available > 0 ? 'Disponible' : 'Ocupado'}
                                    </StatusBadge>
                                </span>
                                <p style={{ margin: 0, textAlign: 'center' }}>Ocupados: {space.occupied} | Desocupados: {space.available}</p>
                                
                                <div style={{ display: 'flex', justifyContent: 'space-around', gap: '10px', marginTop: '10px' }}>
                                    <ActionButton>
                                        <FaMapMarkerAlt />Ubicación: {space.location}
                                    </ActionButton>
                                    <ActionButton>
                                        <FaDollarSign /> Valor: {space.pricePerHour}
                                    </ActionButton>

                                    {space.available > 0 && (
                                        <ActionButton style={{ backgroundColor: '#ff6b6b', color: '#fff' }} onClick={() => handleReservation(space._id)}>
                                            Reservar
                                        </ActionButton>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>
            </ContentContainer>
        </GlobalContainer>
    );
};

export default UserDashboard;
