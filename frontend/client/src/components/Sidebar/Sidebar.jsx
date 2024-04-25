import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import '../../styles/Sidebar.css';

const AccordionSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-section">
      <button className="accordion-heading" onClick={() => setIsOpen(!isOpen)}>
        {title}
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

const Sidebar = () => {
  // Agrega aquí la lógica para el estado de los filtros

  return (
    <aside className="sidebar">
      <AccordionSection title="Marca">
        <div className="filter-checkbox">
          <input type="checkbox" id="pilot" name="pilot" />
          <label htmlFor="pilot">Pilot</label>
        </div>
        <div className="filter-checkbox">
          <input type="checkbox" id="stabilo" name="stabilo" />
          <label htmlFor="stabilo">Stabilo</label>
        </div>
        <div className="filter-checkbox">
          <input type="checkbox" id="pattio" name="pattio" />
          <label htmlFor="pattio">Pattio</label>
        </div>
        {/* Agrega más marcas si es necesario */}
      </AccordionSection>

      <AccordionSection title="Precio">
        <div className="filter-range">
          <input type="range" id="price" name="price" min="20" max="200" />
          <label htmlFor="price">20 - 200</label>
        </div>
      </AccordionSection>

      {/* Agrega aquí más secciones de filtros según tu imagen */}
    </aside>
  );
};

export default Sidebar;
