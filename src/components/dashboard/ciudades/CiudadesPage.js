import React from 'react'
import { HeadCard } from '../../structure/card/HeadCard'
import { DatatableCiudades } from './DatatableCiudades'

export const CiudadesPage = () => {
    return (
        <div className="content-wrapper">
            <HeadCard titulo="CIUDADES" />
            <section className="content">
                <div className="card">
                    <div className="card-header">
                    </div>

                    <DatatableCiudades />

                </div>
            </section>
        </div>
    )
}
