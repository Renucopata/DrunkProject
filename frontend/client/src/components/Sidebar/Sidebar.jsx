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
      </AccordionSection>

      <AccordionSection title="Precio">
        <div className="filter-range">
          <input type="range" id="price" name="price" min="20" max="200" />
          <label htmlFor="price">20 - 200</label>
        </div>
      </AccordionSection>

      <AccordionSection title="Cantidad">
        <div className="filter-checkbox">
          <input type="checkbox" id="1-50" name="1-50" />
          <label htmlFor="1-50">1-50</label>
        </div>
        <div className="filter-checkbox">
          <input type="checkbox" id="51-200" name="51-200" />
          <label htmlFor="51-200">51-200</label>
        </div>
        <div className="filter-checkbox">
          <input type="checkbox" id="200+" name="200+" />
          <label htmlFor="200+">200+</label>
        </div>
      </AccordionSection>

      <AccordionSection title="Descuentos">
        <div className="filter-checkbox">
          <input type="checkbox" id="allDiscounts" name="allDiscounts" />
          <label htmlFor="allDiscounts">All Discounts</label>
        </div>
        <div className="filter-checkbox">
          <input type="checkbox" id="todaysDeals" name="todaysDeals" />
          <label htmlFor="todaysDeals">Today's Deals</label>
        </div>
      </AccordionSection>

      <AccordionSection title="Nuevos">
        <div className="filter-checkbox">
          <input type="checkbox" id="last7days" name="last7days" />
          <label htmlFor="last7days">Last 7 days</label>
        </div>
        <div className="filter-checkbox">
          <input type="checkbox" id="last30days" name="last30days" />
          <label htmlFor="last30days">Last 30 days</label>
        </div>
        <div className="filter-checkbox">
          <input type="checkbox" id="last60days" name="last60days" />
          <label htmlFor="last60days">Last 60 days</label>
        </div>
      </AccordionSection>

      <AccordionSection title="Rating">
        <div className="filter-checkbox">
          <input type="checkbox" id="1star" name="rating" value="1" />
          <label htmlFor="1star">★☆☆☆☆</label>
        </div>
        <div className="filter-checkbox">
          <input type="checkbox" id="2stars" name="rating" value="2" />
          <label htmlFor="2stars">★★☆☆☆</label>
        </div>
        <div className="filter-checkbox">
          <input type="checkbox" id="3stars" name="rating" value="3" />
          <label htmlFor="3stars">★★★☆☆</label>
        </div>
        <div className="filter-checkbox">
          <input type="checkbox" id="4stars" name="rating" value="4" />
          <label htmlFor="4stars">★★★★☆</label>
        </div>
        <div className="filter-checkbox">
          <input type="checkbox" id="5stars" name="rating" value="5" />
          <label htmlFor="5stars">★★★★★</label>
        </div>
      </AccordionSection>
    </aside>
  );
};

export default Sidebar;
