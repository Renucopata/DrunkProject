import React from 'react';

const ProductTable = ({ convocatorias }) => {
    const handleUpdate = (id) => {
        // Call update API using the id
        console.log(`Update convocatoria with id ${id}`);
    };

    const handleDelete = (id) => {
        // Call delete API using the id
        console.log(`Delete convocatoria with id ${id}`);
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
                    {convocatorias.map(convocatoria => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={convocatoria.id}>
                        <td>{convocatoria.id}</td>
                        <td>{convocatoria.requerimiento}</td>
                        <td>{convocatoria.fecha_apertura}</td>
                        <td>{convocatoria.fecha_cierre}</td>
                        <td>{convocatoria.estado}</td>
                        <td>{convocatoria.owner}</td>
                        <td>{convocatoria.postulante_elegido}</td>
                        <td>{convocatoria.categoria}</td>
                        <td>
                                <button onClick={() => handleUpdate(convocatoria.id)}>Actualizar</button>
                                <button onClick={() => handleDelete(convocatoria.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;

