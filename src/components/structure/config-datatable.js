import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

export const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

export const optionsTable = {
    headerStyle: {
        backgroundColor: '#224787',
        color: '#FFF',
        zIndex : 0,
    },
    // exportButton: true,
    actionsColumnIndex:-1
}

export const lenguage = {
    body: {
        emptyDataSourceMessage: "No hay registros que mostrar",
        addTooltip: 'Agregar',
        deleteTooltip: 'Eliminar',
        editTooltip: 'Editar',
        filterRow: {
            filterTooltip: 'Filtrar'
        },
        editRow: {
            deleteText: '¿Quieres borrar esta línea?',
            cancelTooltip: 'Cancelar?',
            saveTooltip: 'Para registrarse'
        }
    },
    grouping: {
        placeholder: "Tire del encabezado",
        groupedBy: 'Agrupar por:'
    },
    header: {
        actions: 'Acciones'
    },
    pagination: {
        labelDisplayedRows: '{from}-{to} de {count}',
        labelRowsSelect: 'Filas',
        labelRowsPerPage: 'Filas por pagina:',
        firstAriaLabel: 'Primera page',
        firstTooltip: 'Primera pagina',
        previousAriaLabel: 'Pagina anterior',
        previousTooltip: 'Pagina anterior',
        nextAriaLabel: 'Pagina siguiente',
        nextTooltip: 'Pagina siguiente',
        lastAriaLabel: 'Ultima pagina',
        lastTooltip: 'Ultima pagina'
    },
    toolbar: {
        addRemoveColumns: 'Agregar o quitar columnas',
        nRowsSelected: '{0} lineas seleccionadas',
        showColumnsTitle: 'Voir les colonnes',
        showColumnsAriaLabel: 'Ver columnas',
        exportTitle: 'Exportar',
        exportAriaLabel: 'Exportar',
        exportName: 'Exportar en CSV',
        searchTooltip: 'Buscar',
        searchPlaceholder: 'Buscar'
    }
}