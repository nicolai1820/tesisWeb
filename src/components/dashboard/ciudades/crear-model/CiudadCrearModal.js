import Select from 'react-select';
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { customStyles } from '../../../../helpers/modal_styles';
import './CiudadCrearModal.css'
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2';
import { onCrearUsuario } from '../../../../services/usuarios/usuarioService';
import { onCrearCiudad } from '../../../../services/ciudades/ciudadService';




export const CiudadCrearModal = ({  state, setState , setmodalCrear, modalCrear}) => {
    const dispatch = useDispatch();
    Modal.setAppElement('#root');

    const [formValues, setFormValues] = useState({});

    useEffect(() => {
        const initialState = {
            ciudad: "",
        }
        setFormValues(initialState);


    }, [])


    //FUNCTION========================
    const closeModal = () => {
        setmodalCrear(false);
    }

    const crear = async(e) => {
        e.preventDefault();
          debugger;
        const resp = await dispatch(onCrearCiudad( 
            formValues.ciudad,
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

            <center><h3>Crear Ciudad</h3></center>
            <br />
            <form onSubmit={crear}>
                <div className="form-row">
                    <div className="form-grupin col-md-12">
                        <input
                            placeholder="Ingrese una ciudad"
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

                <button className="btn btncrear">Crear</button>
            </form>

        </Modal>
    )
}
