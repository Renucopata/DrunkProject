import React, { useState } from 'react';
import UpdateModal from '../UpdateModal';
import DeleteModal from '../DeleteModal';

const ProductTableHisto = ({ convocatorias }) => {
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

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return date.toLocaleDateString('en-GB', options);
      };

    return (
        <div className="convocatoria-table relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">Id</th>
                    <th scope="col" className="px-6 py-3">Requerimiento</th>
                    <th scope="col" className="px-6 py-3">Fecha de Apertura</th>
                    <th scope="col" className="px-6 py-3">Fecha de Cierre</th>
                    <th scope="col" className="px-6 py-3">Estado</th>
                    <th scope="col" className="px-6 py-3">Owner</th>
                    <th scope="col" className="px-6 py-3">Postulante Elegido</th>
                    <th scope="col" className="px-6 py-3">Categoria</th>
                    <th scope="col" className="px-6 py-3">Acción</th>
                </tr>
            </thead>
                <tbody>
                    {/* Table rows */}
                    {convocatorias.map(convocatoria => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={convocatoria.id}>
                            {/* Table data cells */}
                            <td>{convocatoria.id}</td>
                            <td>{convocatoria.requerimiento}</td>
                            <td>{formatDate(convocatoria.fecha_apertura)}</td>
                            <td>{formatDate(convocatoria.fecha_cierre)}</td>
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

export default ProductTableHisto;
