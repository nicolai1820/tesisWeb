import { fetchConToken } from "../../helpers/fetch";
import Swal from "sweetalert2";

//==============CRUD USUARIOS=================



export const onEditarPregunta = ( id_pregunta,pregunta ) => {
    return async( dispatch ) => {
        try {
            const resp = await fetchConToken('/api/pregunta', { id_pregunta,pregunta }, 'PUT');
            const body = await resp.json();
       
            if(resp.ok){
                await Swal.fire({
                    icon: "success",
                    title: "Se ha editado la pregunta correctamente",
                    showConfirmButton: false,
                    timer: 2000
                });
                window.location.reload();

                return body.pregunta;

    
     
            } else {
                Swal.fire('Error', body.errors[0].msg, 'error');
            }
        } catch (error) {
            console.log(error);
            console.log('object');
        }
    }
}

