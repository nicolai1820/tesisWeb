import React from 'react'
import {  Redirect, Route, Switch } from 'react-router-dom'
import { HomePage } from '../components/dashboard/home/HomePage'
import { UsuarioPage } from '../components/dashboard/users/UsuarioPage'
import { Footer } from '../components/structure/Footer'

import { Navbar } from '../components/structure/Navbar'
import { Sidebar } from '../components/structure/Sidebar'
import { CiudadesPage } from '../components/dashboard/ciudades/CiudadesPage'
import { ProyectoPage } from '../components/dashboard/proyectos/ProyectoPage'
import { PreguntaPage } from '../components/dashboard/preguntas/PreguntaPage'
import { InicioPage } from '../components/dashboard/inicio/InicioPage'

export const DashboardRouter = () => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <Switch>
                <Route exact path="/dashboard/home" component={InicioPage} />
                <Route exact path="/dashboard/crearProyecto" component={HomePage} />
                <Route exact path="/dashboard/usuario" component={UsuarioPage} />
                <Route exact path="/dashboard/ciudades" component={CiudadesPage} />
                <Route exact path="/dashboard/proyectos" component={ProyectoPage} />
                <Route exact path="/dashboard/preguntas" component={PreguntaPage} />

                <Redirect to="/auth/login" />

            </Switch>
            <Footer/>

        </div>
    )
}
