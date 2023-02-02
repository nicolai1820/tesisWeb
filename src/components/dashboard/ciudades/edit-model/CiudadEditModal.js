import Select from 'react-select';
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { customStyles } from '../../../../helpers/modal_styles';
import './CiudadEditModal.css'
import { useDispatch } from "react-redux";
import { onEditarCiudad } from '../../../../services/ciudades/ciudadService';
import { updateStateForId } from '../../../../helpers/updateState';


const estado = [
    { value: "0", label: "Desactivado" },
    { value: "1", label: "Activado" },
];



export const CiudadEditModal = ({ setmodalEditar, modalEditar, editar, state, setState }) => {
    const dispatch = useDispatch();
    Modal.setAppElement('#root');

console.log(editar);

    const [formValues, setFormValues] = useState({});

    useEffect(() => {
        const initialState = {
            id: editar.id,
            ciudad: editar.ciudad,
            estado: editar.estado,
        }
        debugger;
        setFormValues(initialState);
        debugger;
    }, [editar])





    //FUNCTION========================
    const closeModal = () => {
        setmodalEditar(false);
    }

    const editarUsuario = async(e) => {
        e.preventDefault();

        const resp = await dispatch(onEditarCiudad(
            formValues.id, 
            formValues.ciudad,
            formValues.estado,
            ));

            const newArray = updateStateForId(state, resp);
            setState([...newArray]);
            closeModal();

    }

    //FIN FUNCTION========================


    return (
        <Modal
            isOpen={modalEditar}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className='popup'>
                

           <center><h3>Editar Ciudad</h3></center>
            <br />
            <form onSubmit={editarUsuario}>

                <div className="form-row">
                    <div className="form-grupin col-md-12">
                        <input
                            placeholder="Ciudad"
                            type="text"
                            name="ciudad"
                            className="form-control"
                            value={formValues.ciudad}
                            onChange={(e) =>
                                setFormValues({ ...formValues, ciudad: e.target.value })
                            }
                        />
                    </div>
                </div>
                <div className="form-row">
                <div className=" form-grupin col-md-12">
                        <Select
                        options={estado}
                        value={{
                            value: formValues.estado,
                            label: formValues.estado==1?"Activo":"Desactivado"
                          }}
                        placeholder="Estado"  
                        onChange={(e) => setFormValues({ ...formValues, estado: e.value })} 
                        />
                    </div>
                </div>

                <button className="btn btncrear">Editar</button>
            </form>
            </div>

        </Modal>
    )
}
