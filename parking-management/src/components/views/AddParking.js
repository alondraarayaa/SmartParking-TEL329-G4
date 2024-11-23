import React, { useState } from 'react';
import {
    GlobalContainer,
    ContentContainer,
    Title,
    Form,
    Label,
    Input,
    SubmitButton,
} from './styles';

const AddParking = ({ logout }) => {
    const [form, setForm] = useState({
        location: '',
        rate: '',
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('http://localhost:4000/api/parkings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    location: form.location,
                    occupied: 0, 
                    available: 6, // Capacidad predeterminada
                    pricePerHour: Number(form.rate),
                    createdAt: new Date(),
                    updatedAt: new Date(), 
                    currentUsers: {},
                    image: null
                }),
            });
    
            if (response.ok) {
                const data = await response.json();
                setMessage('Estacionamiento agregado con éxito');
                console.log('Respuesta del servidor:', data);
                // Limpiar formulario después de enviar
                setForm({ location: '', rate: '' });
            } else {
                setMessage('Error al agregar el estacionamiento');
                console.error('Error al enviar los datos:', response.statusText);
            }
        } catch (error) {
            setMessage('Error en la conexión con el servidor');
            console.error('Error en la solicitud al backend:', error);
        }
    };
    

    return (
        <GlobalContainer>
            <ContentContainer>
                <Title>Publicar Estacionamiento</Title>
                <Form onSubmit={handleSubmit}>
                    <Label>
                        Ubicación:
                        <Input
                            type="text"
                            name="location"
                            value={form.location}
                            onChange={handleChange}
                            required
                        />
                    </Label>
                    <Label>
                        Tarifa:
                        <Input
                            type="number"
                            name="rate"
                            value={form.rate}
                            onChange={handleChange}
                            required
                        />
                    </Label>
                    <SubmitButton type="submit">Publicar</SubmitButton>
                </Form>
                {message && <p>{message}</p>}
            </ContentContainer>
        </GlobalContainer>
    );
};

export default AddParking;
