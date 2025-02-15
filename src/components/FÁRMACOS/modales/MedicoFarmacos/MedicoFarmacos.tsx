import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
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
import AddIcon from '@mui/icons-material/Add';
import DeletePrincipioActivo from './Eliminar_Medico/DeletePA';
import DeleteViaAdministracion from './Eliminar_Medico/DeleteVA';
import DeleteGrupoTerapeutico from './Eliminar_Medico/DeleteGT';
import AddPrincipioActivo from './Añadir_Medico/AñadirPA';
import AddViaAdministracion from './Añadir_Medico/AñadirVA';
import AddGrupoTerapeutico from './Añadir_Medico/AñadirGT';

const MedicoFarmaco = () => {

  const [openDeleteModalPA, setOpenDeleteModalPA] = React.useState(false);
  const [openDeleteModalVA, setOpenDeleteModalVA] = React.useState(false);
  const [openDeleteModalGT, setOpenDeleteModalGT] = React.useState(false);
  const [openAddPA, setOpenAddPA] = React.useState(false);
  const [openAddVA, setOpenAddVA] = React.useState(false);
  const [openAddGT, setOpenAddGT] = React.useState(false);

  const handleDeletePAClick = () => {
    setOpenDeleteModalPA(true);
  };

  const handleDeletePAClose = () => {
    setOpenDeleteModalPA(false);
  };

  const handleDeletePAConfirm = () => {
    // Lógica para eliminar el elemento
    setOpenDeleteModalPA(false);
  };
  
  const handleDeleteVAClick = () => {
    setOpenDeleteModalVA(true);
  };

  const handleDeleteVAClose = () => {
    setOpenDeleteModalVA(false);
  };

  const handleDeleteVAConfirm = () => {
    // Lógica para eliminar el elemento
    setOpenDeleteModalVA(false);
  };

  
  const handleDeleteGTClick = () => {
    setOpenDeleteModalGT(true);
  };

  const handleDeleteGTClose = () => {
    setOpenDeleteModalGT(false);
  };

  const handleDeleteGTConfirm = () => {
    // Lógica para eliminar el elemento
    setOpenDeleteModalGT(false);
  };

  const handleAddPAClick = () => {
    setOpenAddPA(true);
  };

  const handleAddPAClose = () => {
    setOpenAddPA(false);
  };

  const handleAddPAConfirm = () => {
    // Lógica para añadir el elemento
    setOpenAddPA(false);
  };

  const handleAddVAClick = () => {
    setOpenAddVA(true);
  };

  const handleAddVAClose = () => {
    setOpenAddVA(false);
  };

  const handleAddVAConfirm = () => {
    // Lógica para añadir el elemento
    setOpenAddVA(false);
  };

  const handleAddGTClick = () => {
    setOpenAddGT(true);
  };

  const handleAddGTClose = () => {
    setOpenAddGT(false);
  };

  const handleAddGTConfirm = () => {
    // Lógica para añadir el elemento
    setOpenAddGT(false);
  };

  interface RenderDeleteIconProps {
    handleClick: () => void;
  }

  const renderDeleteIcon: React.FC<RenderDeleteIconProps> = ({ handleClick }) => (
      <IconButton sx={{color: "black"}} onClick={handleClick} >
        <DeleteForeverRoundedIcon />
      </IconButton>
  );

  return (
    <>
    <DeletePrincipioActivo open={openDeleteModalPA} onClose={handleDeletePAClose} onConfirm={handleDeletePAConfirm} />
    <DeleteViaAdministracion open={openDeleteModalVA} onClose={handleDeleteVAClose} onConfirm={handleDeleteVAConfirm} />
    <DeleteGrupoTerapeutico open={openDeleteModalGT} onClose={handleDeleteGTClose} onConfirm={handleDeleteGTConfirm} />
    <AddPrincipioActivo open={openAddPA} onClose={handleAddPAClose} onConfirm={handleAddPAConfirm} />
    <AddViaAdministracion open={openAddVA} onClose={handleAddVAClose} onConfirm={handleAddVAConfirm} />
    <AddGrupoTerapeutico open={openAddGT} onClose={handleAddGTClose} onConfirm={handleAddGTConfirm} />

    <Paper elevation={5} sx={{ padding: 2, borderRadius: 2, width: '100%', boxShadow: 'rgba(118, 118, 128, 0.38)', backgroundColor: 'rgba(224, 224, 224, 0.17)' }}>
      <Box
        component="form"
        sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', '& > :not(style)': { m: 1.5, width: '30%' } }}
        noValidate
        autoComplete="off"
      >
        <TextField id="inputLaboratorio" label="Laboratorio" variant="outlined" placeholder="Ingrese el nombre de un laboratorio" />
        <TextField id="presentacion" label="Presentación" variant="outlined" placeholder="Ingrese el nombre de una presentación " />
        <FormGroup row sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginRight: 1 }}>
          <FormControlLabel
            control={<Checkbox />}
            label="LASA"
          />
        </FormGroup>
      </Box>

      {/* Tablas */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
        {/* Primera Tabla */}
        <Paper elevation={3} sx={{ width: '32%', padding: 2, borderRadius: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
            <h3>Principio Activo</h3>
            <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleAddPAClick}>
              Añadir
            </Button>
          </Box>
          <TableContainer component={Paper} sx={{ backgroundColor: 'rgba(224, 224, 224, 0.64)' }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Concentración</TableCell>
                  <TableCell>MAR</TableCell>
                  <TableCell>Eliminar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>
                    <TextField variant="outlined" size="small" />
                  </TableCell>
                  <TableCell>
                    <FormGroup row>
                      <FormControlLabel control={<Checkbox />} label="" />
                    </FormGroup>
                  </TableCell>
                  <TableCell>{renderDeleteIcon({ handleClick: handleDeletePAClick })}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>
                    <TextField variant="outlined" size="small" />
                  </TableCell>
                  <TableCell>
                    <FormGroup row>
                      <FormControlLabel control={<Checkbox />} label="" />
                    </FormGroup>
                  </TableCell>
                  <TableCell>{renderDeleteIcon({handleClick: handleDeletePAClick})}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        {/* Segunda Tabla */}
        <Paper elevation={3} sx={{ width: '29%', padding: 2, borderRadius: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
            <h3>Vía de Administración</h3>
            <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleAddVAClick}>
              Añadir
            </Button>
          </Box>
          <TableContainer component={Paper} sx={{ backgroundColor: 'rgba(224, 224, 224, 0.64)' }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Eliminar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>{renderDeleteIcon({ handleClick: handleDeleteVAClick })}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>{renderDeleteIcon({ handleClick: handleDeleteVAClick})}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        {/* Tercera Tabla */}
        <Paper elevation={3} sx={{ width: '28%', padding: 2, borderRadius: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
            <h3>Grupo Terapéutico</h3>
            <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleAddGTClick}>
              Añadir
            </Button>
          </Box>
          <TableContainer component={Paper} sx={{ backgroundColor: 'rgba(224, 224, 224, 0.64)' }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Eliminar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>{renderDeleteIcon({ handleClick: handleDeleteGTClick })}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>{renderDeleteIcon({ handleClick: handleDeleteGTClick})}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
  </Paper>

  <Paper elevation={5} sx={{ padding: 2, borderRadius: 2, width: '100%', boxShadow: 'rgba(118, 118, 128, 0.38)', backgroundColor: 'rgba(224, 224, 224, 0.17)', marginTop: 3 }}>
      <Box
        component="form"
        sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', '& > :not(style)': { m: 1.5, width: '95%' } }}
        noValidate
        autoComplete="off"
      >
        <TextField id="inputLaboratorio" label="Forma del Fármaco" variant="outlined" placeholder="Ingrese el nombre de una forma de un fármaco" />
        <TextField id="presentacion" label="Forma de Administración" variant="outlined" placeholder="Ingrese el nombre de una forma de administración" />
        <TextField id="presentacion" label="Alternativa" variant="outlined" placeholder="Ingrese el nombre de una alternativa" />
        <TextField id="presentacion" label="Mensaje" variant="outlined" placeholder="Ingrese un mensaje" />
      </Box>
    </Paper>
  </>
  );
};

export default MedicoFarmaco;