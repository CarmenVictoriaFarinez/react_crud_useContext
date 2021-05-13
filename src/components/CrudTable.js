import React, { useContext } from 'react'
import DataContext from '../context/data/DataContext';

const CrudTable = () => {
    const { users, deleteData, editedData } = useContext(DataContext);

 
    
    return (
        <div>
            <h3>Tabla de Datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Género</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
             
                {users.map((user) => (
                  <tr
                    key={user.id}
                    
                  >
                    <td>{user.name}</td>
                    <td>{user.gender}</td>
                    
                    <td>
                         <button onClick= {() => editedData(user)}>Editar</button> 
                         <button onClick = {() => deleteData(user.id)}>Eliminar</button> 
                    </td> 
                  </tr>
                ))
              }   
                </tbody>
            </table>
        </div>
    )
}

export default CrudTable
