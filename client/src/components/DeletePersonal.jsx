import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {MdDeleteForever} from 'react-icons/md';
import {ModalBody,Modal} from 'reactstrap';

const urlAllPersonal = 'http://localhost:8080/ccviva/all';
const urlDeletePersonal = 'http://localhost:8080/ccviva/deleteRegister/';

const DeletePersonal = () => {

  const [data,setData] = useState([]);


  //STATE PARA MANEJAR LA VENTANA MODAL
  const [abrirmodal,setAbrirmodal] = useState(false);

 //ES EL ESTADO DEL PERSONAL SELECCIONADO CARGA LOS CAMPOS VACIOS PARA LLENARLOS POR LOS QUE HEMOS SELECCIONADO EN LA TABLA 
  const [seleccionado,setSeleccionado] = useState({
    nombre:'',
    apellido:'',
    documento:'',
    cargo:''
  });

  //FUNCION QUE ABRE Y CIERR EL MODAL
  const openModal = () =>{
    setAbrirmodal(!abrirmodal)
  }


  //FUNCION PARA CAMBIAR EL STATE SELECIONADO CON LOS DATOS SELECCIONADOS
  const personalSeleccionado = (personal,modalEs) => {
    setSeleccionado(personal);
    (modalEs ==="eliminar")&&openModal();
    console.log(personal)
  }

  //funcion que hace la peticion get
  const peticionesGet = () =>{
    axios.get(urlAllPersonal)
    .then(response=>{
      setData(response.data)
      
    })
  }

  //FUNCION QUE REALIZA LA PETICION DELETE
  const peticionDelete = async()=>{
    axios.delete(urlDeletePersonal+seleccionado._id)
    .then(()=>{
      setData(data.filter(personal=>personal._id!==seleccionado._id));
      openModal()
    })
  }




  useEffect(() => {
    peticionesGet()
  }, [])


  return (
    <div>
      <h3 className='m-2'>Eliminar Personal</h3>
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
                <td >
                  <button className='btn btn-danger ' onClick={()=>personalSeleccionado(personal,"eliminar")} ><MdDeleteForever/>Eliminar</button>
                </td>
              </tr>
            )
           })}
          </tbody>
        </table>



           <Modal isOpen={abrirmodal}>
             <ModalBody>
              <div className='form-group'>
                <h6>ELIMINAR PERSONAL</h6>
              </div>
              <div>
                <button onClick={()=>peticionDelete()} className='btn btn-danger'>Borrar</button>
                <button onClick={()=>openModal()} className='btn btn-success'>Cancelar</button>
              </div>
             </ModalBody>
           </Modal>



    </div>
  )
}

export default DeletePersonal;