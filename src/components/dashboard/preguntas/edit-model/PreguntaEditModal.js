import Select from 'react-select';
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { customStyles } from '../../../../helpers/modal_styles';
import './PreguntaEditModal.css'
import { useDispatch } from "react-redux";
import { onEditarCiudad } from '../../../../services/ciudades/ciudadService';
import { updateStateForId } from '../../../../helpers/updateState';
import { onEditarPregunta } from '../../../../services/preguntas/preguntaService';



export const PreguntaEditModal = ({ setmodalEditar, modalEditar, editar, state, setState }) => {
    const dispatch = useDispatch();
    Modal.setAppElement('#root');

console.log(editar);

    const [formValues, setFormValues] = useState({});

    useEffect(() => {
        const initialState = {
            id: editar.id,
            pregunta: editar.pregunta,
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

        const resp = await dispatch(onEditarPregunta(
            formValues.id, 
            formValues.pregunta,
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
                

           <center><h3>Editar Pregunta</h3></center>
            <br />
            <form onSubmit={editarUsuario}>

                <div className="form-row">
                    <div className="form-grupin col-md-12">
                        <textarea
                            placeholder="Ciudad"
                            name="pregunta"
                            rows={5}
                            cols={20}
                            className="form-control"
                            value={formValues.pregunta}
                            onChange={(e) =>
                                setFormValues({ ...formValues, pregunta: e.target.value })
                            }
                        />
                    </div>
                </div>

                <button className="btn btncrear">Editar</button>
            </form>
            </div>

        </Modal>
    )
}
