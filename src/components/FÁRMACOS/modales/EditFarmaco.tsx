import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import SaveIcon from '@mui/icons-material/Save';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MedicoFarmaco from './MedicoFarmacos/MedicoFarmacos';
import InventarioFarmaco from './InventarioFarmacos/InventarioFarmaco';
import KardexFarmaco from './KardexFarmacos/KardexFarmaco';

export default function EditFarmacoModal({open, handleClose, onSave} : {open: boolean; handleClose: () => void; onSave: () => void; }) {

  const [value, setValue] = React.useState('1');

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={false}
        slotProps={{
          paper: {
          sx: {
              width: '85%',
              height: '85%',
          }
        }
      }}
      >
        <DialogTitle id="form-dialog-title">Editar Mantenimiento de Fármacos</DialogTitle>
        <DialogContent>
          {/* Inputs de texto y Checkboxes */}
          <Paper elevation={5} sx={{ padding: 1.5, borderRadius: 2, width: '95%', boxShadow: 'rgba(118, 118, 128, 0.38)', backgroundColor: 'rgba(224, 224, 224, 0.64)' }}>
            <Box
              component="form"
              sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', '& > :not(style)': { m: 2, width: '30%' } }}
              noValidate
              autoComplete="off"
            >
              <TextField id="inputNombre" label="Nombre Comercial" variant="outlined" placeholder="Ingrese un nombre comercial" />
              <TextField id="inputCodigoDeBarras" label="Código de Barras" variant="outlined" placeholder="Digite un código de barras" />
              <FormGroup row sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginLeft: 1, width: '100%' }}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Estado"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Stock"
                />
              </FormGroup>
            </Box>
          </Paper>

            {/* Tabs */}
            <Box sx={{ width: '95%', typography: 'body1', marginTop: 4 }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange}>
                  <Tab label="MÉDICO" value="1" />
                  <Tab label="INVENTARIO" value="2" />
                  <Tab label="KÁRDEX" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1"><MedicoFarmaco /></TabPanel>
              <TabPanel value="2"><InventarioFarmaco /></TabPanel>
              <TabPanel value="3"><KardexFarmaco /></TabPanel>
            </TabContext>
          </Box>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{color: 'red', borderColor: 'red'}} size='large' variant='outlined'>Cancelar</Button>
          <Button 
            onClick={onSave} 
            variant="contained" 
            color="success"
            size='large'
            startIcon={<SaveIcon />}>
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
  );
}
