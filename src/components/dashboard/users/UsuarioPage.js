import React from 'react'
import { HeadCard } from '../../structure/card/HeadCard'
import { DatatableUsers } from './DatatableUsers'

export const UsuarioPage = () => {
    return (
        <div className="content-wrapper">
            <HeadCard titulo="USUARIOS" />
            <section className="content">
                <div className="card">
                    <div className="card-header">
                    </div>

                    <DatatableUsers />

                </div>
            </section>
        </div>
    )
}
