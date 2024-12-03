

import React, { useRef } from 'react';
import { useData } from '../../context/useData';
import './form.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Section from '../Section3/Section';

const Form = () => {
  const [section2data, setSection2data] = useData();
  const componentRef = useRef();

  const handleExport = () => {
    const input = componentRef.current;

    // Temporarily expand the scrollable area to fit the full content
    const originalHeight = input.style.height;
    input.style.height = 'auto';

    // Use html2canvas to capture the entire component
    html2canvas(input, {
      scale: 2, // Improve resolution
      useCORS: true, // Handle cross-origin images if any
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4'); // A4 size, portrait

      const imgWidth = 210; // A4 page width in mm
      const pageHeight = 297; // A4 page height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      // Add the first page
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Add more pages if necessary
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Save the PDF
      pdf.save('scrollable-component.pdf');

      // Restore the original scrollable area height
      input.style.height = originalHeight;
    });
  };

  return (
    <div className="app">
      <div className="form">
        <button onClick={handleExport}>Export to PDF</button>
        {section2data.length !== 0 && (
          <div
            className="section_3 shadow p-3 mb-5 bg-body-tertiary rounded m-4"
            ref={componentRef}
            style={{ height: '100vh', overflowY: 'scroll' }} // Scrollable area
          >
            {Array.isArray(section2data) &&
              section2data.map((input, index) => (
                <div key={index}>
                  <Section data={input} index={index} />
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;

