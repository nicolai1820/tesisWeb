import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import iconoAdmin from "../../assets/iconoadmin.png";
import iconoCrearP from "../../assets/crear_proyecto.png"
import iconoUsers from "../../assets/users.png"
import iconoProyectos from "../../assets/proyectos.png"
import iconoPreguntas from "../../assets/preguntas.png"
import iconoActa from "../../assets/generar_acta.png"

export const Sidebar = () => {
   const {email, id, rol} = useSelector(state => state.auth);
   const urlPerfil = `http://localhost:8000/api/imagenes/usuario/${id}/fotoperfil`

   const onGenerarActa = async () => {
    window.open(`http://localhost:8000/api/proyecto/actaestudiante/${id}`, '_blank', 'noreferrer');


}

    return (
        <div>
            <div className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <Link to="/" className="brand-link">
                    <img src={iconoAdmin} alt="AdminLTE Logo" className="brand-image" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light">Administrador</span>
                </Link>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        {/* <div className="image">
                            <img src={urlPerfil} className="img-circle elevation-2" alt="imagenUser" />
                        </div> */}
                        <div className="info">
                            <Link to="/" className="d-block">{email}</Link>
                        </div>
                    </div>
                    {/* SidebarSearch Form */}
                    {/* <div className="form-inline">
                        <div className="input-group" data-widget="sidebar-search">
                            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                            <div className="input-group-append">
                                <button className="btn btn-sidebar">
                                    <i className="fas fa-search fa-fw" />
                                </button>
                            </div>
                        </div>
                    </div> */}
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library */}
                            <li className="nav-header">MENÚ PRINCIPAL</li>
                            {
                            rol == 1 || rol == 2?(
                                    <li className="nav-item">
                                    <Link to="./crearProyecto" className="nav-link">
                                        {/* <i className="nav-icon fas fa-calendar-alt" /> */}
                                        <img src={iconoCrearP}/>
                                        <p>
                                            Crear Proyecto
                                            {/* <span className="badge badge-info right">2</span> */}
                                        </p>
                                    </Link>
                                </li>
                                ):<h1></h1>
                            }
                            
                            {
                            rol == 1 || rol == 2?(
                                <li className="nav-item">
                                    <Link to="./usuario" className="nav-link">
                                        {/* <i className="nav-icon far fa-image" /> */}
                                        <img src={iconoUsers}/>
                                        <p></p>
                                        <p>
                                            Usuarios
                                        </p>
                                    </Link>
                                </li>
                                ):<h1></h1>
                            }

                            {
                            rol == 1 || rol == 2?(
                                <li className="nav-item">
                                    <Link to="./ciudades" className="nav-link" >
                                        <i className="nav-icon fas fa-city" />
                                        <p>
                                            Ciudades
                                        </p>
                                    </Link>
                                </li>
                                ):<h1></h1>
                            }

                            {
                            rol == 1 || rol == 2 || rol == 3?(
                            <li className="nav-item">
                                <Link to="./proyectos" className="nav-link" >
                                    {/* <i className="nav-icon fas fa-city" /> */}
                                    <img src={iconoProyectos}/>
                                    <p>
                                        Proyectos
                                    </p>
                                </Link>
                            </li>
                            ):<h1></h1>
                            }
                            {
                            rol == 1?(
                            <li className="nav-item">
                                <Link to="./preguntas" className="nav-link" >
                                    {/* <i className="nav-icon fas fa-city" /> */}
                                    <img src={iconoPreguntas}/>
                                    <p>
                                        Preguntas
                                    </p>
                                </Link>
                            </li>
                            ):<h1></h1>
                            }
                            {
                            rol == 1?(
                            <li className="nav-item">
                                <Link onClick={onGenerarActa} className="nav-link" >
                                    {/*<i className="nav-icon fas fa-city" />*/}
                                    <img src={iconoActa}/>
                                    <p>
                                        Generar Acta
                                    </p>
                                </Link>
                            </li>
                            ):<h1></h1>
                            }
                            
                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </div>
        </div>

    )
}
