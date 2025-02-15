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
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import SaveIcon from '@mui/icons-material/Save';
//import Chip from '@mui/material/Chip';//

const datos = [
  { title: 'Afección Hepática' },
  { title: 'Aminoácido' },
  { title: 'Analgésico' },
  { title: 'Adhesica' },
  { title: 'Acción Anti' },
];

export default function NewPrincipioModal({open, handleClose, onSave} : {open: boolean; handleClose: () => void; onSave: () => void; }) {

  return (
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={false}
        slotProps={{ 
          paper: {
            sx: {
                width: '80%',
                height: '80%',
            }
          }
        }}
      >
        <DialogTitle id="form-dialog-title">Crear Nuevo Principio Activo</DialogTitle>
        <DialogContent>
          {/* Inputs de texto */}
          <Box
            component="form"
            sx={{ '& > :not(style)': {  m: 2, marginLeft: 0, width: '100%' } }}
            noValidate
            autoComplete="off"
          >
            <TextField id="inputNombre" label="Nombre" placeholder="Ingresa el nombre de un principio activo"variant="outlined" />
            <TextField id="inputObservación" label="Observación" placeholder='Ingresa alguna observación sobre este principio activo' variant="outlined" />
          </Box>

          {/* Checkboxes */}
          <FormGroup row>
          <Box sx={{ marginRight: 1 }}>
          </Box>
            <FormControlLabel
              control={<Checkbox />}
              label="Estado"
            />
              <FormControlLabel
              control={<Checkbox />}
              label="MAR"
            />
          </FormGroup>

          {/* Inputs seleccionables */}
          <Stack spacing={3} sx={{ width: '100%', mt: 2 }}>
            <Autocomplete
              multiple
              id="tags-standard"
              options={datos}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Grupo Terapéutico"
                  placeholder="Seleccionar"
                />
              )}
            />
          </Stack>

          <Stack sx={{ width: '100%', mt: 4 }}>
          <Autocomplete
              disablePortal
              options={datos}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => <TextField {...params} label="Categoría" placeholder='Seleccionar'/>}
          />
          </Stack>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{color: 'red', borderColor: 'red'}} size='large' variant='outlined'>Cancelar</Button>
          <Button 
            onClick={onSave} 
            variant="contained" 
            size='large'
            color="success"
            startIcon={<SaveIcon />}>
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
  );
}
