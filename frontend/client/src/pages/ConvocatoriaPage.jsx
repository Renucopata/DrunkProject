import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductTable from '../components/ProductTable/ProductTable';
import '../styles/ConvocatoriaPage.css';
import axios from 'axios';

const ConvocatoriaPage = () => {
  const [convocatorias, setConvocatorias] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newConvocatoriaData, setNewConvocatoriaData] = useState({
    requerimiento: '',
    fecha_apertura: '',
    fecha_cierre: '',
    estado: '',
    owner: '',
    postulante_elegido: 'ninguno',
    categoria: ''
  });

  useEffect(() => {
    const fetchConvocatorias = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/convoApis/getConvocatorias');
        if (!response.ok) {
          throw new Error('Failed to fetch convocatorias');
        }
        const data = await response.json();
        setConvocatorias(data);
      } catch (error) {
        console.error('Error fetching convocatorias:', error);
      }
    };

    fetchConvocatorias();
  }, []);

  const handleInputChange = (e) => {
    setNewConvocatoriaData({ ...newConvocatoriaData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/convoApis/addConvocatoria', {
        requerimiento: '',
    fecha_apertura: '',
    fecha_cierre: '',
    estado: '',
    owner: '',
    postulante_elegido: 'ninguno',
    categoria: '' 
      });
      if (!response.ok) {
        throw new Error('Failed to add convocatoria');
      }
      const newConvocatoria = await response.json();
      setConvocatorias([...convocatorias, newConvocatoria]);
      setShowModal(false);
      setNewConvocatoriaData({
        requerimiento: '',
        fecha_apertura: '',
        fecha_cierre: '',
        estado: '',
        owner: '',
        postulante_elegido: 'ninguno',
        categoria: ''
      });
    } catch (error) {
      console.error('Error adding convocatoria:', error);
    }
  };

  return (
    <div className="convocatoria-page">
      <div className="convocatoria-header">
        <h1>Convocatorias</h1>
        <div>
          <Link to="/" className="return-dashboard-btn">Regresar al Dashboard</Link>
          <button type="button" onClick={() => setShowModal(true)} className="add-convocatoria-btn">Añadir Convocatoria</button>
        </div>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Añadir Nueva Convocatoria</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="requirement" placeholder="Requerimiento" value={newConvocatoriaData.requirement} onChange={handleInputChange} />
              <input type="date" name="fecha_apertura" placeholder="Fecha de Apertura" value={newConvocatoriaData.fecha_apertura} onChange={handleInputChange} />
              <input type="date" name="fecha_cierre" placeholder="Fecha de Cierre" value={newConvocatoriaData.fecha_cierre} onChange={handleInputChange} />
              <input type="text" name="estado" placeholder="Estado" value={newConvocatoriaData.estado} onChange={handleInputChange} />
              <input type="text" name="owner" placeholder="Owner" value={newConvocatoriaData.owner} onChange={handleInputChange} />
              <input type="text" name="categoria" placeholder="Categoria" value={newConvocatoriaData.categoria} onChange={handleInputChange} />
              <button type="submit">Guardar Convocatoria</button>
              <button onClick={() => setShowModal(false)}>Cerrar</button>
            </form>
          </div>
        </div>
      )}
      <div>
        <ProductTable convocatorias={convocatorias} />
      </div>
    </div>
  );
};

export default ConvocatoriaPage;
