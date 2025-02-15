import { useState } from 'react';
import  DataTableGrupo from '../components/Grupo_Terapeutico/BodyGrupo';
import  SearchToolBarGrupo from '../components/Grupo_Terapeutico/SearchToolBarGrupo';
import { DeleteButtonGrupo, NewButtonGrupo } from '../components/Grupo_Terapeutico/ButtonsGrupo';
import { PageHeaderGrupo } from '../components/Grupo_Terapeutico/HeaderGrupo';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, DialogContentText } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning'; 
import NewGrupoModal  from '../components/Grupo_Terapeutico/modal/NewGrupo';
import EditGrupoModal from '../components/Grupo_Terapeutico/modal/EditGrupo';
import deleteIcon from '/public/Eliminar.svg';
import newIcon from '/public/Vector.svg';

export default function Grupo_Component () {

  const [isNewModalGrupoOpen, setIsNewModalGrupoOpen] = useState(false);
  const [isEditModalGrupoOpen, setIsEditModalGrupoOpen] = useState(false);
  const [openDeleteModalGrupo, setOpenDeleteModalGrupo] = useState(false);
  

  const showDeleteModal = () => {
    setOpenDeleteModalGrupo(true);
  };

  // Cerrar modal de confirmación de eliminación
  const handleDeleteClose = () => {
    setOpenDeleteModalGrupo(false);
  };

  // Confirmar eliminación
  const handleDeleteConfirm = () => {
    console.log('Elemento eliminado');
    setOpenDeleteModalGrupo(false);
  };
  
    const handleSearch = (value: string) => {
      console.log('Valor de búsqueda:', value);
    };

    const handleNewClick = () => {
      setIsNewModalGrupoOpen(true);
    };

    const handleNewClose = () => {
      setIsNewModalGrupoOpen(false);
    };

    const handleNewSave = () => {
      console.log('Formulario guardado');
      setIsNewModalGrupoOpen(false);
    }; 

    const handleEditClick = () => {
      setIsEditModalGrupoOpen(true);
    };
  
    const handleEditClose = () => {
      setIsEditModalGrupoOpen(false);
    };
  
    const handleEditSave = () => {
      console.log('Formulario de edición guardado');
      setIsEditModalGrupoOpen(false);
    };

    return(
  <>
    
      <div className="bodyContainerGrupo">
        <div className="tableContainerGrupo">
          <div className ="headerSearchContainerGrupo">
            <div className="headerContainerGrupo">
            <PageHeaderGrupo title = "Grupo Terapéutico" />
            </div>
            <div className ="SpaceGrupo">
              <SearchToolBarGrupo
                onSearch={handleSearch}
              />
            </div>
            <div className ="actionButtonsGrupo">
              <DeleteButtonGrupo
                text="ELIMINAR"
                onClick={showDeleteModal}
                icon={<img src={deleteIcon} alt=""/>}
              />
              <NewButtonGrupo
                text="NUEVO"
                onClick={handleNewClick}
                icon={<img src={newIcon} alt=""/>}
              />
            </div>
          </div>  
          <DataTableGrupo onEditClick={handleEditClick}/> 
        </div>
      </div>

    <Dialog open={openDeleteModalGrupo} onClose={handleDeleteClose}>
        <DialogTitle>¿Está seguro de eliminar este Grupo Terapéutico?</DialogTitle>
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

        
    <NewGrupoModal
        open={isNewModalGrupoOpen}
        handleClose={handleNewClose}
        onSave={handleNewSave} 
    />

    <EditGrupoModal
        open={isEditModalGrupoOpen}
        handleClose={handleEditClose}
        onSave={handleEditSave}
    />
        
  </>
    );
};