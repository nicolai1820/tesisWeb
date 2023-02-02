import React, { useState } from 'react'
import { UsuarioCrearModal } from '../../dashboard/users/crear-modal/UsuarioCrearModal';

export const FooterCard = ({ state, setState, texto = "", modalKey = "" }) => {

    const [modalCrear, setmodalCrear] = useState(false);

    const onActivarModal = () => {
        setmodalCrear(true)
    }
debugger;
    return (
        <>
            <div className="card-footer row">
                <div className="col-md-3">
                    <button type="button" className="btncrear btn btn-block btn-lg" onClick={onActivarModal}>{texto}</button>
                </div>
            </div>

            {modalKey === "usuario" ?
                (
                    <UsuarioCrearModal
                        setmodalCrear={setmodalCrear}
                        modalCrear={modalCrear}
                        state={state}
                        setState={setState}
                    />
                )
                :
                (
                    <p>error</p>
                )}
            {/* <UsuarioCrearModal setmodalCrear={setmodalCrear} modalCrear={modalCrear}
        state={state} setState={setState} /> */}
        </>
    )
}
