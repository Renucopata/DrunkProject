import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductTable from '../components/ProductTable/ProductTable';
import '../styles/ConvocatoriaPage.css'; // El CSS para DashboardPage


const ConvocatoriaPage = () => {
  const [convocatorias, setConvocatorias] = useState([
    { id: 1, requirement: 'Marcadores', totalApplicants: 10, taken: 2, status: 'Publicado', city: 'La Paz', time: 'Tiempo completo' },
    { id: 1, requirement: 'Marcadores', totalApplicants: 10, taken: 2, status: 'Publicado', city: 'La Paz', time: 'Tiempo completo' },
    { id: 1, requirement: 'Marcadores', totalApplicants: 10, taken: 2, status: 'Publicado', city: 'La Paz', time: 'Tiempo completo' },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newConvocatoriaData, setNewConvocatoriaData] = useState({
    requirement: '',
    totalApplicants: '',
    taken: '',
    status: '',
    city: '',
    time: ''
  });

  const handleInputChange = (e) => {
    setNewConvocatoriaData({...newConvocatoriaData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newConvocatoria = {
      id: convocatorias.length + 1,
      ...newConvocatoriaData
    };
    setConvocatorias([...convocatorias, newConvocatoria]);
    setShowModal(false); // Cerrar el modal y resetear el formulario
    setNewConvocatoriaData({
      requirement: '',
      totalApplicants: '',
      taken: '',
      status: '',
      city: '',
      time: ''
    });
  };

  return (
      <div className="convocatoria-page">
        <div className="convocatoria-header">
          <h1>Convocatorias</h1>
          <div>
            <Link to="/" className="return-dashboard-btn">Regresar al Dashboard</Link>
            <button type="button" onClick={() => setShowModal(true)}
                    className="add-convocatoria-btn">Añadir Convocatoria
            </button>
          </div>
        </div>
        {showModal && (
            <div className="modal">
              <div className="modal-content">
                <h2>Añadir Nueva Convocatoria</h2>
                <form onSubmit={handleSubmit}>
                  <input type="text" name="requirement" placeholder="Requerimiento"
                         value={newConvocatoriaData.requirement} onChange={handleInputChange}/>
                  <input type="number" name="totalApplicants" placeholder="Total de Postulantes"
                         value={newConvocatoriaData.totalApplicants} onChange={handleInputChange}/>
                  <input type="number" name="taken" placeholder="Tomados" value={newConvocatoriaData.taken}
                         onChange={handleInputChange}/>
                  <input type="text" name="status" placeholder="Estado" value={newConvocatoriaData.status}
                         onChange={handleInputChange}/>
                  <input type="text" name="city" placeholder="Ciudad" value={newConvocatoriaData.city}
                         onChange={handleInputChange}/>
                  <input type="text" name="time" placeholder="Tiempo" value={newConvocatoriaData.time}
                         onChange={handleInputChange}/>
                  <button type="submit">Guardar Convocatoria</button>
                  <button onClick={() => setShowModal(false)}>Cerrar</button>
                </form>
              </div>
            </div>
        )}
       <div>
         <ProductTable convocatorias={convocatorias}/>
       </div>

      </div>
  );
};

export default ConvocatoriaPage;
