import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {AiFillEdit} from 'react-icons/ai';
import {ModalBody,Modal} from 'reactstrap';

const urlAllPersonal = 'http://localhost:8080/ccviva/all';
const urlUpdatePersonal ='http://localhost:8080/ccviva/updateRegister/';

const UpdatePersonal = () => {

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
    (modalEs ==="editar")&&openModal();
    console.log(personal)
  }

 //CAPTURA LO QUE SE ESCRIBI EN LOS INPUT Y LOS AGREGA A SELECCIONADO
  const valueInput = (e) =>{
    const {name,value}=e.target;
    setSeleccionado(prevState=>({
    ...prevState,
    [name]: value
    })
    )
  }


  //FUNCION QUE REALIZA LA PETICION GET (ALL)
  const peticionesGet = () =>{
    axios.get(urlAllPersonal)
    .then(response=>{
      setData(response.data)
      
    })
  }


  //FUNCION QUE REALIZA LA PETICION PUT
  const peticionPut = async()=>{
    await axios.put(urlUpdatePersonal+seleccionado._id,seleccionado)
    .then(()=>{
      let newData=data;
      //eslint-disable-next-line
      newData.map(personal=>{
        if (seleccionado._id === personal._id ){
          personal.nombre=seleccionado.nombre;
          personal.apellido=seleccionado.apellido;
          personal.documento=seleccionado.documento;
          personal.cargo=seleccionado.cargo;
        }
      })
      setData(newData);
      openModal()
    })
  } 

  useEffect(() => {
    peticionesGet()
  }, [])


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
                <td >
                  <button className='btn btn-secondary' onClick={()=>personalSeleccionado(personal,"editar")}><AiFillEdit/>Editar</button>
                </td>
              </tr>
            )
           })}
          </tbody>
        </table>
        
        <Modal isOpen={abrirmodal}>
          <ModalBody>
          <div>
            <h3 className='m-2'>
              Editar Personal
            </h3>
              <div className='w-50 mx-auto mt-4'>
                <div className="mb-3">
                    <label className="form-label">NOMBRE</label>
                    <input value={seleccionado && seleccionado.nombre} name="nombre" required onChange={valueInput} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">APELLIDO</label>
                    <input value={seleccionado && seleccionado.apellido} name="apellido" required onChange={valueInput} type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">DOCUMENTO</label>
                    <input value={seleccionado && seleccionado.documento} name="documento" required onChange={valueInput} type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">CARGO</label>
                    <input value={seleccionado && seleccionado.cargo} name="cargo" required onChange={valueInput} type="text" className="form-control"/>
                </div>
                <div>
                   <button onClick={()=>peticionPut()} className="btn btn-primary">EDITAR</button>
                   <button onClick={()=>openModal()} className="btn btn-primary">CANCELAR</button>
                </div>
                
              </div>

          </div>
          </ModalBody>
        </Modal>



        </>
  )
}

export default UpdatePersonal;