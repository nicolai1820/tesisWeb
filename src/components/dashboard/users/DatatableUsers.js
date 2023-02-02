import React, { useEffect, useState } from 'react'
import MaterialTable from 'material-table';
import { lenguage, optionsTable, tableIcons, } from "../../structure/config-datatable";
import { UsuarioEditModal } from './edit-modal/UsuarioEditModal';
import { useDispatch } from 'react-redux';
import { serviceEliminarUsuario } from '../../../services/usuarios/usuarioService';
import { updateStateForId } from '../../../helpers/updateState';
import { FooterCard } from '../../structure/card/FooterCard';
import Swal from 'sweetalert2';


export const DatatableUsers = () => {

    const dispatch = useDispatch();
    const [modalEditar, setmodalEditar] = useState(false);
    const [edit, setEdit] = useState({
        cedula: "",
        id_rol: "",
        email: "",
        password: "",
    })
    const [state, setState] = useState([]);


    //PETICION HTTP USEEFFECT
    useEffect(() => {
        async function getData() {
            const url = "http://localhost:8000/api/users";

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
                console.log("RESPUESTA USUARIOS:", respuesta);
                setState(respuesta.usuarios);
            } else {
                if(respuesta.msg === undefined){
                    Swal.fire('Error', respuesta.errors[0].msg, 'error');
                }else{
                    Swal.fire('Error', respuesta.msg, 'error');
                }  
            }
        }
        getData();

    }, [setState]);

    //===========CONFIG TABLE ============================================
    const acciones = [{
        icon: () => <tableIcons.Edit style={{ color: "#FFC007" }} />,
        tooltip: 'Editar',
        onClick: (e, rowData) => { setmodalEditar(true); setEdit(state.find(user => user.id === rowData.id)) },

    },
    {
        icon: () => <tableIcons.Delete style={{ color: "#DC3444" }} />,
        tooltip: 'Eliminar',
        onClick: (e, rowData) => onEliminarUsuario(state.find(user => user.id === rowData.id))
    }]

    //CREACION DE LAS COLUMNAS QUE SE VAN A MOSTRAR
    const columnas = [
        {
            title: "Codigo",
            field: "id"
        },
        {
            title: "Email",
            field: "email"
        },
        {
            title: "Cedula",
            field: "cedula"
        },
        {
            title: "Rol",
            field: "role.rol",
        },
        {
            title: "Estado",
            field: "estado",
            render: rowData => (rowData.estado)
                ? <tableIcons.Check style={{ color: "green" }} />
                : <tableIcons.Clear style={{ color: "red" }} />

        },
    ]
    const data = state;

    // FUNCTION ==================================
    const onEliminarUsuario = async (user) => {
        debugger;
        const respuesta = await dispatch(serviceEliminarUsuario(user.id));
        const newArray = updateStateForId(state, respuesta);
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

                    <UsuarioEditModal setmodalEditar={setmodalEditar} modalEditar={modalEditar}
                        editar={edit} state={state} setState={setState} />

                </div>
            </div>
            <FooterCard  
            setmodalEditar={setmodalEditar} 
            modalEditar={modalEditar}
            texto={"Crear Usuario"}
            editar={edit} 
            state={state} 
            setState={setState}
            modalKey={"usuario"}/>
        </>
    )
}



