import React from 'react'
import { HeadCard } from '../../structure/card/HeadCard'
import logo from "../../../assets/logo_politecnico.png";


export const InicioPage = () => {
    return (
        <div className="content-wrapper">
            <HeadCard titulo="Inicio" />
            <section className="content">
                <div className="card">
                    <div className="card-header">
                    <div className="signin-image">
                        <figure><img  className="imglogin" src={logo} alt="descripcion imagen" /></figure>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
