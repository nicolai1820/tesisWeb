import Select from 'react-select';
import React, { useEffect, useState } from 'react'
import { UserCharts } from '../../charts/UserCharts'
import { FooterCard } from '../../structure/card/FooterCard'
import { HeadCard } from '../../structure/card/HeadCard'
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { onCrearProyecto } from '../../../services/proyecto/crearProyecto';


const estado = [
    { value: "0", label: "Desactivado" },
    { value: "1", label: "Activado" },
];




export const HomePage = () => {
   const {email, id, rol} = useSelector(state => state.auth);
   const dispatch = useDispatch();

   const [formValues, setFormValues] = useState({
    nombre:"",
    descripcion:"",
    estudiante1:0,
    estudiante2:0,
    jurado1:0,
    jurado2:0,
    tutor1:0,
    ciudad:107,
    pdf1:0
   });




    const [puntaje, setPuntaje] = useState();
    const [validRol, setValidRol] = useState(false);
    const [buttonOk, setButtonOk] = useState(false);
    const [proyectoOk, setProyectoOk] = useState(false);
    const [usuarioJurado, setUsuariosJurado] = useState([]);
    const [usuarioTutor, setUsuariosTutor] = useState([]);
    const [usuarioEstudiante, setUsuariosEstudiante] = useState([]);
    const [ciudades, setCiudades] = useState([]);

        //PETICION HTTP USEEFFECT

        useEffect(() => {
            async function getData() {
                debugger;
                if (rol == 1 || rol == 2) {
                    setValidRol(true)
                }
            }
            getData();
    
        }, [rol]);

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
                    let listaUsuariosJurado=[];
                    let listaUsuariosTutor=[];
                    let listaUsuariosEstudiante=[];
                    console.log("RESPUESTA USUARIOS:", respuesta);

                    respuesta.usuarios.forEach(element => {
                        if (element.id_rol == 2) {
                            listaUsuariosTutor.push({
                                value:element.id,
                                label:element.email
                            })
                        }else if(element.id_rol == 3){
                            listaUsuariosJurado.push({
                                value:element.id,
                                label:element.email
                            })
                        }else if(element.id_rol == 4){
                            listaUsuariosEstudiante.push({
                                value:element.id,
                                label:element.email
                            })
                        }
                        debugger;
                    });
                    setUsuariosEstudiante( listaUsuariosEstudiante != undefined ? listaUsuariosEstudiante:[]);
                    setUsuariosJurado(listaUsuariosJurado != undefined ? listaUsuariosJurado:[]);
                    setUsuariosTutor(listaUsuariosTutor != undefined ? listaUsuariosTutor:[]);
                } else {
                    if(respuesta.msg === undefined){
                        Swal.fire('Error', respuesta.errors[0].msg, 'error');
                    }else{
                        Swal.fire('Error', respuesta.msg, 'error');
                    }  
                }
            }
            getData();
    
        }, [setUsuariosEstudiante, setUsuariosJurado, setUsuariosTutor]);

        useEffect(() => {
            async function getData() {
                const url = "http://localhost:8000/api/ciudad/activas";
    
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
                    let listaCiudad=[];
                    console.log("RESPUESTA CIUDADES:", respuesta);

                    respuesta.ciudades.forEach(element => {
                    
                            listaCiudad.push({
                                value:element.id,
                                label:element.ciudad
                            })
                    });
                    setCiudades(listaCiudad != undefined ? listaCiudad:[]);
                } else {
                    if(respuesta.msg === undefined){
                        Swal.fire('Error', respuesta.errors[0].msg, 'error');
                    }else{
                        Swal.fire('Error', respuesta.msg, 'error');
                    }  
                }
            }
            getData();
    
        }, [setUsuariosEstudiante, setUsuariosJurado, setUsuariosTutor]);

    const openTurnitin = () => {
        window.open('https://www.turnitin.com/login_page.asp?lang=es_ES', '_blank', 'noreferrer');
    }

        //PETICION HTTP USEEFFECT
        useEffect(() => {
            async function getData() {
                if (puntaje <= 10 && puntaje != 0) {
                    setButtonOk(true);
                }else{
                    setButtonOk(false);
                    if (puntaje != undefined && puntaje!= 0) {
                        Swal.fire('Error', "¡Debe replantear su tesis!", 'error');
                    }

                }
            }
            getData();
    
        }, [puntaje]);

    // const crearProyecto = () => {
    //     setProyectoOk(true);
    // }

    const registrarProyecto = (e) => {
        e.preventDefault();
        console.log("FORMVALUES",formValues);

        dispatch(onCrearProyecto(
            formValues.nombre, 
            formValues.descripcion, 
            formValues.estudiante1,
            formValues.estudiante2,
            formValues.jurado1,
            formValues.jurado2,
            formValues.tutor1,
            formValues.ciudad,
            formValues.pdf1
            ));

    }

    console.log("usuarioEstudiante", usuarioEstudiante);
    console.log("usuarioJurado", usuarioJurado);
    console.log("usuarioTutor", usuarioTutor);

    const onPdf1 = (e) => {
        e.preventDefault();
        setFormValues({
          ...formValues,
          pdf1: e.target.files[0],
        });
        // debugger;
      };

    return (
        <>
       
  
            <div className="content-wrapper">
            <HeadCard titulo="CREAR PROYECTO" />
            <section className="content">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title"></h3>
                    </div>
                    <div className="card-body">
                

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <div className='form-row'>
                            <div className="form-group col-md-4">
                        <input
                                placeholder="Ingrese Puntaje %"
                                type="number"
                                name="puntaje"
                                className="form-control"
                                value={puntaje}
                                onChange={(e) =>
                                    setPuntaje(e.target.value)
                                }
                            />
                        </div>
                            <div className="form-group col-md-8">
                                <button className="btn btn-primary mr-2" onClick={openTurnitin}>Turnitin</button>

                                
                                {/* <button className="btn btn-primary" disabled={buttonOk ? false: true } onClick={crearProyecto}>Crear Proyecto</button> */}

                            </div>
                            <div className="form-group col-md-3">
                            </div>
                            </div>
        
                        </div>
                
                    </div>


{buttonOk ?(
           <form onSubmit={registrarProyecto}>
           <div className="form-row">
                    <div className="form-group col-md-6">
                        <input
                            placeholder="Nombre Proyecto"
                            type="text"
                            name="nombrep"
                            className="form-control"
                            value={formValues.nombre}
                            onChange={(e) =>
                                setFormValues({ ...formValues, nombre: e.target.value })
                            }
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <input
                            placeholder="Descripcion Proyecto"
                            type="text"
                            name="descripcionp"
                            className="form-control"
                            value={formValues.descripcion}
                            onChange={(e) =>
                                setFormValues({ ...formValues, descripcion: e.target.value })
                            }
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-groupin col-md-6">
                        <b>
                        <span>Estudiante 1:</span>
                        </b>
                    <Select 
                        options={usuarioEstudiante} 
                        placeholder="Selecionar..."  
                        onChange={(e) => setFormValues({ ...formValues, estudiante1: Number(e.value) })} 
                        />
                    </div>
                    <div className="form-groupin col-md-6">
                    <b>
                        <span>Estudiante 2:</span>
                        </b>
                    <Select
                        options={usuarioEstudiante} 
                        placeholder="Seleccionar..."  
                        onChange={(e) => setFormValues({ ...formValues, estudiante2: Number(e.value) })} 
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-groupin col-md-6">
                        <b>
                        <span>Jurado 1:</span>
                        </b>
                    <Select 
                        options={usuarioJurado} 
                        placeholder="Seleccionar..."  
                        onChange={(e) => setFormValues({ ...formValues, jurado1: Number(e.value) })} 
                        />
                    </div>
                    <div className="form-groupin col-md-6">
                    <b>
                        <span>Jurado 2:</span>
                        </b>
                    <Select
                        options={usuarioJurado} 
                        placeholder="Seleccionar..."  
                        onChange={(e) => setFormValues({ ...formValues, jurado2: Number(e.value) })} 
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-groupin col-md-6">
                        <b>
                        <span>Tutor 1:</span>
                        </b>
                    <Select 
                        options={usuarioTutor} 
                        placeholder="Seleccionar..."  
                        onChange={(e) => setFormValues({ ...formValues, tutor1: Number(e.value) })} 
                        />
                    </div>
                    <div className="form-groupin col-md-6">
                    <b>
                        <span>Ciudad:</span>
                        </b>
                    <Select 
                        options={ciudades} 
                        placeholder="Seleccionar..."  
                        onChange={(e) => setFormValues({ ...formValues, ciudad: Number(e.value) })} 
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-groupin col-md-6">
                        <b>
                        <span>Cargar PDF:</span>
                        </b>
                        <input
                            placeholder="PDF Proyecto"
                            type="file"
                            name="Pdf"
                            className="form-control"
                            onChange={(e) =>
                                onPdf1(e)
                            }
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-groupin col-md-12">
                    <button className="btn btncrear mt-4">Crear</button>
                    </div>
                </div>
                
           </form>
              ):<h1></h1>}

                    </div>
                    {/* <FooterCard /> */}

                </div>
            </section>
        </div>
     
        
        </>
    )
}
