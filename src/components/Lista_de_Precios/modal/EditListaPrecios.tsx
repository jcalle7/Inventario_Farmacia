import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText'; 
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import WarningIcon from '@mui/icons-material/Warning';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import SaveIcon from '@mui/icons-material/Save';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormControlLabel from '@mui/material/FormControlLabel';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`] : {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`] : {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(id: number, startDate: string, endDate: string) { // Corrección en la función createData
  return { id, startDate, endDate };
}

const initialRows = [ // Definición de initialRows
    createData(1, '2025-02-01', '2025-02-10'),
    createData(2, '2025-02-11', '2025-02-20'),
    createData(3, '2025-02-21', '2025-02-28'),
]; 

export default function EditListaPreciosModal({open, handleClose, onSave} : {open: boolean; handleClose: () => void; onSave: () => void; }) {

  const [rows, setRows] = React.useState(initialRows);  
  const [selectedRows, setSelectedRows] = React.useState<Set<number>>(new Set());
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const [rowToDelete, setRowToDelete] = React.useState<number | null>(null);
  const [openAddModal, setOpenAddModal] = React.useState(false);
  const [startDate, setStartDate] = React.useState<Dayjs | null>(dayjs());
  const [endDate, setEndDate] = React.useState<Dayjs | null>(dayjs());
    
    const handleCheckboxChange = (id: number) => {
        const newSelectedRows = new Set(selectedRows);
        if (newSelectedRows.has(id)) {
            newSelectedRows.delete(id); // Corrección en la lógica de eliminación
        } else {
          newSelectedRows.add(id);
        }
        setSelectedRows(newSelectedRows);
    };

    const handleDeleteClick = (id: number) => {
      setRowToDelete(id);
      setOpenDeleteModal(true);
    };
  
    const handleDeleteConfirm = () => {
      if (rowToDelete !== null) {
        setRows(rows.filter((row) => row.id !== rowToDelete));
      }
      setOpenDeleteModal(false);
      setRowToDelete(null);
    };

    const handleAddClick = () => {
        setOpenAddModal(true);
    };

    const handleAddConfirm = () => {
        if (startDate && endDate) {
            const newRow = createData(rows.length + 1, startDate.format('YYYY-MM-DD'), endDate.format('YYYY-MM-DD'));
            setRows([...rows, newRow]);
        }
        setOpenAddModal(false);
    };

  return (
    <>
      <Dialog open={open} onClose={handleClose} maxWidth={false} slotProps={{ paper: {sx: { width: '80%', height: '80%' } }}}>
        <DialogTitle id="form-dialog-title">Editar Lista de Precios</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ '& > :not(style)': { m: 2, marginLeft: 0, width: '100%' } }} noValidate autoComplete="off">
            <Box sx={{display: 'flex', alignItems: 'center', gap: 5}}>  
              <TextField id="inputNombre" label="Nombre" variant="outlined" placeholder="Ingrese el nombre de una Lista de Precios" sx={{width: '100%'}}/>
              <FormControlLabel
                control={<Checkbox />}
                label="Estado"
              />
            </Box>
          </Box>

          <Box sx={{ marginBottom: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <DialogTitle id="form-dialog-title">Calendario de Fechas</DialogTitle>
            <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleAddClick}>
              Añadir
            </Button>
          </Box>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell />
                  <StyledTableCell>Fecha de Inicio</StyledTableCell>
                  <StyledTableCell>Fecha de Fin</StyledTableCell>
                  <StyledTableCell>Eliminar</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell sx={{ width: '0%' }}>
                      <Checkbox checked={selectedRows.has(row.id)} onChange={() => handleCheckboxChange(row.id)} />
                    </StyledTableCell>
                    <StyledTableCell>{row.startDate}</StyledTableCell>
                    <StyledTableCell>{row.endDate}</StyledTableCell>
                    <StyledTableCell>
                      <Button onClick={() => handleDeleteClick(row.id)} sx={{color: "black"}}>
                      <DeleteForeverRoundedIcon />
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} sx={{ color: 'red', borderColor: 'red' }} size="large" variant="outlined">
            Cancelar
          </Button>
          <Button onClick={onSave} variant="contained" color="success" size="large" startIcon={<SaveIcon />} >
            Guardar
          </Button>
        </DialogActions>
      </Dialog>

      {/* Modal de Confirmación de Eliminación */}
      <Dialog open={openDeleteModal} onClose={() => setOpenDeleteModal(false)}>
        <DialogTitle>¿Está seguro de eliminar esta fecha?</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ display: 'flex', alignItems: 'center' }}>
            <WarningIcon sx={{ marginRight: 2 }} color="error" />
            Esta acción no se puede deshacer.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteModal(false)} sx={{ color: 'red', borderColor: 'red' }} variant="outlined">
            Cancelar
          </Button>
          <Button onClick={handleDeleteConfirm} variant="contained" color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>

      {/* Modal de Añadir Fechas */}
      <Dialog open={openAddModal} onClose={() => setOpenAddModal(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Añadir Fechas</DialogTitle>
        <DialogContent>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              <DatePicker
                label="Fecha de Inicio"
                value={startDate}
                onChange={(newValue) => setStartDate(newValue)}
              />
              <DatePicker
                label="Fecha de Fin"
                value={endDate}
                onChange={(newValue) => setEndDate(newValue)}
              />
            </Box>
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAddModal(false)} sx={{ color: 'red', borderColor: 'red' }} variant="outlined">
            Cancelar
          </Button>
          <Button onClick={handleAddConfirm} variant="contained" color="success" startIcon={<SaveIcon />}>
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
