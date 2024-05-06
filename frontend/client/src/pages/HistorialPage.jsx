import React, { useState } from 'react';

function HistorialPage() {
    // Datos simulados para los elementos de historial
    const historialData = [
        { id: 1, item: "Marcadores", totalPostulantes: 10, tomados: 2, status: "Published", ciudad: "La Paz", tiempo: "Full time", justificacion: "Necesidad de material para oficina" },
        { id: 2, item: "Lapices", totalPostulantes: 5, tomados: 1, status: "Published", ciudad: "Cochabamba", tiempo: "Full time", justificacion: "Reposición de inventario" },
        // Agrega más entradas según sea necesario
    ];

    const [selectedItem, setSelectedItem] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleShowDetails = (item) => {
        setSelectedItem(item);
    };

    const handleHideDetails = () => {
        setSelectedItem(null);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filtrar datos basados en el término de búsqueda
    const filteredData = historialData.filter(item =>
        item.item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="historial-page">
            <h1>Historial</h1>
            <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={handleSearchChange}
                style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
            />
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Total de Postulantes</th>
                        <th>Tomados</th>
                        <th>Status</th>
                        <th>Ciudad</th>
                        <th>Tiempo</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(entry => (
                        <tr key={entry.id}>
                            <td>{entry.item}</td>
                            <td>{entry.totalPostulantes}</td>
                            <td>{entry.tomados}</td>
                            <td>{entry.status}</td>
                            <td>{entry.ciudad}</td>
                            <td>{entry.tiempo}</td>
                            <td><button onClick={() => handleShowDetails(entry)}>Detalles</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedItem && (
                <div className="details-modal">
                    <h2>Detalle de {selectedItem.item}</h2>
                    <p>Justificación: {selectedItem.justificacion}</p>
                    <button onClick={handleHideDetails}>Cerrar</button>
                </div>
            )}
        </div>
    );
}

export default HistorialPage;
