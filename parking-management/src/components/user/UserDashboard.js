import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import {
    GlobalContainer,
    ContentContainer,
    Title,
    ParkingCard,
    ButtonContainer,
    ActionButton,
} from '../views/styles';
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
                <Title>Panel de Usuario - Estacionamientos</Title>
                <div>
                    {parkingSpaces.length > 0 ? (
                        parkingSpaces.map((space) => (
                            <ParkingCard key={space._id}>
                                <h3>Estacionamiento {space._id}</h3>
                                <p>Ocupados: {space.occupied} | Desocupados: {space.available}</p>
                                <ButtonContainer>
                                    <ActionButton style={{ backgroundColor: '#83a3fb' }}>
                                        <FaMapMarkerAlt /> Ubicación: {space.location}
                                    </ActionButton>
                                    <ActionButton onClick={() => toggleViewImage(space._id)}>
                                        <FaEye /> Ver Estacionamiento
                                    </ActionButton>
                                </ButtonContainer>
                                {viewImageId === space._id && (
                                    <div style={{ marginTop: '10px', textAlign: 'center' }}>
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
                            </ParkingCard>
                        ))
                    ) : (
                        <p>No hay estacionamientos disponibles.</p>
                    )}
                </div>
            </ContentContainer>
        </GlobalContainer>
    );
};

export default UserDashboard;
