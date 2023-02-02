import React, { useEffect, useState } from 'react'
import MaterialTable from 'material-table';
import { lenguage, optionsTable, tableIcons, } from "../../structure/config-datatable";
import { PreguntaEditModal } from './edit-model/PreguntaEditModal';
import { useDispatch } from 'react-redux';
import { updateStateForId } from '../../../helpers/updateState';
import { FooterCard } from '../../structure/card/FooterCard';
import Swal from 'sweetalert2';
import { serviceEliminarCiudad } from '../../../services/ciudades/ciudadService';





export const DatatablePreguntas = () => {

    const dispatch = useDispatch();
    const [modalEditar, setmodalEditar] = useState(false);
    const [edit, setEdit] = useState({})
    const [state, setState] = useState([]);



    //PETICION HTTP USEEFFECT
    useEffect(() => {
        async function getData() {
            const url = `${process.env.REACT_APP_MI_VARIABLE_DE_ENTORNO}/api/pregunta`;
            const resp = await fetch(url,
                {
                    method: "GET",
                    headers: {
                        'Content-type': 'application/json',
                        'x-token': localStorage.getItem('token')
                    },
                }
            );
            const respuesta = await resp.json();

            debugger;
            if (resp.ok) {
                setState(respuesta.preguntas);

            } else {
                if (respuesta.msg === undefined) {
                    Swal.fire('Error', respuesta.errors[0].msg, 'error');
                } else {
                    Swal.fire('Error', respuesta.msg, 'error');
                }
            }
        }
        getData();

    }, [setState]);


    debugger;



    //===========CONFIG TABLE ============================================
    const acciones = [{
        icon: () => <tableIcons.Edit style={{ color: "#FFC007" }} />,
        tooltip: 'Editar',
        onClick: (e, rowData) => { setmodalEditar(true); setEdit(state.find(user => user.id === rowData.id)) },

    },
    // {
    //     icon: () => <tableIcons.Delete style={{ color: "#DC3444" }} />,
    //     tooltip: 'Eliminar',
    //     onClick: (e, rowData) => onEliminar(state.find(user => user.id === rowData.id))
    // }
]

    //CREACION DE LAS COLUMNAS QUE SE VAN A MOSTRAR
    const columnas = [
        {
            title: "Codigo",
            field: "id",
            width: "10%"

        },
        {
            title: "Pregunta",
            field: "pregunta",
        },
    ]
    const data = state;
    debugger;


    // FUNCTION ==================================
    const onEliminar = async (user) => {
        debugger;
        const respuesta = await dispatch(serviceEliminarCiudad(user.id));
        debugger;
        const newArray = updateStateForId(state, respuesta);
        debugger;
        setState([...newArray]);
    }
    // FIN FUNCTION ==================================

    return (
        <>
            <div className="card-body">
                <div>
                    <MaterialTable
                        icons={tableIcons}
                        columns={columnas}
                        data={data}
                        title={""}
                        options={optionsTable}
                        localization={lenguage}
                        actions={acciones}
                    // detailPanel={rowData => {
                    //     return (
                    //         <div>
                    //             <h1>{rowData.genero}</h1>
                    //         </div>)
                    // }}
                    />

                    <PreguntaEditModal setmodalEditar={setmodalEditar} 
                    modalEditar={modalEditar}
                    editar={edit} 
                    state={state} 
                    setState={setState} 
                    />

                </div>
            </div>

        </>
    )
}



