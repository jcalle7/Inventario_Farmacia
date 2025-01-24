import { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, DialogContentText } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning'; 
import NewAdministracionModal  from '../components/Forma_De_Administracion/modal/NewAdministracion';
import EditAdministracionModal from '../components/Forma_De_Administracion/modal/EditAdministracion';
import deleteIcon from '/public/Eliminar.svg';
import newIcon from '/public/Nuevo.svg';
import { PageHeaderAdministracion } from '../components/Forma_De_Administracion/HeaderAdministracion';
import { DeleteButtonAdministracion, NewButtonAdministracion } from '../components/Forma_De_Administracion/ButtonsAdministracion';
import DataTableAdministracion from '../components/Forma_De_Administracion/BodyAdministracion';
import SearchToolBarAdministracion from '../components/Forma_De_Administracion/SearchToolBarAdministracion';

export default function Administracion_Component () {

  const [isNewModalAdministracionOpen, setIsNewModalAdministracionOpen] = useState(false);
  const [isEditModalAdministracionOpen, setIsEditModalAdministracionOpen] = useState(false);
  const [openDeleteModalAdministracion, setOpenDeleteModalAdministracion] = useState(false);
  

  const showDeleteModal = () => {
    setOpenDeleteModalAdministracion(true);
  };

  // Cerrar modal de confirmación de eliminación
  const handleDeleteClose = () => {
    setOpenDeleteModalAdministracion(false);
  };

  // Confirmar eliminación
  const handleDeleteConfirm = () => {
    console.log('Elemento eliminado');
    setOpenDeleteModalAdministracion(false);
  };
  
    const handleSearch = (value: string) => {
      console.log('Valor de búsqueda:', value);
    };

    const handleNewClick = () => {
      setIsNewModalAdministracionOpen(true);
    };

    const handleNewClose = () => {
      setIsNewModalAdministracionOpen(false);
    };

    const handleNewSave = () => {
      console.log('Formulario guardado');
      setIsNewModalAdministracionOpen(false);
    }; 

    const handleEditClick = () => {
      setIsEditModalAdministracionOpen(true);
    };
  
    const handleEditClose = () => {
      setIsEditModalAdministracionOpen(false);
    };
  
    const handleEditSave = () => {
      console.log('Formulario de edición guardado');
      setIsEditModalAdministracionOpen(false);
    };

    return(
  <>
    
      <div className="bodyContainerAdministracion">
        <div className="tableContainerAdministracion">
          <div className ="headerSearchContainerAdministracion">
            <div className="headerContainerAdministracion">
            <PageHeaderAdministracion title = "Forma de Administración" />
            </div>
            <div className ="SpaceAdministracion">
              <SearchToolBarAdministracion
                onSearch={handleSearch}
              />
            </div>
            <div className ="actionButtonsAdministracion">
              <DeleteButtonAdministracion
                text="Eliminar"
                onClick={showDeleteModal}
                icon={<img src={deleteIcon} alt=""/>}
              />
              <NewButtonAdministracion
                text="Nuevo"
                onClick={handleNewClick}
                icon={<img src={newIcon} alt=""/>}
              />
            </div>
          </div>  
          <DataTableAdministracion onEditClick={handleEditClick}/> 
        </div>
      </div>

    <Dialog open={openDeleteModalAdministracion} onClose={handleDeleteClose}>
        <DialogTitle>¿Está seguro de eliminar esta Forma de Administración?</DialogTitle>
        <DialogContent>
        <DialogContentText sx={{ display: 'flex', alignItems: 'center' }}>
            <WarningIcon sx={{ marginRight: 2 }} color="error" />
            Esta acción no se puede deshacer.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteClose} sx={{color: 'red', borderColor: 'red'}} variant="outlined">
            Cancelar
          </Button>
          <Button onClick={handleDeleteConfirm} sx={{color: 'white', borderColor: '#1890ff', backgroundColor: '#1890ff'}} variant="contained">
            OK
          </Button>
        </DialogActions>
    </Dialog>

        
    <NewAdministracionModal
        open={isNewModalAdministracionOpen}
        handleClose={handleNewClose}
        onSave={handleNewSave} 
    />

    <EditAdministracionModal
        open={isEditModalAdministracionOpen}
        handleClose={handleEditClose}
        onSave={handleEditSave}
    />
        
  </>
    );
};