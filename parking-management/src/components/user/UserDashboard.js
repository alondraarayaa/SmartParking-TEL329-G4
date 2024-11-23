import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import {
    GlobalContainer,
    ContentContainer,
    Title,
    SubTitle,
    Section,
    ActionButton,
    StatusBadge,
} from './UserDashboardStyles';
import { FaMapMarkerAlt, FaDollarSign, FaEye } from 'react-icons/fa';

const socket = io('http://localhost:4000');

const UserDashboard = () => {
    const [parkingSpaces, setParkingSpaces] = useState([]);
    const [viewImageId, setViewImageId] = useState(null);

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

        socket.on('update', async () => {
            console.log('Actualización detectada desde el servidor');
            await fetchParkingSpaces();
        });

        return () => {
            socket.off('update');
        };
    }, []);

    const toggleViewImage = (parkingId) => {
        setViewImageId(viewImageId === parkingId ? null : parkingId);
    };

    return (
        <GlobalContainer>
            <ContentContainer>
                <Title>Panel de Usuario</Title>
                <SubTitle>Visualiza los estacionamientos disponibles y sus imágenes.</SubTitle>
                <Section>
                    {parkingSpaces.map((space) => (
                        <div key={space._id} style={{ marginBottom: '15px' }}>
                            <p>Estacionamiento {space._id}</p>
                            <p>Ocupados: {space.occupied} | Desocupados: {space.available}</p>
                            <ActionButton onClick={() => toggleViewImage(space._id)}>
                                <FaEye /> Ver Estacionamiento
                            </ActionButton>
                            {viewImageId === space._id && (
                                <div style={{ marginTop: '10px' }}>
                                    {space.image && space.image !== 'null' ? (
                                        <img
                                            src={space.image}
                                            alt={`Estacionamiento ${space._id}`}
                                            style={{ maxWidth: '100%', borderRadius: '8px' }}
                                        />
                                    ) : (
                                        <p>No hay imagen disponible para este estacionamiento.</p>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </Section>
            </ContentContainer>
        </GlobalContainer>
    );
};

export default UserDashboard;
