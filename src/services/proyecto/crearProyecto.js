import { fetchConToken } from "../../helpers/fetch";
import Swal from "sweetalert2";

//==============CRUD USUARIOS=================

// export const onCrearProyecto = ( 
//     nombre, 
//     descripcion, 
//     id_estudiante_1,
//     id_estudiante_2,
//     id_jurado_1,
//     id_jurado_2,
//     id_tutor,
//     id_ciudad
//  ) => {
//     return async( dispatch ) => {
//         try {
//             debugger;
//             const resp = await fetchConToken('/api/proyecto', { nombre, descripcion, id_estudiante_1, id_estudiante_2, id_jurado_1,id_jurado_2, id_tutor,  id_ciudad}, 'POST');
//             const body = await resp.json();
       
//             if(resp.ok){
//                 await Swal.fire({
//                     icon: "success",
//                     title: "Se ha creado el proyecto correctamente",
//                     showConfirmButton: false,
//                     timer: 2000
//                 });

//                 window.location.reload();
//                 return body.proyecto;
    
     
//             } else {
//                 Swal.fire('Error', body.errors[0].msg, 'error');
//             }
//         } catch (error) {
//             console.log(error);
//             console.log('object');
//         }
//     }
// }

export const onCrearProyecto = ( 
    nombre, 
    descripcion, 
    id_estudiante_1,
    id_estudiante_2,
    id_jurado_1,
    id_jurado_2,
    id_tutor,
    id_ciudad,
    pdf1
 ) => {
    return async (dispatch) => {
        try {
          var formdata = new FormData();
            nombre !== ""
            ? formdata.append("nombre", nombre)
            : console.log();
            descripcion !== ""
            ? formdata.append("descripcion", descripcion)
            : console.log();
            id_estudiante_1 !== ""
            ? formdata.append("id_estudiante_1", id_estudiante_1)
            : console.log();
            id_estudiante_2 !== ""
            ? formdata.append("id_estudiante_2", id_estudiante_2)
            : console.log();
            id_jurado_1 !== ""
            ? formdata.append("id_jurado_1", id_jurado_1)
            : console.log();
            id_jurado_2 !== ""
            ? formdata.append("id_jurado_2", id_jurado_2)
            : console.log();
            id_tutor !== ""
            ? formdata.append("id_tutor", id_tutor)
            : console.log();
            id_ciudad !== ""
            ? formdata.append("id_ciudad", id_ciudad)
            : console.log();
            pdf1 !== "" ? formdata.append("pdf1", pdf1) : console.log();
          const resp = await fetch(
            `${process.env.REACT_APP_MI_VARIABLE_DE_ENTORNO}/api/proyecto`,
            {
              method: "POST",
              body: formdata,
              headers: {
                "x-token": localStorage.getItem("token"),
              },
            }
          );
          const body = await resp.json();
    
          if (resp.ok) {
            Swal.fire({
              icon: "success",
              title: "Se ha creado el proyecto correctamente",
              showConfirmButton: false,
              timer: 2000,
            });
            return body.proyecto;
          } else {
            Swal.fire("Error", body.errors[0].msg, "error");
          }
        } catch (error) {
          console.log(error);
          console.log("object");
        }
      };
    };

export const onCalificarProyecto = ( 
    idProyecto,
    idPregunta1,
    calificacion1,
    idPregunta2,
    calificacion2,
    idPregunta3,
    calificacion3,
    idPregunta4,
    calificacion4,
    idPregunta5,
    calificacion5,
    idPregunta6,
    calificacion6,
    idPregunta7,
    calificacion7,
    idPregunta8,
    calificacion8,
    idPregunta9,
    calificacion9,
    idPregunta10,
    calificacion10,
    idPregunta11,
    calificacion11,
    idPregunta12,
    calificacion12,
    idPregunta13,
    calificacion13,
    idPregunta14,
    calificacion14,
    idPregunta15,
    calificacion15,
    idPregunta16,
    calificacion16,
    idPregunta17,
    calificacion17,
    idPregunta18,
    calificacion18,
    idPregunta19,
    calificacion19,
    idPregunta20,
    calificacion20,
    idPregunta21,
    calificacion21,
    idPregunta22,
    calificacion22,
    idPregunta23,
    calificacion23,
    idPregunta24,
    calificacion24,
    idPregunta25,
    calificacion25,
    idPregunta26,
    calificacion26,
    idPregunta27,
    calificacion27,
    idPregunta28,
    calificacion28,
    idPregunta29,
    calificacion29,
    idPregunta30,
    calificacion30,
 ) => {
    return async( dispatch ) => {
        try {
            debugger;
            const resp = await fetchConToken('/api/calificacion', { 
                idProyecto,
                idPregunta1,
                calificacion1,
                idPregunta2,
                calificacion2,
                idPregunta3,
                calificacion3,
                idPregunta4,
                calificacion4,
                idPregunta5,
                calificacion5,
                idPregunta6,
                calificacion6,
                idPregunta7,
                calificacion7,
                idPregunta8,
                calificacion8,
                idPregunta9,
                calificacion9,
                idPregunta10,
                calificacion10,
                idPregunta11,
                calificacion11,
                idPregunta12,
                calificacion12,
                idPregunta13,
                calificacion13,
                idPregunta14,
                calificacion14,
                idPregunta15,
                calificacion15,
                idPregunta16,
                calificacion16,
                idPregunta17,
                calificacion17,
                idPregunta18,
                calificacion18,
                idPregunta19,
                calificacion19,
                idPregunta20,
                calificacion20,
                idPregunta21,
                calificacion21,
                idPregunta22,
                calificacion22,
                idPregunta23,
                calificacion23,
                idPregunta24,
                calificacion24,
                idPregunta25,
                calificacion25,
                idPregunta26,
                calificacion26,
                idPregunta27,
                calificacion27,
                idPregunta28,
                calificacion28,
                idPregunta29,
                calificacion29,
                idPregunta30,
                calificacion30,}, 'POST');
            const body = await resp.json();
       
            if(resp.ok){
                await Swal.fire({
                    icon: "success",
                    title: "Se ha calificado el proyecto correctamente",
                    showConfirmButton: false,
                    timer: 2000
                });

                window.location.reload();
                return body.proyecto;
    
     
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
