import { useState } from 'react';
import  DataTable from '../components/Principio_Activo/BodyPrincipio';
import  SearchToolbar from '../components/Principio_Activo/SearchToolBarPrincipio';
import { DeleteButton, NewButton } from '../components/Principio_Activo/ButtonsPrincipio';
import { PageHeader } from '../components/Principio_Activo/HeaderPrincipio';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, DialogContentText } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning'; 
import  NewPrincipioModal  from '../components/Principio_Activo/Modal/NewPrincipio';
import EditPrincipioModal from '../components/Principio_Activo/Modal/EditPrincipio';
import deleteIcon from '/public/Eliminar.svg';
import newIcon from '/public/Vector.svg';

export default function Principio_Component () {

  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  

  const showDeleteModal = () => {
    setOpenDeleteModal(true);
  };

  // Cerrar modal de confirmación de eliminación
  const handleDeleteClose = () => {
    setOpenDeleteModal(false);
  };

  // Confirmar eliminación
  const handleDeleteConfirm = () => {
    console.log('Elemento eliminado');
    setOpenDeleteModal(false);
  };
  
    const handleSearch = (value: string) => {
      console.log('Valor de búsqueda:', value);
    };

    const handleNewClick = () => {
      setIsNewModalOpen(true);
    };

    const handleNewClose = () => {
      setIsNewModalOpen(false);
    };

    const handleNewSave = () => {
      console.log('Formulario guardado');
      setIsNewModalOpen(false);
    }; 

    const handleEditClick = () => {
      setIsEditModalOpen(true);
    };
  
    const handleEditClose = () => {
      setIsEditModalOpen(false);
    };
  
    const handleEditSave = () => {
      console.log('Formulario de edición guardado');
      setIsEditModalOpen(false);
    };

    return(
  <>
      <div className="bodyContainer">
        <div className="tableContainer">
          <div className ="headerSearchContainer">
            <div className="headerContainer">
              <PageHeader title = "Principio Activo" />
            </div>
            <div className ="Space">
              <SearchToolbar 
                onSearch={handleSearch}
              />
            </div>
            <div className ="actionButtons">
              <DeleteButton
                text="ELIMINAR"
                onClick={showDeleteModal}
                icon={<img src={deleteIcon} alt=""/>}
              />
              <NewButton 
                text="NUEVO"
                onClick={handleNewClick}
                icon={<img src={newIcon} alt=""/>}
              />
            </div>
          </div>  
          <DataTable onEditClick={handleEditClick}/> 
        </div>
      </div>

      <Dialog open={openDeleteModal} onClose={handleDeleteClose}>
        <DialogTitle>¿Está seguro de eliminar este Principio Activo?</DialogTitle>
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

        
      <NewPrincipioModal
        open={isNewModalOpen}
        handleClose={handleNewClose}
        onSave={handleNewSave} 
      />

      <EditPrincipioModal
        open={isEditModalOpen}
        handleClose={handleEditClose}
        onSave={handleEditSave}
      />
        
  </>
    );
};