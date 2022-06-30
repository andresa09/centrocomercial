import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/navbar.css'


//funcional component
const Navbar = () => {



  //definimos el hook use navigate en una constante llamada navigate +  
  const navigate = useNavigate()

  //solo una funcion
  const navigateCreate = () =>{
    navigate("/ccviva/create")
  }

  const navigateUpdate = () =>{
    navigate("/ccviva/update")
  }
  const navigateDelete = () =>{
    navigate("/ccviva/delete")
  }

  const navigatehHome = () =>{
    navigate("/")
  }


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <h6 onClick={navigatehHome} className="navbar-brand text-light">Inicio</h6>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <h6 onClick={navigateCreate}  className="nav-link active text-light">Crear</h6>
              <h6 onClick={navigateUpdate} className="nav-link text-light">Actualizar</h6>
              <h6 onClick={navigateDelete} className="nav-link text-light">Eliminar</h6>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;