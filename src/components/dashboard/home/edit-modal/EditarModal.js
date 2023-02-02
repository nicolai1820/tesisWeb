import React from 'react'
import Modal from 'react-modal';
import { customStyles } from '../../../../helpers/modal_styles';

export const EditarModal = ({setmodalEditar, modalEditar}) => {

    Modal.setAppElement('#root');
    console.log(modalEditar);

    const closeModal = () => {
        setmodalEditar(false);

    }

    return (
        <Modal
        isOpen={modalEditar}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

          <h1>HOLA MUNDO</h1>
          <hr/>
          <span>Hola de nuevo....</span>


          
        </Modal>
    )
}
