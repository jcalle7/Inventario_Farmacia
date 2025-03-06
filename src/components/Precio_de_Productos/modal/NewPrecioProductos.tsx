import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SaveIcon from '@mui/icons-material/Save';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

export default function NewPrecioProductosModal({open, handleClose, onSave} : {open: boolean; handleClose: () => void; onSave: () => void; }) {

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
        <DialogTitle id="form-dialog-title">Crear Nuevo Precio de Productos</DialogTitle>
        <DialogContent>
          {/* Inputs de texto */}
          <Box
            component="form"
            sx={{ '& > :not(style)': {  m: 2, marginLeft: 0, width: '100%' } }}
            noValidate
            autoComplete="off"
          >
            <TextField id="inputLista" label="Lista" variant="outlined" placeholder='Ingrese una lista de precio de productos' />
            <TextField id="inputItem" label="Ítem" variant="outlined" placeholder='Ingrese el nombre de un ítem' />
            <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Precio</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
              label="Precio"
              placeholder='Ingrese el precio de un producto'
              type="number"
              inputProps={{ min: 0 }}
            />
          </FormControl>
          <TextField
            id="inputDescuento"
            label="Descuento (%)"
            placeholder='Ingrese el descuento de un producto'
            variant="outlined"
            type="number"
            slotProps={{ htmlInput: {min: 0, max: 100 } }}
          />
          </Box>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{color: 'red', borderColor: 'red'}} variant='outlined' size='large'>Cancelar</Button>
          <Button 
            onClick={onSave} 
            variant="contained" 
            color="success"
            startIcon={<SaveIcon />}
            size='large'>
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
  );
}
