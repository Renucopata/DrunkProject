import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductTable from '../components/ProductTable/ProductTable';
import EmailsSend from '../components/EmailsSend';
import '../styles/ConvocatoriaPage.css';
import axios from 'axios';

const ConvocatoriaPage = () => {
  const [convocatorias, setConvocatorias] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [category, setCategory] = useState('');
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
  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '80%',
    maxHeight: '80%',
    overflow: 'auto',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(newConvocatoriaData.categoria);
      setCategory(newConvocatoriaData.categoria);
      const response = await axios.post('http://localhost:3001/api/convoApis/addConvocatoria', {
        requerimiento: newConvocatoriaData.requerimiento,
        fecha_apertura: newConvocatoriaData.fecha_apertura,
        fecha_cierre: newConvocatoriaData.fecha_cierre,
        estado: newConvocatoriaData.estado,
        owner: localStorage.getItem("usertype"),
        postulante_elegido: newConvocatoriaData.postulante_elegido,
        categoria: newConvocatoriaData.categoria
      });
      
      //console.log(category);
      if (response.status !== 201) {
        throw new Error('Failed to add convocatoria');
      }
      const newConvocatoria = response.data; // Assuming the response contains the newly added convocatoria
      setConvocatorias([...convocatorias, newConvocatoria]);
      setShowModal(false);
      //console.log(category);
      //setCategory('Papelería');
      setShowInfoModal(true);
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
              <input type="text" name="requerimiento" placeholder="Requerimiento" value={newConvocatoriaData.requerimiento} onChange={handleInputChange} />
              <input type="date" name="fecha_apertura" placeholder="Fecha de Apertura" value={newConvocatoriaData.fecha_apertura} onChange={handleInputChange} />
              <input type="date" name="fecha_cierre" placeholder="Fecha de Cierre" value={newConvocatoriaData.fecha_cierre} onChange={handleInputChange} />
              <input type="text" name="estado" placeholder="Estado" value={newConvocatoriaData.estado} onChange={handleInputChange} />
              
              <input type="text" name="categoria" placeholder="Categoria" value={newConvocatoriaData.categoria} onChange={handleInputChange} />
              <button type="submit">Guardar Convocatoria</button>
              <button onClick={() => setShowModal(false)}>Cerrar</button>
            </form>
          </div>
        </div>
      )}
      {showInfoModal && (
        <div className="modal" style={modalStyle}>
        <div className="modal-content" style={modalStyle}>
            <EmailsSend category={category}/>
            <button onClick={() => setShowInfoModal(false)}>Cerrar</button>
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

