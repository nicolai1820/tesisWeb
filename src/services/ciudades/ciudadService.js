import { fetchConToken } from "../../helpers/fetch";
import Swal from "sweetalert2";

//==============CRUD USUARIOS=================

export const onCrearCiudad = ( ciudad ) => {
    return async( dispatch ) => {
        try {
            const resp = await fetchConToken('/api/ciudad', { ciudad }, 'POST');
            const body = await resp.json();
       
            if(resp.ok){
                Swal.fire({
                    icon: "success",
                    title: "Se ha creado el usuario correctamente",
                    showConfirmButton: false,
                    timer: 2000
                });
                return body.ciudades;
    
     
            } else {
                Swal.fire('Error', body.errors[0].msg, 'error');
            }
        } catch (error) {
            console.log(error);
            console.log('object');
        }
    }
}

export const onEditarCiudad = ( id,ciudad,estado ) => {
    return async( dispatch ) => {
        try {
            const resp = await fetchConToken('/api/ciudad', { id,ciudad,estado }, 'PUT');
            const body = await resp.json();
       
            if(resp.ok){
                Swal.fire({
                    icon: "success",
                    title: "Se ha editado la ciudad correctamente",
                    showConfirmButton: false,
                    timer: 2000
                });
                return body.ciudades;
    
     
            } else {
                Swal.fire('Error', body.errors[0].msg, 'error');
            }
        } catch (error) {
            console.log(error);
            console.log('object');
        }
    }
}

export const serviceEliminarCiudad = ( id ) => {
    return async( dispatch ) => {
        try {
            debugger;

            const resp = await fetchConToken('/api/ciudad', { id }, 'DELETE');
            const body = await resp.json();
            debugger;
       
            if(resp.ok){
                
                Swal.fire({
                    icon: "success",
                    title: "Se ha inhabilitado la ciudad correctamente",
                    showConfirmButton: false,
                    timer: 2000
                });
                return body.ciudades;
     
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
