import React from 'react'

const UpdatePersonal = () => {
    

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
            <tr>
              <th>1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
        </>
  )
}

export default UpdatePersonal;