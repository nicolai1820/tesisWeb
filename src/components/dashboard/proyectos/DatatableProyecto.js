import React, { useEffect, useState } from 'react'
import MaterialTable from 'material-table';
import { lenguage, optionsTable, tableIcons, } from "../../structure/config-datatable";
import { ProyectoEditModal } from './edit-model/ProyectoEditModal';
import { useDispatch } from 'react-redux';
import { updateStateForId } from '../../../helpers/updateState';
import { FooterCard } from '../../structure/card/FooterCard';
import Swal from 'sweetalert2';
import { serviceEliminarCiudad } from '../../../services/ciudades/ciudadService';
import { onCalificarProyecto } from '../../../services/proyecto/crearProyecto';
import { onCalificarFinal, onGenerarActaService } from '../../../services/calificaciones/calificacionService';





export const DatatableProyectos = () => {

    const dispatch = useDispatch();
    const [modalEditar, setmodalEditar] = useState(false);
    const [edit, setEdit] = useState({})
    const [state, setState] = useState([]);



    //PETICION HTTP USEEFFECT
    useEffect(() => {
        async function getData() {
            const url = `${process.env.REACT_APP_MI_VARIABLE_DE_ENTORNO}/api/proyecto`;
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
                setState(respuesta.proyectos);

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
        icon: () => <tableIcons.Search style={{ color: "#00147e" }} />,
        tooltip: 'Calificar',
        onClick: (e, rowData) => { setmodalEditar(true); setEdit(state.find(user => user.id === rowData.id)) },

    },
    {
        icon: () => <tableIcons.DetailPanel style={{ color: "green" }} />,
        tooltip: 'Calcular Nota Final',
        onClick: (e, rowData) => onCalcularNota(state.find(user => user.id === rowData.id))
    },
    {
        icon: () => <tableIcons.Export style={{ color: "orange" }} />,
        tooltip: 'Generar Acta',
        onClick: (e, rowData) => onGenerarActa(state.find(user => user.id === rowData.id))
    },
    {
        icon: () => <tableIcons.Export style={{ color: "blue" }} />,
        tooltip: 'Descargar Proyecto',
        onClick: (e, rowData) => onDescargarProyecto(state.find(user => user.id === rowData.id))
    }
]

    //CREACION DE LAS COLUMNAS QUE SE VAN A MOSTRAR
    const columnas = [
        {
            title: "Codigo",
            field: "id",
            

        },
        {
            title: "Nombre",
            field: "nombre",
            

        },
 
        {
            title: "Estudiante 1",
            field: "estudiante_1.email",
            

        },
        {
            title: "Estudiante 2",
            field: "estudiante_2.email",
            

        },
        {
            title: "Jurado 1",
            field: "jurado_1.email",
            

        },
        {
            title: "Jurado 2",
            field: "jurado_2.email",
            

        },
        {
            title: "Tutor",
            field: "tutor.email",
            

        },

        {
            title: "Nota_Tutor",
            field: "notaTutor",

        },

        {
            title: "Nota_Jurado_1",
            field: "notaJurado1",
 
        },

        {
            title: "Nota_Jurado_2",
            field: "notaJurado2",
        },

        {
            title: "Nota_Final",
            field: "notaFinal",
        },
        
        
        {
            title: "Estado",
            field: "estado",
            render: rowData => (rowData.estado == 1)
                ? <tableIcons.Check style={{ color: "green" }} />
                : <tableIcons.Clear style={{ color: "red" }} />,
                

        },
    ]
    const data = state;
    debugger;
    console.log(edit);
    console.log(state[2]);
    debugger;


    // FUNCTION ==================================
    const onCalcularNota = async (user) => {
        debugger;
        const respuesta = await dispatch(onCalificarFinal(user.id));
 
    }

    const onDescargarProyecto = async (user) => {
        debugger;

        window.open(user.pdf1, '_blank', 'noreferrer');

 
    }

    const onGenerarActa = async (proyecto) => {

 
        if(proyecto.notaJurado1 == null){
        await Swal.fire({
            icon: "error",
            title: "Falta la nota del jurado 1",
            showConfirmButton: false,
            timer: 2000
        });

       }else if(proyecto.notaJurado2== null){
        await Swal.fire({
            icon: "error",
            title: "Falta la nota del jurado 2",
            showConfirmButton: false,
            timer: 2000
        });

       }else if(proyecto.notaTutor== null){
        await Swal.fire({
            icon: "error",
            title: "Falta la nota del tutor",
            showConfirmButton: false,
            timer: 2000
        });
       }else{
            window.open(`http://localhost:8000/api/proyecto/acta/${proyecto.id}`, '_blank', 'noreferrer');
       }

 
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

                    <ProyectoEditModal setmodalEditar={setmodalEditar} 
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



