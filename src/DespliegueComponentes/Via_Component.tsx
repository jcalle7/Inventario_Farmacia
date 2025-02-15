import { useState } from 'react';
import  DataTableVia from '../components/Via_De_Administracion/BodyVia';
import  SearchToolBarVia from '../components/Via_De_Administracion/SearchToolBarVia';
import { DeleteButtonVia, NewButtonVia } from '../components/Via_De_Administracion/ButtonsVia';
import { PageHeaderVia } from '../components/Via_De_Administracion/HeaderVia';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, DialogContentText } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning'; 
import NewViaModal  from '../components/Via_De_Administracion/Modal/NewVia';
import EditViaModal from '../components/Via_De_Administracion/Modal/EditVia';
import deleteIcon from '/public/Eliminar.svg';
import newIcon from '/public/Vector.svg';

export default function Via_Component () {

  const [isNewModalViaOpen, setIsNewModalViaOpen] = useState(false);
  const [isEditModalViaOpen, setIsEditModalViaOpen] = useState(false);
  const [openDeleteModalVia, setOpenDeleteModalVia] = useState(false);
  

  const showDeleteModal = () => {
    setOpenDeleteModalVia(true);
  };

  // Cerrar modal de confirmación de eliminación
  const handleDeleteClose = () => {
    setOpenDeleteModalVia(false);
  };

  // Confirmar eliminación
  const handleDeleteConfirm = () => {
    console.log('Elemento eliminado');
    setOpenDeleteModalVia(false);
  };
  
    const handleSearch = (value: string) => {
      console.log('Valor de búsqueda:', value);
    };

    const handleNewClick = () => {
      setIsNewModalViaOpen(true);
    };

    const handleNewClose = () => {
      setIsNewModalViaOpen(false);
    };

    const handleNewSave = () => {
      console.log('Formulario guardado');
      setIsNewModalViaOpen(false);
    }; 

    const handleEditClick = () => {
      setIsEditModalViaOpen(true);
    };
  
    const handleEditClose = () => {
      setIsEditModalViaOpen(false);
    };
  
    const handleEditSave = () => {
      console.log('Formulario de edición guardado');
      setIsEditModalViaOpen(false);
    };

    return(
  <>

    
      <div className="bodyContainerVia">
        <div className="tableContainerVia">
          <div className ="headerSearchContainerVia">
            <div className="headerContainerVia">
            <PageHeaderVia title = "Vía de Administración" />
            </div>
            <div className ="SpaceVia">
              <SearchToolBarVia 
                onSearch={handleSearch}
              />
            </div>
            <div className ="actionButtonsVia">
              <DeleteButtonVia
                text="ELIMINAR"
                onClick={showDeleteModal}
                icon={<img src={deleteIcon} alt=""/>}
              />
              <NewButtonVia 
                text="NUEVO"
                onClick={handleNewClick}
                icon={<img src={newIcon} alt=""/>}
              />
            </div>
          </div>  
          <DataTableVia onEditClick={handleEditClick}/> 
        </div>
      </div>

    <Dialog open={openDeleteModalVia} onClose={handleDeleteClose}>
        <DialogTitle>¿Está seguro de eliminar esta Vía de Administración?</DialogTitle>
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

        
    <NewViaModal
        open={isNewModalViaOpen}
        handleClose={handleNewClose}
        onSave={handleNewSave} 
    />

    <EditViaModal
        open={isEditModalViaOpen}
        handleClose={handleEditClose}
        onSave={handleEditSave}
    />
        
  </>
    );
};