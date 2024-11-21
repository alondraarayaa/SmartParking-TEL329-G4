import React, { useState, useEffect } from 'react'; 
import {
    GlobalContainer,
    ContentContainer,
    Title,
    ParkingCard,
    ButtonContainer,
    ActionButton,
} from './styles';
import { FaMapMarkerAlt, FaDollarSign, FaEye } from 'react-icons/fa';

const ViewParking = () => {
    const [parkingSpaces, setParkingSpaces] = useState([]);
    const [expandedParkingId, setExpandedParkingId] = useState(null);

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

    const toggleExpand = (parkingId) => {
        setExpandedParkingId(expandedParkingId === parkingId ? null : parkingId);
    };

    return (
        <GlobalContainer>
            <ContentContainer>
                <Title>Lista de Estacionamientos en Arriendo</Title>
                <div>
                    {parkingSpaces.length > 0 ? (
                        parkingSpaces.map((space) => (
                            <ParkingCard key={space._id}> 
                                <h3>Estacionamiento {space._id}</h3> 
                                <p>Ocupados: {space.occupied} | Desocupados: {space.available}</p>
                                <ButtonContainer>
                                    <ActionButton style={{ backgroundColor: '#83a3fb' }}> <FaMapMarkerAlt /> Ubicación: {space.location}</ActionButton>
                                    <ActionButton onClick={() => toggleExpand(space._id)}>
                                        Ver Usuarios
                                    </ActionButton>
                                </ButtonContainer>
                                {expandedParkingId === space._id && (
                                    <div style={{ marginTop: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
                                        <h4>Usuarios Actuales:</h4>
                                        {space.currentUsers && space.currentUsers.length > 0 ? (
                                            <ul>
                                                {space.currentUsers.map((user) => (
                                                    <li key={user.userId}>
                                                        <strong>Nombre:</strong> {user.name} <br />
                                                        <strong>Inicio:</strong> {new Date(user.startTime).toLocaleString()} <br />
                                                        <strong>Fin:</strong> {new Date(user.endTime).toLocaleString()} <br />
                                                        <strong>Estado:</strong> {user.status}
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p>No hay usuarios utilizando este estacionamiento.</p>
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

export default ViewParking;
