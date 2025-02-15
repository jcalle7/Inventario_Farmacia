import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import SaveIcon from '@mui/icons-material/Save';

interface AddBodegaProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const AddBodega = ({ open, onClose, onConfirm }: AddBodegaProps) => {

const datos = [
    { title: 'Aminoácido' },
    { title: 'Analgésico' },
    { title: 'Adhesica' },
    { title: 'Acción Anti' },
    { title: 'Afección Hepática' },
];
    return(
        <Dialog open={open} onClose={onClose} fullWidth maxWidth='md'>
        <DialogTitle>Añadir Bodega</DialogTitle>
        <DialogContent sx={{ height: '40vh', minHeight: '100px' }}>
        <DialogContent>
        <Stack sx={{ width: '100%', mt: 0 }}>
          <Autocomplete
              disablePortal
              options={datos}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => <TextField {...params} label="Buscar" placeholder='Selecciona una vía de administración' fullWidth             
              slotProps={{ 
                input: {
                ...params.InputProps,
                type: 'search',
              }
            }}
            />}
            />
          </Stack>
        </DialogContent>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} sx={{ color: 'red', borderColor: 'red' }} variant="outlined" size='large'>
            Cancelar
          </Button>
          <Button onClick={onConfirm} variant="contained" color="success" startIcon={<SaveIcon />} size='large'>
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    )
}

export default AddBodega;