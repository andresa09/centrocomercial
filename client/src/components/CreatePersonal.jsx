import React, {useState,useEffect} from 'react';
import axios from 'axios';

const CreatePersonal = () => {
  
  const urlCreatePersonal = 'http://localhost:8080/ccviva/sendRegister';
  const urlAllPersonal = 'http://localhost:8080/ccviva/all';

  //PARA EL ARRAY PARA LA PETICION GET   
  const [data,setData] = useState([]);

  // CAMBIAR EL VALOR DEL INPUT  
  const [seleccionado,setSeleccionado] = useState({
    nombre:'',
    apellido:'',
    documento:'',
    cargo:''
  });


  //PARA ENVIAR LOS DATOS   
  const peticionPost = async(evento) =>{
    //preventDefault sirve para que la pagina no se refresque (comportamiento natural del formulario)
    evento.preventDefault()
    await axios.post(urlCreatePersonal,seleccionado)
    .then(response=>{
      setData(data.concat(response.data))
    })
    setSeleccionado('')
  }

  //FUNCION PARA CAPTURAR LOS DATOS DEL INPUT 
  const valueInput = (evento) =>{
    const {name,value}=evento.target;
    setSeleccionado(prevState=>({
    ...prevState,
    [name]: value
    })
    )
  }

  const peticionesGet = () =>{
    axios.get(urlAllPersonal)
    .then(response=>{
      setData(response.data)
      
    })
  }

  useEffect(() => {
    peticionesGet()
  }, [])




  return (
    <div>
      <h3 className='m-2'>
        Registrar Personal
      </h3>
      <form onSubmit={peticionPost} className='w-50 mx-auto mt-4'>
        <div className="mb-3">
            <label className="form-label">NOMBRE</label>
            <input required onChange={valueInput} type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label className="form-label">APELLIDO</label>
            <input required onChange={valueInput} type="text" className="form-control"/>
        </div>
        <div className="mb-3">
            <label className="form-label">DOCUMENTO</label>
            <input required onChange={valueInput} type="number" min={1} className="form-control"/>
        </div>
        <div className="mb-3">
            <label className="form-label">CARGO</label>
            <input required onChange={valueInput} type="text" className="form-control"/>
        </div>

        <button type="submit" className="btn btn-primary">ENVIAR</button>
        </form>

    </div>
  )
}

export default CreatePersonal;