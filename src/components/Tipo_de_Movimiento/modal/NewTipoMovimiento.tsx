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
import SaveIcon from '@mui/icons-material/Save';

export default function NewTipoMovimientoModal({open, handleClose, onSave} : {open: boolean; handleClose: () => void; onSave: () => void; }) {

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
        <DialogTitle id="form-dialog-title">Crear Nuevo Tipo de Movimiento</DialogTitle>
        <DialogContent>
          {/* Inputs de texto */}
          <Box
            component="form"
            sx={{ '& > :not(style)': {  m: 2, marginLeft: 0, width: '100%' } }}
            noValidate
            autoComplete="off"
          >
            <TextField id="inputNombre" label="Tipo" variant="outlined" placeholder="Ingrese un tipo de movimiento"/>
          </Box>

          {/* Checkboxes */}
          <FormGroup row>
          <Box sx={{ marginLeft: 1, width: '100%' }}>
          </Box>
            <FormControlLabel
              control={<Checkbox />}
              label="Estado"
            />
          </FormGroup>

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
