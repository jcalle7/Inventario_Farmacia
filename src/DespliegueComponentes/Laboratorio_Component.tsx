import { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, DialogContentText } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning'; 
import NewLaboratorioModal  from '../components/Laboratorio/modal/NewLaboratorio';
import EditLaboratorioModal from '../components/Laboratorio/modal/EditLaboratorio';
import deleteIcon from '/public/Eliminar.svg';
import newIcon from '/public/Vector.svg';
import { PageHeaderLaboratorio } from '../components/Laboratorio/HeaderLaboratorio';
import SearchToolBarLaboratorio from '../components/Laboratorio/SearchToolBarLaboratorio';
import { DeleteButtonLaboratorio, NewButtonLaboratorio } from '../components/Laboratorio/ButtonsLaboratorio';
import DataTableLaboratorio from '../components/Laboratorio/BodyLaboratorio';

export default function Laboratorio_Component () {

  const [isNewModalLaboratorioOpen, setIsNewModalLaboratorioOpen] = useState(false);
  const [isEditModalLaboratorioOpen, setIsEditModalLaboratorioOpen] = useState(false);
  const [openDeleteModalLaboratorio, setOpenDeleteModalLaboratorio] = useState(false);
  

  const showDeleteModal = () => {
    setOpenDeleteModalLaboratorio(true);
  };

  // Cerrar modal de confirmación de eliminación
  const handleDeleteClose = () => {
    setOpenDeleteModalLaboratorio(false);
  };

  // Confirmar eliminación
  const handleDeleteConfirm = () => {
    console.log('Elemento eliminado');
    setOpenDeleteModalLaboratorio(false);
  };
  
    const handleSearch = (value: string) => {
      console.log('Valor de búsqueda:', value);
    };

    const handleNewClick = () => {
      setIsNewModalLaboratorioOpen(true);
    };

    const handleNewClose = () => {
      setIsNewModalLaboratorioOpen(false);
    };

    const handleNewSave = () => {
      console.log('Formulario guardado');
      setIsNewModalLaboratorioOpen(false);
    }; 

    const handleEditClick = () => {
      setIsEditModalLaboratorioOpen(true);
    };
  
    const handleEditClose = () => {
      setIsEditModalLaboratorioOpen(false);
    };
  
    const handleEditSave = () => {
      console.log('Formulario de edición guardado');
      setIsEditModalLaboratorioOpen(false);
    };

    return(
  <>
    
      <div className="bodyContainerLaboratorio">
        <div className="tableContainerLaboratorio">
          <div className ="headerSearchContainerLaboratorio">
            <div className="headerContainerLaboratorio">
            <PageHeaderLaboratorio title = "Laboratorio" />
            </div>
            <div className ="SpaceLaboratorio">
              <SearchToolBarLaboratorio
                onSearch={handleSearch}
              />
            </div>
            <div className ="actionButtonsLaboratorio">
              <DeleteButtonLaboratorio
                text="ELIMINAR"
                onClick={showDeleteModal}
                icon={<img src={deleteIcon} alt=""/>}
              />
              <NewButtonLaboratorio
                text="NUEVO"
                onClick={handleNewClick}
                icon={<img src={newIcon} alt=""/>}
              />
            </div>
          </div>  
          <DataTableLaboratorio onEditClick={handleEditClick}/> 
        </div>
      </div>

    <Dialog open={openDeleteModalLaboratorio} onClose={handleDeleteClose}>
        <DialogTitle>¿Está seguro de eliminar este Laboratorio?</DialogTitle>
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

        
    <NewLaboratorioModal
        open={isNewModalLaboratorioOpen}
        handleClose={handleNewClose}
        onSave={handleNewSave} 
    />

    <EditLaboratorioModal
        open={isEditModalLaboratorioOpen}
        handleClose={handleEditClose}
        onSave={handleEditSave}
    />
        
  </>
    );
};