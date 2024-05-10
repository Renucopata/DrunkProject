import React, { useState } from 'react';
import axios from 'axios';

const UpdateModal = ({ convocatoriaId, closeModal }) => {
    const [updatedData, setUpdatedData] = useState({
        // Initialize with empty values or default values
        requerimiento: '',
        fecha_apertura: '',
        fecha_cierre: '',
        estado: '',
        owner: '',
        postulante_elegido: 'ninguno',
        categoria: ''
    });

    const handleInputChange = (e) => {
        setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make API call to update convocatoria with updatedData and convocatoriaId
            const response = await axios.put(`http://localhost:3001/api/convoApis/updateConvocatoria/${convocatoriaId}`, updatedData);
            if (response.status !== 201) {
                throw new Error('Failed to update convocatoria');
            }
            // Close the modal after successful update
            closeModal();
            window.location.reload();
        } catch (error) {
            console.error('Error updating convocatoria:', error);
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Actualizar Convocatoria</h2>
                <form onSubmit={handleSubmit}>
                    {/* Input fields for updating convocatoria data */}
                    <input type="text" name="requerimiento" placeholder="Requerimiento" value={updatedData.requerimiento} onChange={handleInputChange} />
                    <input type="date" name="fecha_apertura" placeholder="Fecha de Apertura" value={updatedData.fecha_apertura} onChange={handleInputChange} />
                    <input type="date" name="fecha_cierre" placeholder="Fecha de Cierre" value={updatedData.fecha_cierre} onChange={handleInputChange} />
                    <input type="text" name="estado" placeholder="Estado" value={updatedData.estado} onChange={handleInputChange} />
                    <input type="text" name="owner" placeholder="Owner" value={updatedData.owner} onChange={handleInputChange} />
                    <input type="text" name="postulante_elegido" placeholder="Postulante Elegido" value={updatedData.postulante_elegido} onChange={handleInputChange} />
                    <input type="text" name="categoria" placeholder="Categoria" value={updatedData.categoria} onChange={handleInputChange} />
                    {/* Button to submit the update */}
                    <button type="submit">Guardar Cambios</button>
                    {/* Button to close the modal */}
                    <button onClick={closeModal}>Cancelar</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateModal;
