import React, { useReducer } from 'react';
import Reducer from './Reducer';
import DataContext from './DataContext';
import { DELETE_DATA, CREATE_DATA, UPDATE_DATA, EDITED_DATA } from '../types';

const initialState = { 
   users: [
      {   id: 1,
         name: 'Pedro',
         gender: 'Masculino'
      },
      {   id: 2,
          name: 'Marina',
          gender: 'Femenino'
       },
       {  id: 3,
          name: 'Esteban',
          gender: 'Masculino'
       },
       {   id: 4,
          name: 'Pedro',
          gender: 'Masculino'
       },
       {   id: 5,
           name: 'Marina',
           gender: 'Femenino'
        },
        {  id: 6,
           name: 'Esteban',
           gender: 'Masculino'
        }
   ],
   edited: null
}

const DataState = (props) => {
   
 const [ state, dispatch ] = useReducer(Reducer, initialState);
  
 const createData = (data) => {
          dispatch ({
              type: CREATE_DATA,
              payload: data
          })
         }

   const editedData = (data) => {
      dispatch({
         type: EDITED_DATA,
         payload: data
      })
   }
   const updateData = (data) => {
        dispatch({
           type: UPDATE_DATA,
           payload: data
        })
   }

   const deleteData = (id) => {
      let isDelete = window.confirm
      (`¿Estas seguro de eliminar el registro?`);
      if(isDelete){
         dispatch({
            type: DELETE_DATA,
            payload: id
         })
      }
      console.log(id)
  }


      return (
         <DataContext.Provider value={{users: state.users, edited: state.edited, createData, deleteData, editedData, updateData}}>
            {props.children}
         </DataContext.Provider>
      )
   }

   export default DataState;

