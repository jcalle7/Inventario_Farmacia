import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';

export default function DeleteTipoMovimiento() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogActions>
          <Button onClick={handleClose}></Button>
          <Button onClick={handleClose} autoFocus>
          
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
