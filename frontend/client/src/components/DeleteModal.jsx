import React from 'react';
import axios from 'axios';

const DeleteModal = ({ convocatoriaId, closeModal }) => {
    const handleDelete = async () => {
        try {
            // Make API call to delete convocatoria with convocatoriaId
            const response = await axios.delete(`http://localhost:3001/api/convoApis/deleteConvocatoria/${convocatoriaId}`);
            if (response.status !== 201) {
                throw new Error('Failed to delete convocatoria');
            }
            // Close the modal after successful deletion
            closeModal();
            window.location.reload();
        } catch (error) {
            console.error('Error deleting convocatoria:', error);
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Confirmar Eliminación</h2>
                <p>¿Estás seguro de que quieres eliminar esta convocatoria?</p>
                {/* Button to confirm deletion */}
                <button onClick={handleDelete}>Confirmar</button>
                {/* Button to cancel deletion and close the modal */}
                <button onClick={closeModal}>Cancelar</button>
            </div>
        </div>
    );
};

export default DeleteModal;
