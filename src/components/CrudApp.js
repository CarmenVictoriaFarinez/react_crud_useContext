import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import DataState from '../context/data/DataState';




const CrudApp = () => {
    return (
        <div>
            <DataState>
                <CrudForm />
                <CrudTable/>
            </DataState> 
        </div>
    )
}

export default CrudApp;
