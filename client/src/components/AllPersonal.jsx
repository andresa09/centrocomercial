import '../styles/fondo.css'

//useState guarda un estado inicial de la aplicacion
//useEffect ejecuta el codigo que esta dentro del useEffect 
import React,{useState,useEffect} from 'react';
//para consumir las API
import axios from 'axios';
//GET


const AllPersonal = () => {
  
  const urlAllPersonal = 'http://localhost:8080/ccviva/all';

  const [data,setData] = useState([]);

  useEffect(() => {
    peticionesGet()
  }, [])

  const peticionesGet = () =>{
    axios.get(urlAllPersonal)
    .then(response=>{
      setData(response.data)
      
    })
  }

  return (
    <>
      <div className='fondo'>

      
      <h3 className='mt-2 text-light'>Listado de Personal</h3>
      <table className="table table-secondary">
          <thead>
            <tr>
              
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Documento</th>
              <th scope="col">Cargo</th>
            </tr>
          </thead>
          <tbody>
           {data.map(personal=>{
            return( 
              <tr key={personal._id}>
                <td>{personal.nombre}</td>
                <td>{personal.apellido}</td>
                <td>{personal.documento}</td>
                <td>{personal.cargo}</td>
              </tr>
            )
           })}
          </tbody>
        </table>
        </div>
    </>
  )
}

export default AllPersonal;