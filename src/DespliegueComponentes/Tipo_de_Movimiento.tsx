import { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, DialogContentText } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import deleteIcon from '/public/Eliminar.svg';
import newIcon from '/public/Vector.svg';
import { DeleteButtonTipoMovimiento, NewButtonTipoMovimiento } from '../components/Tipo_de_Movimiento/ButtonsTipoMovimiento';
import SearchToolBarTipoMovimiento from '../components/Tipo_de_Movimiento/SearchToolBarTipoMovimiento';
import DataTableTipoMovimiento from '../components/Tipo_de_Movimiento/BodyTipoMovimiento';
import NewTipoMovimientoModal from '../components/Tipo_de_Movimiento/modal/NewTipoMovimiento';
import EditTipoMovimientoModal from '../components/Tipo_de_Movimiento/modal/EditTipoMovimiento';
import { PageHeaderTipoMovimiento } from '../components/Tipo_de_Movimiento/HeaderTipoMovimiento';

export default function TipoMovimiento_Component () {

  const [isNewModalTipoMovimientoOpen, setIsNewModalTipoMovimientoOpen] = useState(false);
  const [isEditModalTipoMovimientoOpen, setIsEditModalTipoMovimientoOpen] = useState(false);
  const [openDeleteModalTipoMovimiento, setOpenDeleteModalTipoMovimiento] = useState(false);
  

  const showDeleteModal = () => {
    setOpenDeleteModalTipoMovimiento(true);
  };

  // Cerrar modal de confirmación de eliminación
  const handleDeleteClose = () => {
    setOpenDeleteModalTipoMovimiento(false);
  };

  // Confirmar eliminación
  const handleDeleteConfirm = () => {
    console.log('Elemento eliminado');
    setOpenDeleteModalTipoMovimiento(false);
  };
  
    const handleSearch = (value: string) => {
      console.log('Valor de búsqueda:', value);
    };

    const handleNewClick = () => {
      setIsNewModalTipoMovimientoOpen(true);
    };

    const handleNewClose = () => {
      setIsNewModalTipoMovimientoOpen(false);
    };

    const handleNewSave = () => {
      console.log('Formulario guardado');
      setIsNewModalTipoMovimientoOpen(false);
    }; 

    const handleEditClick = () => {
      setIsEditModalTipoMovimientoOpen(true);
    };
  
    const handleEditClose = () => {
      setIsEditModalTipoMovimientoOpen(false);
    };
  
    const handleEditSave = () => {
      console.log('Formulario de edición guardado');
      setIsEditModalTipoMovimientoOpen(false);
    };

    return(
  <>
    
      <div className="bodyContainerTipoMovimiento">
        <div className="tableContainerTipoMovimiento">
          <div className ="headerSearchContainerTipoMovimiento">
            <div className="headerContainerTipoMovimiento">
            <PageHeaderTipoMovimiento title = "Tipo de Movimiento" />
            </div>
            <div className ="SpaceTipoMovimiento">
              <SearchToolBarTipoMovimiento
                onSearch={handleSearch}
              />
            </div>
            <div className ="actionButtonsTipoMovimiento">
              <DeleteButtonTipoMovimiento
                text="ELIMINAR"
                onClick={showDeleteModal}
                icon={<img src={deleteIcon} alt=""/>}
              />
              <NewButtonTipoMovimiento
                text="NUEVO"
                onClick={handleNewClick}
                icon={< img src={newIcon} alt=""/>}
              />

            </div>
          </div>  
          <DataTableTipoMovimiento onEditClick={handleEditClick}/> 
        </div>
      </div>

    <Dialog open={openDeleteModalTipoMovimiento} onClose={handleDeleteClose}>
        <DialogTitle>¿Está seguro de eliminar este Tipo de Movimiento?</DialogTitle>
        <DialogContent>
        <DialogContentText sx={{ display: 'flex', alignItems: 'center' }}>
            <WarningIcon sx={{ marginRight: 2 }} color="error" />
            Esta acción no se puede deshacer.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteClose} sx={{color: 'red', borderColor: 'red'}} size='large' variant="outlined">
            Cancelar
          </Button>
          <Button onClick={handleDeleteConfirm} color='primary' size='large' variant="contained">
            OK
          </Button>
        </DialogActions>
    </Dialog>

        
    <NewTipoMovimientoModal
        open={isNewModalTipoMovimientoOpen}
        handleClose={handleNewClose}
        onSave={handleNewSave} 
    />

    <EditTipoMovimientoModal
        open={isEditModalTipoMovimientoOpen}
        handleClose={handleEditClose}
        onSave={handleEditSave}
    />
        
  </>
    );
};    