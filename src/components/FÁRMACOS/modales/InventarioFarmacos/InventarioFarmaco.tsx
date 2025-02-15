import * as React from 'react';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddIcon from '@mui/icons-material/Add';
import DeleteBodega from '../InventarioFarmacos/Eliminar_Inventario/DeleteB';
import DeletePrecioProductos from '../InventarioFarmacos/Eliminar_Inventario/DeletePP';
import AddBodega from './Añadir_Inventario/AñadirB';
import AddPrecioProductos from './Añadir_Inventario/AñadirPP';


const InventarioFarmaco = () => {

  const [openDeleteModalB, setOpenDeleteModalB] = React.useState(false);
  const [openDeleteModalPP, setOpenDeleteModalPP] = React.useState(false);
  const [openAddB, setOpenAddB] = React.useState(false);
  const [openAddPP, setOpenAddPP] = React.useState(false);

  const handleDeleteBClick = () => {
    setOpenDeleteModalB(true);
  };

  const handleDeleteBClose = () => {
    setOpenDeleteModalB(false);
  };

  const handleDeleteBConfirm = () => {
    // Lógica para eliminar el elemento
    setOpenDeleteModalB(false);
  };
  
  const handleDeletePPClick = () => {
    setOpenDeleteModalPP(true);
  };

  const handleDeletePPClose = () => {
    setOpenDeleteModalPP(false);
  };

  const handleDeletePPConfirm = () => {
    // Lógica para eliminar el elemento
    setOpenDeleteModalPP(false);
  };

  const handleAddBClick = () => {
    setOpenAddB(true);
  };

  const handleAddBClose = () => {
    setOpenAddB(false);
  };

  const handleAddBConfirm = () => {
    // Lógica para añadir el elemento
    setOpenAddB(false);
  };

  const handleAddPPClick = () => {
    setOpenAddPP(true);
  };

  const handleAddPPClose = () => {
    setOpenAddPP(false);
  };

  const handleAddPPConfirm = () => {
    // Lógica para añadir el elemento
    setOpenAddPP(false);
  };

  interface RenderDeleteIconProps {
    handleClick: () => void;
  }

  const renderDeleteIcon: React.FC<RenderDeleteIconProps> = ({ handleClick }) => (
      <IconButton sx={{color: "black"}} onClick={handleClick} >
        <DeleteForeverRoundedIcon />
      </IconButton>
  );

  const renderViewIcon = () => (
    <IconButton sx={{color: "black"}}>
      <VisibilityIcon />
    </IconButton>
  );

  return (
    <>
    <DeleteBodega open={openDeleteModalB} onClose={handleDeleteBClose} onConfirm={handleDeleteBConfirm} />
    <DeletePrecioProductos open={openDeleteModalPP} onClose={handleDeletePPClose} onConfirm={handleDeletePPConfirm} />
    <AddBodega open={openAddB} onClose={handleAddBClose} onConfirm={handleAddBConfirm} />
    <AddPrecioProductos open={openAddPP} onClose={handleAddPPClose} onConfirm={handleAddPPConfirm} />

    <Paper elevation={5} sx={{ padding: 2, borderRadius: 2, width: '100%', boxShadow: 'rgba(118, 118, 128, 0.38)', backgroundColor: 'rgba(224, 224, 224, 0.17)' }}>

      {/* Tablas */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
        {/* Primera Tabla */}
        <Paper elevation={3} sx={{ width: '45%', padding: 2, borderRadius: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 1 }}>
            <h3>Bodega</h3>
            <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleAddBClick}>
              Añadir
            </Button>
          </Box>
          <TableContainer component={Paper} sx={{ backgroundColor: 'rgba(224, 224, 224, 0.64)' }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Estado</TableCell>
                  <TableCell>Eliminar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>
                  <FormGroup row>
                      <FormControlLabel control={<Checkbox />} label="" />
                    </FormGroup>
                  </TableCell>
                  <TableCell>{renderDeleteIcon({ handleClick: handleDeleteBClick })}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>
                    <FormGroup row>
                      <FormControlLabel control={<Checkbox />} label="" />
                    </FormGroup>
                  </TableCell>
                  <TableCell>{renderDeleteIcon({handleClick: handleDeleteBClick})}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        {/* Segunda Tabla */}
        <Paper elevation={3} sx={{ width: '45%', padding: 2, borderRadius: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 1 }}>
            <h3>Precio de Productos</h3>
            <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleAddPPClick}>
              Añadir
            </Button>
          </Box>
          <TableContainer component={Paper} sx={{ backgroundColor: 'rgba(224, 224, 224, 0.64)' }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Lista</TableCell>
                  <TableCell>Precio</TableCell>
                  <TableCell>Descuento</TableCell>
                  <TableCell>Eliminar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>$9999</TableCell>
                  <TableCell>50%</TableCell>
                  <TableCell>{renderDeleteIcon({ handleClick: handleDeletePPClick })}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>$9999</TableCell>
                  <TableCell>50%</TableCell>
                  <TableCell>{renderDeleteIcon({ handleClick: handleDeletePPClick})}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>

        {/* Tercera Tabla */}
        <Box sx={{ marginTop: 3 }}>
        <Paper elevation={3} sx={{ width: '97%', padding: 2, borderRadius: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 1 }}>
            <h3>Lotes</h3>
          </Box>
          <TableContainer component={Paper} sx={{ backgroundColor: 'rgba(224, 224, 224, 0.64)' }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Medicamento</TableCell>
                  <TableCell>Número de Lote</TableCell>
                  <TableCell>Fecha de Fabricación</TableCell>
                  <TableCell>Fecha de Vencimiento</TableCell>
                  <TableCell>Stock</TableCell>
                  <TableCell>Estado</TableCell> 
                  <TableCell>Visualizar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Medicamento</TableCell>
                  <TableCell>123456</TableCell>
                  <TableCell>01/01/2024</TableCell>
                  <TableCell>11/10/2024</TableCell>
                  <TableCell>
                    <FormGroup row>
                      <FormControlLabel control={<Checkbox />} label="" />
                    </FormGroup>
                  </TableCell>
                  <TableCell>
                    <FormGroup row>
                      <FormControlLabel control={<Checkbox />} label="" />
                    </FormGroup>
                  </TableCell>
                  <TableCell>{renderViewIcon()}</TableCell>
                </TableRow>
                <TableRow>
                <TableCell>Medicamento</TableCell>
                  <TableCell>123456</TableCell>
                  <TableCell>01/01/2024</TableCell>
                  <TableCell>11/10/2024</TableCell>
                  <TableCell>
                    <FormGroup row>
                      <FormControlLabel control={<Checkbox />} label="" />
                    </FormGroup>
                  </TableCell>
                  <TableCell>
                    <FormGroup row>
                      <FormControlLabel control={<Checkbox />} label="" />
                    </FormGroup>
                  </TableCell>
                  <TableCell>{renderViewIcon()}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
    </Box>
    </Paper>
  </>
  );
};

export default InventarioFarmaco;