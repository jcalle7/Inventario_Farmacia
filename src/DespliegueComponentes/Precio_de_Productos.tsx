import { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, DialogContentText } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning'; 
import deleteIcon from '/public/Eliminar.svg';
import newIcon from '/public/Vector.svg';
import SearchToolBarPrecioProductos from '../components/Precio_de_Productos/SearchToolBarPrecioProductos';
import { DeleteButtonPrecioProductos, NewButtonPrecioProductos } from '../components/Precio_de_Productos/ButtonsPrecioProductos';
import NewPrecioProductosModal from '../components/Precio_de_Productos/modal/NewPrecioProductos';
import EditPrecioProductosModal from '../components/Precio_de_Productos/modal/EditPrecioProductos';
import DataTablePrecioProductos from '../components/Precio_de_Productos/BodyPrecioProductos';
import { PageHeaderPrecioProductos } from '../components/Precio_de_Productos/HeaderPrecioProductos';

export default function PrecioProductos_Component () {

  const [isNewModalPrecioProductosOpen, setIsNewModalPrecioProductosOpen] = useState(false);
  const [isEditModalPrecioProductosOpen, setIsEditModalPrecioProductosOpen] = useState(false);
  const [openDeleteModalPrecioProductos, setOpenDeleteModalPrecioProductos] = useState(false);
  

  const showDeleteModal = () => {
    setOpenDeleteModalPrecioProductos(true);
  };

  // Cerrar modal de confirmación de eliminación
  const handleDeleteClose = () => {
    setOpenDeleteModalPrecioProductos(false);
  };

  // Confirmar eliminación
  const handleDeleteConfirm = () => {
    console.log('Elemento eliminado');
    setOpenDeleteModalPrecioProductos(false);
  };
  
    const handleSearch = (value: string) => {
      console.log('Valor de búsqueda:', value);
    };

    const handleNewClick = () => {
      setIsNewModalPrecioProductosOpen(true);
    };

    const handleNewClose = () => {
      setIsNewModalPrecioProductosOpen(false);
    };

    const handleNewSave = () => {
      console.log('Formulario guardado');
      setIsNewModalPrecioProductosOpen(false);
    }; 

    const handleEditClick = () => {
      setIsEditModalPrecioProductosOpen(true);
    };
  
    const handleEditClose = () => {
      setIsEditModalPrecioProductosOpen(false);
    };
  
    const handleEditSave = () => {
      console.log('Formulario de edición guardado');
      setIsEditModalPrecioProductosOpen(false);
    };

    return(
  <>
    
      <div className="bodyContainerPrecioProductos">
        <div className="tableContainerPrecioProductos">
          <div className ="headerSearchContainerPrecioProductos">
            <div className="headerContainerPrecioProductos">
            <PageHeaderPrecioProductos title = "Precio de Productos" />
            </div>
            <div className ="SpacePrecioProductos">
              <SearchToolBarPrecioProductos
                onSearch={handleSearch}
              />
            </div>
            <div className ="actionButtonsPrecioProductos">
              <DeleteButtonPrecioProductos
                text="ELIMINAR"
                onClick={showDeleteModal}
                icon={<img src={deleteIcon} alt=""/>}
              />
              <NewButtonPrecioProductos
                text="NUEVO"
                onClick={handleNewClick}
                icon={< img src={newIcon} alt=""/>}
              />

            </div>
          </div>  
          <DataTablePrecioProductos onEditClick={handleEditClick}/> 
        </div>
      </div>

    <Dialog open={openDeleteModalPrecioProductos} onClose={handleDeleteClose}>
        <DialogTitle>¿Está seguro de eliminar este Precio de Productos?</DialogTitle>
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

        
    <NewPrecioProductosModal
        open={isNewModalPrecioProductosOpen}
        handleClose={handleNewClose}
        onSave={handleNewSave} 
    />

    <EditPrecioProductosModal
        open={isEditModalPrecioProductosOpen}
        handleClose={handleEditClose}
        onSave={handleEditSave}
    />
        
  </>
    );
};    