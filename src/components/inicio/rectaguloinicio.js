import React from 'react';
import { CCard, CCol, CRow, CCardBody } from'@coreui/react';
import '../../assets/css/index.css';
import { Cuadrado } from './cuadradoinicio';
import CButton from '@coreui/react';

function Rectangulo({ bloque }) {
  console.log(bloque.data.pisos);

  // Asegúrate de que bloque.data.pisos sea un arreglo
  const pisos = bloque.data.pisos || []; // Si no hay pisos, utiliza un arreglo vacío
  console.log(pisos);

  return (
    <>
    <label>{bloque.bloque}</label>
    <div className="mio-centrar-tarjeta">
    <CCard className="mio-rectangle">
      <CCardBody>
        {pisos.map((piso, index) => (
          <>
          <label>{piso.piso}</label>
          <CCard className="mio-rectangle-piso" key={index}>
            <CCardBody>
              <CRow>
                  {piso.salones.map((salon, salonIndex) => (
                    <CCol key={salonIndex}>
                      <Cuadrado salones={salon}>{salon}</Cuadrado>
                    </CCol>
                  ))}
              </CRow></CCardBody>
          </CCard>
          </>
        ))}
      </CCardBody>
    </CCard>
    <CCard>
      <CCardBody>
        <div className="mio-cuadrado">
        </div>
        <p>aire acondicionado está apagado y no hay personas</p>
        <div className='mio-cuadrado'>
        </div>
        <p>airea condicionado está prendido pero hay personas</p>
        <div className='mio-cuadrado'></div>
        <p>aire acondicionado está prendido pero no hay personas</p>
      </CCardBody>
    </CCard>
    </div>
    </>
  );
}

export { Rectangulo };