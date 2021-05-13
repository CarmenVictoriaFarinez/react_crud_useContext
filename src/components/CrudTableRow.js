import React, { useContext } from 'react';
import DataContext from '../context/data/DataContext';

const CrudTableRow = () => {
    const { createData, updateData, users, deleteData } = useContext(DataContext);
    let {name, gender, id} = users;
    return (
        <table>
            <tbody>
                <tr>
                    <td>{name}</td>
                    <td>{gender}</td>
                    <td>
                        <button >Editar</button>
                        <button onClick = {() => deleteData(id)}>Eliminar</button>
                    </td> 
                </tr>
            </tbody>
        </table>
    )
}

export default CrudTableRow
