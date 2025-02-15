import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import WarningIcon from '@mui/icons-material/Warning';

interface DeleteGrupoTerapeuticoProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteGrupoTerapeutico = ({ open, onClose, onConfirm }: DeleteGrupoTerapeuticoProps) => { 

    return (
    <Dialog open={open} onClose={onClose}>
    <DialogTitle>¿Está seguro de eliminar este Grupo Terapéutico?</DialogTitle>
    <DialogContent>
      <DialogContentText sx={{ display: 'flex', alignItems: 'center' }}>
        <WarningIcon sx={{ marginRight: 2 }} color="error" />
        Esta acción no se puede deshacer.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} sx={{ color: 'red', borderColor: 'red' }} color='error' variant="outlined" size='large'>
        Cancelar
      </Button>
      <Button onClick={onConfirm} variant="contained" color="primary" size='large'>
        OK
      </Button>
    </DialogActions>
  </Dialog>

    );
};

export default DeleteGrupoTerapeutico;