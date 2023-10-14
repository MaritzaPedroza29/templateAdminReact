import { CCol, CContainer, CRow } from "@coreui/react";
import  Cardusuario from "../../components/usuarios/cardusuarios";
import { useState } from "react";
import usuario1 from "../../assets/images/usuarios/profesora1.png";
import usuario2 from "../../assets/images/usuarios/profesor2.png";
import usuario3 from "../../assets/images/usuarios/profesora3.png";
import usuario4 from "../../assets/images/usuarios/profesor4.png";
import usuario5 from "../../assets/images/usuarios/profesor5.png";
import  Botoncrear  from "../../components/usuarios/Botoncrear";
import  ModalCrearUsuario  from "../../components/usuarios/modalcrearusuario";


const Usuarios= ()=>{
  const [mostrarModal, setMostrarModal] = useState(false);
  const [usuarios, setUsuarios] = useState([
    {
      "usuario": "Usuario1",
      "data": {
        "id": 1,
        "imagen": "./img/profesora1.png",
        "nombre": "Jessica Rodriguez",
        "correo": "doc_js_rodriguez@fesc.edu.co",
        "estado": "1"
      }
    },
    {
      "usuario": "Usuario2",
      "data": {
        "id": 2,
        "imagen": "./img/profesor2.png",
        "nombre": "Sebastián Galindo",
        "correo": "doc_js_galindo@fesc.edu.co",
        "estado": "2"
      }
    },
    {
      "usuario": "Usuario3",
      "data": {
        "id": 3,
        "imagen": "./img/profesora3.png",
        "nombre": "Magda Martinez",
        "correo": "doc_mf_martinez@fesc.edu.co",
        "estado": "1"
      }
    },
    {
        "usuario": "Usuario4",
        "data": {
            "id": 4,
          "imagen":  "./img/profesor4.png",
          "nombre": "Rodolfo Ortega",
          "correo": "doc_jr_ortega@fesc.edu.co",
          "estado":"1"
        }
    },
    {
        "usuario": "Usuario5",
        "data": {
            "id": 5,
          "imagen": "./img/profesora6.png",
          "nombre": "Maria Fernandez",
          "correo": "est_mf_fernandez@fesc.edu.co",
          "estado": "2"
        }
      },
      {
        "usuario": "Usuario6",
        "data": {
            "id": 6,
          "imagen": "./img/profesor5.png",
          "nombre": "Darwin Cardozo",
          "correo": "doc_da_cardozo@fesc.edu.co",
          "estado":"2"
        }
      }
  ]);
            
    const agregarUsuario = (nuevoUsuario) => {
        setUsuarios([...usuarios, nuevoUsuario]);
      };
    
      const eliminarUsuario = (id) => {
        const index = usuarios.findIndex((usuario) => usuario.data.id === id);
        if (index !== -1) {
          const nuevosUsuarios = [...usuarios];
          nuevosUsuarios.splice(index, 1);
          setUsuarios(nuevosUsuarios);
        }
      };
    const abrirModal = () => {
        setMostrarModal(true);
      };
    
      const cerrarModal = () => {
        setMostrarModal(false);
      };    
return(
    <>
        <CContainer className="mt-3 mb-3">
        <h3 className="text-center">Usuarios</h3>
            <Botoncrear abrirModal={abrirModal} ></Botoncrear>
            <ModalCrearUsuario mostrarModal={mostrarModal} cerrarModal={cerrarModal} agregarUsuario={agregarUsuario} usuarios={usuarios}/>
            <CRow className="justify-content-md-center">
                    {usuarios.map(usuario => <CCol sm="12" md="8" lg="6"><Cardusuario key={usuario.id} usuarios={usuario} eliminarUsuario={eliminarUsuario} agregarUsuario={agregarUsuario}/></CCol>)}
            </CRow>
        </CContainer>
    </>     
)
}

export default Usuarios