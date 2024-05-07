import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import '../../styles/Sidebar.css';  // Asegúrate de que esta importación es necesaria o reemplázala con Tailwind directamente aquí.

const AccordionSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-2">
      <button className="accordion-heading bg-gray-200 text-left px-4 py-2 w-full flex justify-between items-center" onClick={() => setIsOpen(!isOpen)}>
        {title}
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && <div className="accordion-content p-4 bg-gray-100">{children}</div>}
    </div>
  );
};

const Sidebar = () => {
  return (
    <aside className="w-64 h-full bg-white border-r shadow-lg">
      <AccordionSection title="Marca">
        <div className="filter-checkbox">
          <input type="checkbox" id="pilot" name="pilot" />
          <label htmlFor="pilot" className="ml-2">Pilot</label>
        </div>
        <div className="filter-checkbox">
          <input type="checkbox" id="stabilo" name="stabilo" />
          <label htmlFor="stabilo" className="ml-2">Stabilo</label>
        </div>
        <div className="filter-checkbox">
          <input type="checkbox" id="pattio" name="pattio" />
          <label htmlFor="pattio" className="ml-2">Pattio</label>
        </div>
      </AccordionSection>

      <AccordionSection title="Precio">
        <div className="filter-range">
          <input type="range" id="price" name="price" min="20" max="200" className="w-full" />
          <label htmlFor="price" className="block text-sm mt-2">20 - 200</label>
        </div>
      </AccordionSection>

      <AccordionSection title="Cantidad">
        <div className="filter-checkbox">
          <input type="checkbox" id="1-50" name="1-50" />
          <label htmlFor="1-50" className="ml-2">1-50</label>
        </div>
        <div className="filter-checkbox">
          <input type="checkbox" id="51-200" name="51-200" />
          <label htmlFor="51-200" className="ml-2">51-200</label>
        </div>
        <div className="filter-checkbox">
          <input type="checkbox" id="200+" name="200+" />
          <label htmlFor="200+" className="ml-2">200+</label>
        </div>
      </AccordionSection>

      <AccordionSection title="Descuentos">
        <div className="filter-checkbox">
          <input type="checkbox" id="allDiscounts" name="allDiscounts" />
          <label htmlFor="allDiscounts" className="ml-2">All Discounts</label>
        </div>
        <div className="filter-checkbox">
          <input type="checkbox" id="todaysDeals" name="todaysDeals" />
          <label htmlFor="todaysDeals" className="ml-2">Today's Deals</label>
        </div>
      </AccordionSection>

      <AccordionSection title="Nuevos">
        <div className="filter-checkbox">
          <input type="checkbox" id="last7days" name="last7days" />
          <label htmlFor="last7days" className="ml-2">Last 7 days</label>
        </div>
        <div className="filter-checkbox">
          <input type="checkbox" id="last30days" name="last30days" />
          <label htmlFor="last30days" className="ml-2">Last 30 days</label>
        </div>
        <div className="filter-checkbox">
          <input type="checkbox" id="last60days" name="last60days" />
          <label htmlFor="last60days" className="ml-2">Last 60 days</label>
        </div>
      </AccordionSection>

      <AccordionSection title="Rating">
        <div className="filter-checkbox">
          <input type="checkbox" id="1star" name="rating" value="1" />
          <label htmlFor="1star" className="ml-2">★☆☆☆☆</label>
        </div>
        <div className="filter-checkbox">
          <input type="checkbox" id="2stars" name="rating" value="2" />
          <label htmlFor="2stars" className="ml-2">★★☆☆☆</label>
        </div>
        <div className="filter-checkbox">
          <input type="checkbox" id="3stars" name="rating" value="3" />
          <label htmlFor="3stars" className="ml-2">★★★☆☆</label>
        </div>
        <div className="filter-checkbox">
          <input type="checkbox" id="4stars" name="rating" value="4" />
          <label htmlFor="4stars" className="ml-2">★★★★☆</label>
        </div>
        <div className="filter-checkbox">
          <input type = "checkbox" id="5stars" name="rating" value="5" />
          <label htmlFor="5stars" className="ml-2">★★★★★</label>
        </div>
      </AccordionSection>
    </aside>
  );
};

export default Sidebar;
