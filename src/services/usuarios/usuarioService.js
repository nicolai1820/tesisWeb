import { fetchConToken } from "../../helpers/fetch";
import Swal from "sweetalert2";

//==============CRUD USUARIOS=================

export const onCrearUsuario = (
    id,
    email,
    cedula,
    id_rol,
    estado,
    password 
    ) => {
    return async( dispatch ) => {
        try {
            const resp = await fetchConToken('/api/users', {     
                id,
                email,
                cedula,
                id_rol,
                estado,
                password  
            }, 'POST');
            const body = await resp.json();
       
            if(resp.ok){
                Swal.fire({
                    icon: "success",
                    title: "Se ha creado el usuario correctamente",
                    showConfirmButton: false,
                    timer: 2000
                });
                return body.usuario;
    
     
            } else {
                Swal.fire('Error', body.errors[0].msg, 'error');
            }
        } catch (error) {
            console.log(error);
            console.log('object');
        }
    }
}

export const onEditarUsuario = ( 
     id, 
     password,
     cedula,
     estado ) => {
    return async( dispatch ) => {
        try {

            const resp = await fetchConToken('/api/users', { 
                id, 
                password,
                cedula,
                estado }, 'PUT');
            const body = await resp.json();
       
            if(resp.ok){
                await Swal.fire({
                    icon: "success",
                    title: "Se ha editado el usuario correctamente",
                    showConfirmButton: false,
                    timer: 2000
                });

                window.location.reload();
                return body.usuario;
    
     
            } else {
                Swal.fire('Error', body.errors[0].msg, 'error');
            }
        } catch (error) {
            console.log(error);
            console.log('object');
        }
    }
}

export const serviceEliminarUsuario = ( id ) => {
    return async( dispatch ) => {
        try {
            debugger;

            const resp = await fetchConToken('/api/users', { id }, 'DELETE');
            const body = await resp.json();
            debugger;
       
            if(resp.ok){
                
                Swal.fire({
                    icon: "success",
                    title: "Se ha inhabilitado el usuario correctamente",
                    showConfirmButton: false,
                    timer: 2000
                });
                return body.usuario;
     
            } else {
                Swal.fire('Error', body.errors[0].msg, 'error');
            }
        } catch (error) {
            console.log(error);
            console.log('object');
        }
    }
}

//==============CRUD FIN USUARIOS==============
