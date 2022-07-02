import React, {useState,useEffect} from 'react';
import axios from 'axios';

const urlCreatePersonal = "http://localhost:8080/ccviva/sendRegister";
const urlAllPersonal = "http://localhost:8080/ccviva/all";


const CreatePersonal = () => {

  //PARA EL ARRAY PARA LA PETICION GET   
  const [data,setData] = useState([]);

  // CAMBIAR EL VALOR DEL INPUT  
  const [seleccionado,setSeleccionado] = useState({
    nombre:'',
    apellido:'',
    documento:'',
    cargo:''
  });

  const peticionesGet = () =>{
    axios.get(urlAllPersonal)
    .then(response=>{
      setData(response.data)
      
    })
  }



  //PARA ENVIAR LOS DATOS   
  const peticionPost = async(e) =>{
    //preventDefault sirve para que la pagina no se refresque (comportamiento natural del formulario)
    // e.preventDefault()
    await axios.post(urlCreatePersonal,seleccionado)
    .then(response=>{
      setData(data.concat(response.data))
    })
    console.log(seleccionado)
    setSeleccionado({
      nombre:'',
      apellido:'',
      documento:'',
      cargo:''
    })
    console.log(seleccionado)
  }

  //FUNCION PARA CAPTURAR LOS DATOS DEL INPUT 
  const valueInput = (e) =>{
    const {name,value}=e.target;
    setSeleccionado(prevState=>({
    ...prevState,
    [name]: value
    })
    )
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
            <input name="nombre" required onChange={valueInput} type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label className="form-label">APELLIDO</label>
            <input name="apellido" required onChange={valueInput} type="text" className="form-control"/>
        </div>
        <div className="mb-3">
            <label className="form-label">DOCUMENTO</label>
            <input name="documento" required onChange={valueInput} type="text" className="form-control"/>
        </div>
        <div className="mb-3">
            <label className="form-label">CARGO</label>
            <input name="cargo" required onChange={valueInput} type="text" className="form-control"/>
        </div>

        <button type="submit" className="btn btn-dark">ENVIAR</button>
        </form>

    </div>
  )
}

export default CreatePersonal;