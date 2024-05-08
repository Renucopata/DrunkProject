import React, { useState } from 'react';
import UpdateModal from '../UpdateModal';// Import the UpdateModal component
import DeleteModal from '../DeleteModal'; // Import the DeleteModal component

const ProductTable = ({ convocatorias }) => {
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedConvocatoriaId, setSelectedConvocatoriaId] = useState(null);

    const handleUpdate = (id) => {
        setSelectedConvocatoriaId(id);
        setShowUpdateModal(true);
    };

    const handleDelete = (id) => {
        setSelectedConvocatoriaId(id);
        setShowDeleteModal(true);
    };

    return (
        <div className="convocatoria-table relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                {/* Table headers */}
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    {/* Table header rows */}
                </thead>
                <tbody>
                    {/* Table rows */}
                    {convocatorias.map(convocatoria => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={convocatoria.id}>
                            {/* Table data cells */}
                            <td>{convocatoria.id}</td>
                            <td>{convocatoria.requerimiento}</td>
                            <td>{convocatoria.fecha_apertura}</td>
                            <td>{convocatoria.fecha_cierre}</td>
                            <td>{convocatoria.estado}</td>
                            <td>{convocatoria.owner}</td>
                            <td>{convocatoria.postulante_elegido}</td>
                            <td>{convocatoria.categoria}</td>
                            <td>
                                {/* Update and Delete buttons */}
                                <button onClick={() => handleUpdate(convocatoria.id)}>Actualizar</button>
                                <button onClick={() => handleDelete(convocatoria.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Update Modal */}
            {showUpdateModal && (
                <UpdateModal
                    convocatoriaId={selectedConvocatoriaId}
                    closeModal={() => setShowUpdateModal(false)}
                />
            )}

            {/* Delete Modal */}
            {showDeleteModal && (
                <DeleteModal
                    convocatoriaId={selectedConvocatoriaId}
                    closeModal={() => setShowDeleteModal(false)}
                />
            )}
        </div>
    );
};

export default ProductTable;
