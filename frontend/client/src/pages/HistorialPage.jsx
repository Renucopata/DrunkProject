import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HistorialPage.css';  // Asegúrate de que el camino es correcto y el archivo está en la ubicación esperada

const HistorialPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const historialData = [
        { id: 1, item: "Marcadores", totalPostulantes: 10, tomados: 2, status: "Published", ciudad: "La Paz", tiempo: "Full time", justificacion: "Necesidad de material para oficina" },
        { id: 2, item: "Lapices", totalPostulantes: 5, tomados: 1, status: "Published", ciudad: "Cochabamba", tiempo: "Full time", justificacion: "Reposición de inventario" },
        // Agrega más entradas según sea necesario
    ];

    // Función para filtrar los datos basados en el término de búsqueda
    const filteredData = historialData.filter(entry =>
        entry.item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="historial-page">
            <h1>Historial</h1>
            <Link to="/" className="btn-back">Volver al Dashboard</Link>
            <input 
                type="text" 
                placeholder="Buscar..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
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
                            <td><button onClick={() => alert("Detalles")}>Detalles</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HistorialPage;
