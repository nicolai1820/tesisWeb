import { fetchConToken } from "../../helpers/fetch";
import Swal from "sweetalert2";


export const onCalificarFinal = ( idProyecto ) => {
    return async( dispatch ) => {
        try {
            const resp = await fetchConToken('/api/calificacion/calcular', { idProyecto }, 'POST');
            const body = await resp.json();
       
            if(resp.ok){
                await Swal.fire({
                    icon: "success",
                    title: "Se ha calificado el proyecto correctamente",
                    showConfirmButton: false,
                    timer: 2000
                });
                window.location.reload();
                return body.notaFinal;
    
     
            } else {
                Swal.fire('Error', body.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            console.log('object');
        }
    }
}

export const onGenerarActaService = ( idProyecto ) => {
    return async( dispatch ) => {
        try {
            const resp = await fetchConToken(`/api/acta/api/proyecto/acta/${idProyecto}`, 'POST');
            const body = await resp.json();
       
            if(resp.ok){
                await Swal.fire({
                    icon: "success",
                    title: "Se ha calificado el proyecto correctamente",
                    showConfirmButton: false,
                    timer: 2000
                });
                window.location.reload();
                return body.notaFinal;
    
     
            } else {
                Swal.fire('Error', body.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            console.log('object');
        }
    }
}

//==============CRUD FIN USUARIOS==============
