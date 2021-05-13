import React, { useState, useEffect, useContext } from 'react';
import DataContext from '../context/data/DataContext';


const initialForm = {
    name:'',
    gender:''
}

const CrudForm = () => {
    const { createData, edited, updateData } = useContext(DataContext);
    const [form, setform] = useState(initialForm);

    useEffect(() => {
        if(edited){
            setform(edited);
        }else{
            setform(initialForm);
        }

    }, [edited]);

    const handleChange= (e) =>{
        setform({
            ...form,
            [e.target.name]: e.target.value, 
        })
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        if(!form.name || !form.gender){
            alert('Datos incompletos');
            return
        }

        if(form.id){
           updateData(form);
            console.log(form)
       }else{
        form.id = Date.now();
        createData(form);
        }
    }

    return (
        <div>
            <h3>{edited ? 'Editar' : 'Agregar'}</h3>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={form.name} type="text" name="name" placeholder="Nombre"/>
                <input onChange={handleChange} value={form.gender} type="text" name="gender" placeholder="Género"/>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    )
}

export default CrudForm
