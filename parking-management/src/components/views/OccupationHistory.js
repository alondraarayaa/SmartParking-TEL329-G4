import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
`;

const TableHeader = styled.th`
    border: 1px solid #ddd;
    padding: 8px;
    background-color: #f2f2f2;
    text-align: left;
`;

const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #f9f9f9;
    }

    &:hover {
        background-color: #f1f1f1;
    }
`;

const TableCell = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
`;

const OccupationHistory = () => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/reservations');
                if (response.ok) {
                    const data = await response.json();
                    setReservations(data);
                } else {
                    console.error('Error al obtener los datos:', response.statusText);
                }
            } catch (error) {
                console.error('Error en la solicitud al backend:', error);
            }
        };

        fetchReservations();
    }, []);

    return (
        <div>
            <h2>Historial de Reservas</h2>
            <Table>
                <thead>
                    <tr>
                        <TableHeader>Nombre del Usuario</TableHeader>
                        <TableHeader>ID de Estacionamiento</TableHeader>
                        <TableHeader>Hora de Inicio</TableHeader>
                        <TableHeader>Hora de Termino</TableHeader>
                        <TableHeader>Estado</TableHeader>
                        <TableHeader>Costo Total</TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {reservations.map((reservation) => (
                        <TableRow key={reservation._id}>
                            <TableCell>{reservation.userId.name || 'N/A'}</TableCell>
                            <TableCell>{reservation.parkingId}</TableCell>
                            <TableCell>{new Date(reservation.startTime).toLocaleString()}</TableCell>
                            <TableCell>{reservation.endTime ? new Date(reservation.endTime).toLocaleString() : 'N/A'}</TableCell>
                            <TableCell>{reservation.status}</TableCell>
                            <TableCell>{reservation.totalCost}</TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default OccupationHistory;
