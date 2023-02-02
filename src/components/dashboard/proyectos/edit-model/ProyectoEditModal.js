import Select from 'react-select';
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { customStyles, customStyles2 } from '../../../../helpers/modal_styles';
import './ProyectoEditModal.css'
import { useDispatch } from "react-redux";
import { onEditarCiudad } from '../../../../services/ciudades/ciudadService';
import { updateStateForId } from '../../../../helpers/updateState';
import Swal from 'sweetalert2';
import { onCalificarProyecto } from '../../../../services/proyecto/crearProyecto';


const estado = [
    { value: "0", label: "Desactivado" },
    { value: "1", label: "Activado" },
];



export const ProyectoEditModal = ({ setmodalEditar, modalEditar, editar, state, setState }) => {
    const dispatch = useDispatch();
    Modal.setAppElement('#root');

    console.log("EDITAR LOG:", editar);
    

    const [formValues, setFormValues] = useState({
        idProyecto:"",
        idPregunta1:"",
        calificacion1:"",

        idPregunta2:"",
        calificacion2:"",

        idPregunta3:"",
        calificacion3:"",

        idPregunta4:"",
        calificacion4:"",

        idPregunta5:"",
        calificacion5:"",

        idPregunta6:"",
        calificacion6:"",

        idPregunta7:"",
        calificacion7:"",

        idPregunta8:"",
        calificacion8:"",

        idPregunta9:"",
        calificacion9:"",

        idPregunta10:"",
        calificacion10:"",

        idPregunta11:"",
        calificacion11:"",

        idPregunta12:"",
        calificacion12:"",

        idPregunta13:"",
        calificacion13:"",

        idPregunta14:"",
        calificacion14:"",

        idPregunta15:"",
        calificacion15:"",

        idPregunta16:"",
        calificacion16:"",

        idPregunta17:"",
        calificacion17:"",

        idPregunta18:"",
        calificacion18:"",

        idPregunta19:"",
        calificacion19:"",


        idPregunta20:"",
        calificacion20:"",


        idPregunta21:"",
        calificacion21:"",



        idPregunta22:"",
        calificacion22:"",



        idPregunta23:"",
        calificacion23:"",


        idPregunta24:"",
        calificacion24:"",


        idPregunta25:"",
        calificacion25:"",


        idPregunta26:"",
        calificacion26:"",


        idPregunta27:"",
        calificacion27:"",


        idPregunta28:"",
        calificacion28:"",


        idPregunta29:"",
        calificacion29:"",


        idPregunta30:"",
        calificacion30:"",
        
    });
    const [preguntas, setPreguntas] = useState([
        {pregunta:""},
        {pregunta:""},
        {pregunta:""},
        {pregunta:""},
        {pregunta:""},
        {pregunta:""},
        {pregunta:""},
        {pregunta:""},
        {pregunta:""},
        {pregunta:""},
        {pregunta:""},
        {pregunta:""},
        {pregunta:""},
        {pregunta:""},
        {pregunta:""},
        {pregunta:""},
        {pregunta:""},
        {pregunta:""},
        {pregunta:""},
        {pregunta:""},
        {pregunta:""},
        {pregunta:""},
        {pregunta:""},
        {pregunta:""},
        {pregunta:""},
        {pregunta:""},
        {pregunta:""},
        {pregunta:""},
        {pregunta:""},
        {pregunta:""},

    ]);

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

    useEffect(() => {
        async function getData() {
            const url = "http://localhost:8000/api/pregunta";

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
                console.log("RESPUESTA preguntas:", respuesta);
                setPreguntas(respuesta.preguntas)
            } else {
                if(respuesta.msg === undefined){
                    Swal.fire('Error', respuesta.errors[0].msg, 'error');
                }else{
                    Swal.fire('Error', respuesta.msg, 'error');
                }  
            }
        }
        getData();

    }, []);




    //FUNCTION========================
    const closeModal = () => {
        setmodalEditar(false);
    }

    const calificarProyecto = async(e) => {
        e.preventDefault();

        console.log("califcaicon final;", formValues);
        const resp = await dispatch(onCalificarProyecto(
            formValues.idProyecto = editar.id,
            formValues.idPregunta1,
            formValues.calificacion1,
            formValues.idPregunta2,
            formValues.calificacion2,
            formValues.idPregunta3,
            formValues.calificacion3,
            formValues.idPregunta4,
            formValues.calificacion4,
            formValues.idPregunta5,
            formValues.calificacion5,
            formValues.idPregunta6,
            formValues.calificacion6,
            formValues.idPregunta7,
            formValues.calificacion7,
            formValues.idPregunta8,
            formValues.calificacion8,
            formValues.idPregunta9,
            formValues.calificacion9,
            formValues.idPregunta10,
            formValues.calificacion10,
            formValues.idPregunta11,
            formValues.calificacion11,
            formValues.idPregunta12,
            formValues.calificacion12,
            formValues.idPregunta13,
            formValues.calificacion13,
            formValues.idPregunta14,
            formValues.calificacion14,
            formValues.idPregunta15,
            formValues.calificacion15,
            formValues.idPregunta16,
            formValues.calificacion16,
            formValues.idPregunta17,
            formValues.calificacion17,
            formValues.idPregunta18,
            formValues.calificacion18,
            formValues.idPregunta19,
            formValues.calificacion19,
            formValues.idPregunta20,
            formValues.calificacion20,
            formValues.idPregunta21,
            formValues.calificacion21,
            formValues.idPregunta22,
            formValues.calificacion22,
            formValues.idPregunta23,
            formValues.calificacion23,
            formValues.idPregunta24,
            formValues.calificacion24,
            formValues.idPregunta25,
            formValues.calificacion25,
            formValues.idPregunta26,
            formValues.calificacion26,
            formValues.idPregunta27,
            formValues.calificacion27,
            formValues.idPregunta28,
            formValues.calificacion28,
            formValues.idPregunta29,
            formValues.calificacion29,
            formValues.idPregunta30,
            formValues.calificacion30,
            ));
        //     const newArray = updateStateForId(state, resp);
        //     setState([...newArray]);
        //     closeModal();

    }

    //FIN FUNCTION========================

    console.log("PREGUNTAS RETURN :", preguntas);
    return (
        <Modal
            isOpen={modalEditar}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles2}
            contentLabel="Example Modal"
        >
            <div className='popup'>
                

           <center><h3>Calificación</h3></center>
            <br />
            <form onSubmit={calificarProyecto}>
            <div className="form-row">
                    <div className="form-group col-md-11">
                        <h5>{preguntas[0].pregunta}</h5>
                    </div>
                    <div className="form-group col-md-1">
                        <input
                            placeholder=""
                            type="number"
                            name="descripcionp"
                            className="form-control"
                            min={1}
                            max={5}
                            value={formValues.calificacion1}
                            onChange={(e) =>
                                setFormValues({ ...formValues, calificacion1: e.target.value, idPregunta1:preguntas[0].id })
                            }
                        />
                    </div>
                </div>
                 <div className="form-row">
                    <div className="form-group col-md-11">
                        <h5>{preguntas[1].pregunta}</h5>
                    </div>
                    <div className="form-group col-md-1">
                        <input
                            placeholder=""
                            type="number"
                            name="descripcionp"
                            className="form-control"
                            min={1}
                            max={5}
                            value={formValues.calificacion2}
                            onChange={(e) =>
                                setFormValues({ ...formValues, calificacion2: e.target.value, idPregunta2:preguntas[1].id })
                            }
                        />
                    </div>
                </div> 
                <div className="form-row">
                    <div className="form-group col-md-11">
                        <h5>{preguntas[2].pregunta}</h5>
                    </div>
                    <div className="form-group col-md-1">
                        <input
                            placeholder=""
                            type="number"
                            name="descripcionp"
                            className="form-control"
                            min={1}
                            max={5}
                             value={formValues.calificacion3}
                            onChange={(e) =>
                                setFormValues({ ...formValues, calificacion3: e.target.value, idPregunta3:preguntas[2].id })
                            }
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-11">
                        <h5>{preguntas[3].pregunta}</h5>
                    </div>
                    <div className="form-group col-md-1">
                        <input
                            placeholder=""
                            type="number"
                            name="descripcionp"
                            className="form-control"
                            min={1}
                            max={5}
                             value={formValues.calificacion4}
                            onChange={(e) =>
                                setFormValues({ ...formValues, calificacion4: e.target.value, idPregunta4:preguntas[3].id })
                            }
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-11">
                        <h5>{preguntas[4].pregunta}</h5>
                    </div>
                    <div className="form-group col-md-1">
                        <input
                            placeholder=""
                            type="number"
                            name="descripcionp"
                            className="form-control"
                            min={1}
                            max={5}
                             value={formValues.calificacion5}
                            onChange={(e) =>
                                setFormValues({ ...formValues, calificacion5: e.target.value, idPregunta5:preguntas[4].id })
                            }
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-11">
                        <h5>{preguntas[5].pregunta}</h5>
                    </div>
                    <div className="form-group col-md-1">
                        <input
                            placeholder=""
                            type="number"
                            name="descripcionp"
                            className="form-control"
                            min={1}
                            max={5}
                             value={formValues.calificacion6}
                            onChange={(e) =>
                                setFormValues({ ...formValues, calificacion6: e.target.value, idPregunta6:preguntas[5].id })
                            }
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-11">
                        <h5>{preguntas[6].pregunta}</h5>
                    </div>
                    <div className="form-group col-md-1">
                        <input
                            placeholder=""
                            type="number"
                            name="descripcionp"
                            className="form-control"
                            min={1}
                            max={5}
                             value={formValues.calificacion7}
                            onChange={(e) =>
                                setFormValues({ ...formValues, calificacion7: e.target.value, idPregunta7:preguntas[6].id })
                            }
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-11">
                        <h5>{preguntas[7].pregunta}</h5>
                    </div>
                    <div className="form-group col-md-1">
                        <input
                            placeholder=""
                            type="number"
                            name="descripcionp"
                            className="form-control"
                            min={1}
                            max={5}
                             value={formValues.calificacion8}
                            onChange={(e) =>
                                setFormValues({ ...formValues, calificacion8: e.target.value, idPregunta8:preguntas[7].id })
                            }
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-11">
                        <h5>{preguntas[8].pregunta}</h5>
                    </div>
                    <div className="form-group col-md-1">
                        <input
                            placeholder=""
                            type="number"
                            name="descripcionp"
                            className="form-control"
                            min={1}
                            max={5}
                             value={formValues.calificacion9}
                            onChange={(e) =>
                                setFormValues({ ...formValues, calificacion9: e.target.value, idPregunta9:preguntas[8].id })
                            }
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-11">
                        <h5>{preguntas[9].pregunta}</h5>
                    </div>
                    <div className="form-group col-md-1">
                        <input
                            placeholder=""
                            type="number"
                            name="descripcionp"
                            className="form-control"
                            min={1}
                            max={5}
                             value={formValues.calificacion10}
                            onChange={(e) =>
                                setFormValues({ ...formValues, calificacion10: e.target.value, idPregunta10:preguntas[9].id })
                            }
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-11">
                        <h5>{preguntas[10].pregunta}</h5>
                    </div>
                    <div className="form-group col-md-1">
                        <input
                            placeholder=""
                            type="number"
                            name="descripcionp"
                            className="form-control"
                            min={1}
                            max={5}
                             value={formValues.calificacion11}
                            onChange={(e) =>
                                setFormValues({ ...formValues, calificacion11: e.target.value, idPregunta11:preguntas[10].id })
                            }
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-11">
                        <h5>{preguntas[11].pregunta}</h5>
                    </div>
                    <div className="form-group col-md-1">
                        <input
                            placeholder=""
                            type="number"
                            name="descripcionp"
                            className="form-control"
                            min={1}
                            max={5}
                             value={formValues.calificacion12}
                            onChange={(e) =>
                                setFormValues({ ...formValues, calificacion12: e.target.value, idPregunta12:preguntas[11].id })
                            }
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-11">
                        <h5>{preguntas[12].pregunta}</h5>
                    </div>
                    <div className="form-group col-md-1">
                        <input
                            placeholder=""
                            type="number"
                            name="descripcionp"
                            className="form-control"
                            min={1}
                            max={5}
                             value={formValues.calificacion13}
                            onChange={(e) =>
                                setFormValues({ ...formValues, calificacion13: e.target.value, idPregunta13:preguntas[12].id })
                            }
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-11">
                        <h5>{preguntas[13].pregunta}</h5>
                    </div>
                    <div className="form-group col-md-1">
                        <input
                            placeholder=""
                            type="number"
                            name="descripcionp"
                            className="form-control"
                            min={1}
                            max={5}
                             value={formValues.calificacion14}
                            onChange={(e) =>
                                setFormValues({ ...formValues, calificacion14: e.target.value, idPregunta14:preguntas[13].id })
                            }
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-11">
                        <h5>{preguntas[14].pregunta}</h5>
                    </div>
                    <div className="form-group col-md-1">
                        <input
                            placeholder=""
                            type="number"
                            name="descripcionp"
                            className="form-control"
                            min={1}
                            max={5}
                             value={formValues.calificacion15}
                            onChange={(e) =>
                                setFormValues({ ...formValues, calificacion15: e.target.value, idPregunta15:preguntas[14].id })
                            }
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-11">
                        <h5>{preguntas[15].pregunta}</h5>
                    </div>
                    <div className="form-group col-md-1">
                        <input
                            placeholder=""
                            type="number"
                            name="descripcionp"
                            className="form-control"
                            min={1}
                            max={5}
                             value={formValues.calificacion16}
                            onChange={(e) =>
                                setFormValues({ ...formValues, calificacion16: e.target.value, idPregunta16:preguntas[15].id })
                            }
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-11">
                        <h5>{preguntas[16].pregunta}</h5>
                    </div>
                    <div className="form-group col-md-1">
                        <input
                            placeholder=""
                            type="number"
                            name="descripcionp"
                            className="form-control"
                            min={1}
                            max={5}
                             value={formValues.calificacion17}
                            onChange={(e) =>
                                setFormValues({ ...formValues, calificacion17: e.target.value, idPregunta17:preguntas[16].id })
                            }
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-11">
                        <h5>{preguntas[17].pregunta}</h5>
                    </div>
                    <div className="form-group col-md-1">
                        <input
                            placeholder=""
                            type="number"
                            name="descripcionp"
                            className="form-control"
                            min={1}
                            max={5}
                             value={formValues.calificacion18}
                            onChange={(e) =>
                                setFormValues({ ...formValues, calificacion18: e.target.value, idPregunta18:preguntas[17].id })
                            }
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-11">
                        <h5>{preguntas[18].pregunta}</h5>
                    </div>
                    <div className="form-group col-md-1">
                        <input
                            placeholder=""
                            type="number"
                            name="descripcionp"
                            className="form-control"
                            min={1}
                            max={5}
                             value={formValues.calificacion19}
                            onChange={(e) =>
                                setFormValues({ ...formValues, calificacion19: e.target.value, idPregunta19:preguntas[18].id })
                            }
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-11">
                        <h5>{preguntas[19].pregunta}</h5>
                    </div>
                    <div className="form-group col-md-1">
                        <input
                            placeholder=""
                            type="number"
                            name="descripcionp"
                            className="form-control"
                            min={1}
                            max={5}
                             value={formValues.calificacion20}
                            onChange={(e) =>
                                setFormValues({ ...formValues, calificacion20: e.target.value, idPregunta20:preguntas[19].id })
                            }
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-11">
                        <h5>{preguntas[20].pregunta}</h5>
                    </div>
                    <div className="form-group col-md-1">
                        <input
                            placeholder=""
                            type="number"
                            name="descripcionp"
                            className="form-control"
                            min={1}
                            max={5}
                             value={formValues.calificacion21}
                            onChange={(e) =>
                                setFormValues({ ...formValues, calificacion21: e.target.value, idPregunta21:preguntas[20].id })
                            }
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-11">
                        <h5>{preguntas[21].pregunta}</h5>
                    </div>
                    <div className="form-group col-md-1">
                        <input
                            placeholder=""
                            type="number"
                            name="descripcionp"
                            className="form-control"
                            min={1}
                            max={5}
                             value={formValues.calificacion22}
                            onChange={(e) =>
                                setFormValues({ ...formValues, calificacion22: e.target.value, idPregunta22:preguntas[21].id })
                            }
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-11">
                        <h5>{preguntas[22].pregunta}</h5>
                    </div>
                    <div className="form-group col-md-1">
                        <input
                            placeholder=""
                            type="number"
                            name="descripcionp"
                            className="form-control"
                            min={1}
                            max={5}
                             value={formValues.calificacion23}
                            onChange={(e) =>
                                setFormValues({ ...formValues, calificacion23: e.target.value, idPregunta23:preguntas[22].id })
                            }
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-11">
                        <h5>{preguntas[23].pregunta}</h5>
                    </div>
                    <div className="form-group col-md-1">
                        <input
                            placeholder=""
                            type="number"
                            name="descripcionp"
                            className="form-control"
                            min={1}
                            max={5}
                             value={formValues.calificacion24}
                            onChange={(e) =>
                                setFormValues({ ...formValues, calificacion24: e.target.value, idPregunta24:preguntas[23].id })
                            }
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-11">
                        <h5>{preguntas[24].pregunta}</h5>
                    </div>
                    <div className="form-group col-md-1">
                        <input
                            placeholder=""
                            type="number"
                            name="descripcionp"
                            className="form-control"
                            min={1}
                            max={5}
                             value={formValues.calificacion25}
                            onChange={(e) =>
                                setFormValues({ ...formValues, calificacion25: e.target.value, idPregunta25:preguntas[24].id })
                            }
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-11">
                        <h5>{preguntas[25].pregunta}</h5>
                    </div>
                    <div className="form-group col-md-1">
                        <input
                            placeholder=""
                            type="number"
                            name="descripcionp"
                            className="form-control"
                            min={1}
                            max={5}
                             value={formValues.calificacion26}
                            onChange={(e) =>
                                setFormValues({ ...formValues, calificacion26: e.target.value, idPregunta26:preguntas[25].id })
                            }
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-11">
                        <h5>{preguntas[26].pregunta}</h5>
                    </div>
                    <div className="form-group col-md-1">
                        <input
                            placeholder=""
                            type="number"
                            name="descripcionp"
                            className="form-control"
                            min={1}
                            max={5}
                             value={formValues.calificacion27}
                            onChange={(e) =>
                                setFormValues({ ...formValues, calificacion27: e.target.value, idPregunta27:preguntas[26].id })
                            }
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-11">
                        <h5>{preguntas[27].pregunta}</h5>
                    </div>
                    <div className="form-group col-md-1">
                        <input
                            placeholder=""
                            type="number"
                            name="descripcionp"
                            className="form-control"
                            min={1}
                            max={5}
                             value={formValues.calificacion28}
                            onChange={(e) =>
                                setFormValues({ ...formValues, calificacion28: e.target.value, idPregunta28:preguntas[27].id })
                            }
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-11">
                        <h5>{preguntas[28].pregunta}</h5>
                    </div>
                    <div className="form-group col-md-1">
                        <input
                            placeholder=""
                            type="number"
                            name="descripcionp"
                            className="form-control"
                            min={1}
                            max={5}
                             value={formValues.calificacion29}
                            onChange={(e) =>
                                setFormValues({ ...formValues, calificacion29: e.target.value, idPregunta29:preguntas[28].id })
                            }
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-11">
                        <h5>{preguntas[29].pregunta}</h5>
                    </div>
                    <div className="form-group col-md-1">
                        <input
                            placeholder=""
                            type="number"
                            name="descripcionp"
                            className="form-control"
                            min={1}
                            max={5}
                             value={formValues.calificacion30}
                            onChange={(e) =>
                                setFormValues({ ...formValues, calificacion30: e.target.value, idPregunta30:preguntas[29].id })
                            }
                        />
                    </div>
                </div> 
   

                <button className="btn btncrear">Calificar</button>
            </form>
            </div>

        </Modal>
    )
}
