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
  { title: 'Bloqueos' },
  { title: 'Capilar' },
  { title: 'Comprimido' },
  { title: 'Epidural' },
  { title: 'Genital' },
];

export default function NewFormaModal({open, handleClose, onSave} : {open: boolean; handleClose: () => void; onSave: () => void; }) {

  return (
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={false}
        PaperProps={{
            sx: {
                width: '80%',
                height: '80%',
            }
        }}
      >
        <DialogTitle id="form-dialog-title">Crear Nueva Forma del Fármaco</DialogTitle>
        <DialogContent>
          {/* Inputs de texto */}
          <Box
            component="form"
            sx={{ '& > :not(style)': {  m: 2, marginLeft: 0, width: '100%' } }}
            noValidate
            autoComplete="off"
          >
            <TextField id="inputNombre" label="Nombre" variant="outlined" />
          </Box>

          {/* Checkboxes */}
          <FormGroup row>
          <Box sx={{ marginRight: 1, width: '100%' }}>
          </Box>
            <FormControlLabel
              control={<Checkbox />}
              label="Estado"
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
                  label="Vía de Administración"
                  placeholder="Seleccionar"
                />
              )}
            />
          </Stack>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{color: 'red', borderColor: 'red'}} variant='outlined'>Cancelar</Button>
          <Button 
            onClick={onSave} 
            variant="contained" 
            color="success"
            startIcon={<SaveIcon />}>
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
  );
}
