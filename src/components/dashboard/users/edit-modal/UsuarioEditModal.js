import Select from 'react-select';
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { customStyles } from '../../../../helpers/modal_styles';
import './UsuarioEditModal.css'
import { useDispatch } from "react-redux";
import { onEditarUsuario } from '../../../../services/usuarios/usuarioService';
import { updateStateForId } from '../../../../helpers/updateState';



const roles = [
    { value: "1", label: "Administrador" },
    { value: "2", label: "Tutor" },
    { value: "3", label: "Jurado" },
    { value: "4", label: "Estudiate" },
];

const estado = [
    { value: "0", label: "Desactivado" },
    { value: "1", label: "Activado" },
];



export const UsuarioEditModal = ({ setmodalEditar, modalEditar, editar, state, setState }) => {
    const dispatch = useDispatch();
    Modal.setAppElement('#root');

    const [formValues, setFormValues] = useState({});
    debugger;

console.log("editar::::::", editar);
    useEffect(() => {
        const initialState = {
            id: editar.id,
            email: editar.email,
            password: "",
            estado: editar.estado,
            cedula: editar.cedula,
            rol_id: editar.id_rol,
            rol: editar.roleLabel, 
        }
        debugger;

        
        setFormValues(initialState);


    }, [editar])


    //FUNCTION========================
    const closeModal = () => {
        setmodalEditar(false);
    }

    const editarUsuario = async(e) => {
        e.preventDefault();

        const resp = await dispatch(onEditarUsuario(
                formValues.id,
                formValues.password,
                formValues.cedula,
                formValues.estado,
            ));
            closeModal();

    }

    //FIN FUNCTION========================

console.log("DESDE EDITAR;:", formValues);
    return (
        <Modal
            isOpen={modalEditar}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >

            <center><h3>Editar Usuario</h3></center>
            <br />
            <form onSubmit={editarUsuario}>

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
                    <div className=" form-grupin col-md-6">
                    <input
                            placeholder="password"
                            type="text"
                            name="password"
                            className="form-control"
                            value={formValues.password}
                            onChange={(e) =>
                                setFormValues({ ...formValues, email: e.target.value })
                            }
                        />
                    </div>
                    <div className=" form-grupin col-md-6">
                        <Select 
                        options={estado} 
                        placeholder="Estado"  
                        value={{
                            value: (formValues.estado)?1:0,
                            label: (formValues.estado)?"Activado":"Desactivado"
                          }}
                        onChange={(e) => setFormValues({ ...formValues, estado: Number(e.value) })} 
                        />
                    </div>
                </div>

                {/* <div className="form-row">
                    <div className=" form-grupin col-md-6">
                        <Select options={verificado} 
                        placeholder="Verificado"  
                        value={{
                            value: formValues.verificado,
                            label: formValues.verificado
                          }}
                        onChange={(e) => setFormValues({ ...formValues, verificado: e.value })} 
                        />
                    </div>
                    <div className=" form-grupin col-md-6">
                        <Select
                        options={ciudad}
                        value={{
                            value: formValues.ciudad,
                            label: formValues.ciudad
                          }}
                        placeholder="Ciudad"  
                        onChange={(e) => setFormValues({ ...formValues, ciudad: e.value })} 
                        />
                    </div>
                </div> */}
                <button className="btn btn-primary">Editar</button>
            </form>

        </Modal>
    )
}
