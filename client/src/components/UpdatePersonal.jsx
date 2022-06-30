import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {AiFillEdit} from 'react-icons/ai';

const UpdatePersonal = () => {

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
    <h3 className='m-2'>Actualizar Personal</h3>
    <table className="table">
          <thead>
            <tr>
              
              <th scope="col">Nombre</th>
              <th scope="col">Documento</th>
              <th scope="col">Cargo</th>
              <th scope="col">Accion</th>
            </tr>
          </thead>
          <tbody>
          {data.map(personal=>{
            return( 
              <tr key={personal._id}>
                <td>{personal.nombre}</td>
                <td>{personal.documento}</td>
                <td>{personal.cargo}</td>
                <td><AiFillEdit/>Edit</td>
              </tr>
            )
           })}
          </tbody>
        </table>
        </>
  )
}

export default UpdatePersonal;