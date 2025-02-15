import { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, DialogContentText } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning'; 
import NewBodegaModal  from '../components/Bodega/modal/NewBodega';
import EditBodegaModal from '../components/Bodega/modal/EditBodega';
import deleteIcon from '/public/Eliminar.svg';
import newIcon from '/public/Vector.svg';
import SearchToolBarBodega from '../components/Bodega/SearchToolBarBodega';
import { DeleteButtonBodega, NewButtonBodega } from '../components/Bodega/ButtonsBodega';
import DataTableBodega from '../components/Bodega/BodyBodega';
import { PageHeaderBodega } from '../components/Bodega/HeaderBodega';

export default function Bodega_Component () {

  const [isNewModalBodegaOpen, setIsNewModalBodegaOpen] = useState(false);
  const [isEditModalBodegaOpen, setIsEditModalBodegaOpen] = useState(false);
  const [openDeleteModalBodega, setOpenDeleteModalBodega] = useState(false);
  

  const showDeleteModal = () => {
    setOpenDeleteModalBodega(true);
  };

  // Cerrar modal de confirmación de eliminación
  const handleDeleteClose = () => {
    setOpenDeleteModalBodega(false);
  };

  // Confirmar eliminación
  const handleDeleteConfirm = () => {
    console.log('Elemento eliminado');
    setOpenDeleteModalBodega(false);
  };
  
    const handleSearch = (value: string) => {
      console.log('Valor de búsqueda:', value);
    };

    const handleNewClick = () => {
      setIsNewModalBodegaOpen(true);
    };

    const handleNewClose = () => {
      setIsNewModalBodegaOpen(false);
    };

    const handleNewSave = () => {
      console.log('Formulario guardado');
      setIsNewModalBodegaOpen(false);
    }; 

    const handleEditClick = () => {
      setIsEditModalBodegaOpen(true);
    };
  
    const handleEditClose = () => {
      setIsEditModalBodegaOpen(false);
    };
  
    const handleEditSave = () => {
      console.log('Formulario de edición guardado');
      setIsEditModalBodegaOpen(false);
    };

    return(
  <>
    
      <div className="bodyContainerBodega">
        <div className="tableContainerBodega">
          <div className ="headerSearchContainerBodega">
            <div className="headerContainerBodega">
            <PageHeaderBodega title = "Bodega" />
            </div>
            <div className ="SpaceBodega">
              <SearchToolBarBodega
                onSearch={handleSearch}
              />
            </div>
            <div className ="actionButtonsBodega">
              <DeleteButtonBodega
                text="ELIMINAR"
                onClick={showDeleteModal}
                icon={<img src={deleteIcon} alt=""/>}
              />
              <NewButtonBodega
                text="NUEVO"
                onClick={handleNewClick}
                icon={< img src={newIcon} alt=""/>}
              />

            </div>
          </div>  
          <DataTableBodega onEditClick={handleEditClick}/> 
        </div>
      </div>

    <Dialog open={openDeleteModalBodega} onClose={handleDeleteClose}>
        <DialogTitle>¿Está seguro de eliminar esta Bodega?</DialogTitle>
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

        
    <NewBodegaModal
        open={isNewModalBodegaOpen}
        handleClose={handleNewClose}
        onSave={handleNewSave} 
    />

    <EditBodegaModal
        open={isEditModalBodegaOpen}
        handleClose={handleEditClose}
        onSave={handleEditSave}
    />
        
  </>
    );
};    