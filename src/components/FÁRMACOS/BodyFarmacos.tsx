import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import '../../CSS/Farmacos/BodyFarmacos.css';
import { useState } from 'react';
import { EditButtonFarmacos } from './ButtonsFarmacos';

type DataTableFarmacosProps = {
  onEditClick: (id: number) => void;
};

export default function DataTableFarmacos({ onEditClick }: DataTableFarmacosProps) {

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
    { field: 'nombreComercial', headerName: 'Nombre Comercial', width: 180 },
    { field: 'laboratorio', headerName: 'Presentación', width: 180 }, 
    { field: 'formaDelFarmaco', headerName: 'Forma del Fármaco', width: 180 },
    { field: 'formaDeAdministracion', headerName: 'Forma de Administración', width: 180 },
    { field: 'stock', headerName: 'Stock', width: 180 },
    { field: 'estado', headerName: 'Estado', width: 180 },
    { field: 'alternativa', headerName: 'Alternativa', width: 180 },
    { field: 'codigoDeBarras', headerName: 'Código de Barras', width: 180 },
    { field: 'lasa', headerName: 'Lasa', width: 180 },
    {
      field: 'editar',
      headerName: 'Editar',
      width: 100,
      renderCell: (params) => (
        <EditButtonFarmacos
        onClick={() => onEditClick(params.row.id)}
        icon={<img src="/editar.svg" alt="" />}
    />
      ),
    },
  ];

  const rows = Array.from({ length: 60 }).map((_, i) => ({
    id: i + 1,
    nombreComercial: 'Abatixent 5',
    laboratorio: 'Bioderma',
    formaDelFarmaco: 'Tableta Recubierta',
    formaDeAdministracion: 'Tableta',
    stock: 'Sí',
    estado: 'Sí',
    alternativa: 'xxx',
    codigoDeBarras: '12345678910',
    lasa: 'Sí',
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
        rowsPerPageOptions={[5, 10, 25, 35]} 
        component="div"
        count={rows.length} 
        rowsPerPage={rowsPerPage} 
        page={page} 
        onPageChange={handleChangePage} 
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Filas por página:" 
      />
    </Paper>
  );
}
