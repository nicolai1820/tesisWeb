import React from 'react'
import { HeadCard } from '../../structure/card/HeadCard'
import { DatatableProyecto, DatatableProyectos } from './DatatableProyecto'

export const ProyectoPage = () => {
    return (
        <div className="content-wrapper">
            <HeadCard titulo="PROYECTOS" />
            <section className="content">
                <div className="card">
                    <div className="card-header">
                    </div>
                    <DatatableProyectos />
                </div>
            </section>
        </div>
    )
}
