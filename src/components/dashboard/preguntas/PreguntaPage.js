import React from 'react'
import { HeadCard } from '../../structure/card/HeadCard'
import { DatatablePreguntas } from './DatatablePregunta'

export const PreguntaPage = () => {
    return (
        <div className="content-wrapper">
            <HeadCard titulo="PREGUNTAS" />
            <section className="content">
                <div className="card">
                    <div className="card-header">
                    </div>
                    <DatatablePreguntas />

                </div>
            </section>
        </div>
    )
}
