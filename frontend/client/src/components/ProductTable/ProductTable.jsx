import React from 'react';

const ProductTable = ({ convocatorias }) => {
    return (
        <div className=" convocatoria-table relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">Requerimiento</th>
                    <th scope="col" className="px-6 py-3">Total de Postulantes</th>
                    <th scope="col" className="px-6 py-3">Tomados</th>
                    <th scope="col" className="px-6 py-3">Estado</th>
                    <th scope="col" className="px-6 py-3">Ciudad</th>
                    <th scope="col" className="px-6 py-3">Tiempo</th>
                    <th scope="col" className="px-6 py-3">Acción</th>
                </tr>
                </thead>
                <tbody>
                {convocatorias.map(convocatoria => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={convocatoria.id}>
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{convocatoria.requirement}</td>
                        <td>{convocatoria.totalApplicants}</td>
                        <td className="px-6 py-4">{convocatoria.taken}</td>
                        <td className="px-6 py-4">{convocatoria.status}</td>
                        <td className="px-6 py-4">{convocatoria.city}</td>
                        <td className="px-6 py-4">{convocatoria.time}</td>
                        <td>
                            {/* Acciones posibles */}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;