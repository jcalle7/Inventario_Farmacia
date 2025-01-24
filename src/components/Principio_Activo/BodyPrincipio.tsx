import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import '../../CSS/Principio_Activo/BodyPrincipio.css';
import { EditButton } from './ButtonsPrincipio';
import { useState } from 'react';

type DataTableProps = {
  onEditClick: (id: number) => void;
};

export default function DataTable({ onEditClick }: DataTableProps) {

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
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'nombre', headerName: 'Nombre', width: 180 },
    { field: 'observación', headerName: 'Observación', width: 180 },
    { field: 'mar', headerName: 'Mar', width: 120 },
    { field: 'estado', headerName: 'Estado', width: 180 },
    { field: 'GrupoTerapéutico', headerName: 'Grupo Terapéutico', width: 190 },
    { field: 'categoría', headerName: 'Categoría', width: 190 },
    {
      field: 'editar',
      headerName: 'Editar',
      width: 100,
      renderCell: (params) => (
        <EditButton 
        icon={<img src="/editar.svg" alt="" />}
        onClick={() => onEditClick(params.row.id)}
    />
        
      ),
    },
  ];

  const rows = Array.from({ length: 60 }).map((_, i) => ({
    id: i + 1,
    nombre: 'Ácido Tranexamico',
    observación: 'Uso moderado',
    mar: 'No',
    estado: 'Disponible',
    GrupoTerapéutico: 'Afección Hepática',
    categoría: 'Antibióticos',
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
