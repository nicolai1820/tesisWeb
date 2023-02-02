import Select from 'react-select';
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { customStyles } from '../../../../helpers/modal_styles';
import './UsuarioCrearModal.css'
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2';
import { onCrearUsuario } from '../../../../services/usuarios/usuarioService';



const roles = [
    { value: "1", label: "Administrador" },
    { value: "2", label: "Tutor" },
    { value: "3", label: "Jurado" },
    { value: "4", label: "Estudiante" },
];

const verificado = [
    { value: "NoValidado", label: "No validado" },
    { value: "Espera", label: "Espera" },
    { value: "Validado", label: "Validado" }
];

const estado = [
    { value: "0", label: "Desactivado" },
    { value: "1", label: "Activado" },
];

const ciudad = [
    { value: "Bogotá", label: "Bogotá" },
    { value: "Medellin", label: "Medellin" },
    { value: "Cali", label: "Cali" },
];



export const UsuarioCrearModal = ({  state, setState , setmodalCrear, modalCrear}) => {
    const dispatch = useDispatch();
    Modal.setAppElement('#root');

    const [formValues, setFormValues] = useState({});

    useEffect(() => {
        const initialState = {
            id: "",
            email: "",
            cedula: "",
            rol: "",
            estado: "",
            password:""
        }
        setFormValues(initialState);


    }, [])


    //FUNCTION========================
    const closeModal = () => {
        setmodalCrear(false);
    }

    const crearUsuario = async(e) => {
        e.preventDefault();
        console.log();

        if (formValues.password !== formValues.password2) {
            return Swal.fire("Error", "Las contraseñas deben ser iguales", "error");
          }
          debugger;
        const resp = await dispatch(onCrearUsuario( 
            formValues.id,
            formValues.email,
            formValues.cedula,
            formValues.rol,
            formValues.estado,
            formValues.password
            ));
            debugger;
            if (!!resp) {
            setState([...state, resp]);
            }


        //     const newArray = updateStateForId(usuario, resp);
        //     setUsuario([...newArray]);
            closeModal();

    }

    //FIN FUNCTION========================


    return (
        <Modal
            isOpen={modalCrear}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >

            <center><h3>Crear Usuario</h3></center>
            <br />
            <form onSubmit={crearUsuario}>
                <div className="form-row">
                    <div className=" form-grupin col-md-12">
                        <Select options={roles} placeholder="Role"   onChange={(e) => setFormValues({ ...formValues, rol: Number(e.value) })} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <input
                            placeholder="email"
                            type="text"
                            name="email"
                            className="form-control"
                            value={formValues.email}
                            onChange={(e) =>
                                setFormValues({ ...formValues, email: e.target.value })
                            }
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <input
                            placeholder="cedula"
                            type="text"
                            name="cedula"
                            className="form-control"
                            value={formValues.cedula}
                            onChange={(e) =>
                                setFormValues({ ...formValues, cedula: e.target.value })
                            }
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <input
                            placeholder="password"
                            type="password"
                            name="password"
                            className="form-control"
                            value={formValues.password}
                            onChange={(e) =>
                                setFormValues({ ...formValues, password: e.target.value })
                            }
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <input
                            placeholder="confirmar password"
                            type="password"
                            name="password2"
                            className="form-control"
                            value={formValues.password2}
                            onChange={(e) =>
                                setFormValues({ ...formValues, password2: e.target.value })
                            }
                        />
                    </div>
                </div>

                <button className="btn btn-primary">Crear</button>
            </form>

        </Modal>
    )
}
