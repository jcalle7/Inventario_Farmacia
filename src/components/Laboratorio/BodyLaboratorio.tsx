import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import '../../CSS/Grupo_Terapeutico/BodyGrupo.css';
import { useState } from 'react';
import { EditButtonLaboratorio } from './ButtonsLaboratorio';

type DataTableLaboratorioProps = {
  onEditClick: (id: number) => void;
};

export default function DataTableLaboratorio({ onEditClick }: DataTableLaboratorioProps) {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleRowSelection = (rowSelectionModel: GridRowSelectionModel) => {
    console.log('Filas seleccionadas:', rowSelectionModel);
  };

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); 
  };

  const columns: GridColDef[] = [
    { field: 'nombre', headerName: 'Nombre', width: 180 },
    { field: 'estado', headerName: 'Estado', width: 180 },  
    {
      field: 'editar',
      headerName: 'Editar',
      width: 100,
      renderCell: (params) => (
        <EditButtonLaboratorio
        onClick={() => onEditClick(params.row.id)}
        icon={<img src="/editar.svg" alt="" />}
    />
      ),
    },
  ];

  const rows = Array.from({ length: 60 }).map((_, i) => ({
    id: i + 1,
    nombre: 'Megalabs',
    estado: 'Disponible',
  }));

  const visibleRows = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);


  return (
    <Paper sx={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={visibleRows}
        columns={columns}
        checkboxSelection
        onRowSelectionModelChange={handleRowSelection}
        disableColumnMenu 
        hideFooterPagination
      />
        <TablePagination
        rowsPerPageOptions={[5, 10, 25]} 
        component="div"
        count={rows.length} 
        rowsPerPage={rowsPerPage} 
        page={page} 
        onPageChange={handleChangePage} 
        onRowsPerPageChange={handleChangeRowsPerPage} 
      />
    </Paper>
  );
}
