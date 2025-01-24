import { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, DialogContentText } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning'; 
import NewCategoriaModal  from '../components/Categoria/modal/NewCategoria';
import EditCategoriaModal from '../components/Categoria/modal/EditCategoria';
import deleteIcon from '/public/Eliminar.svg';
import newIcon from '/public/Nuevo.svg';
import SearchToolBarCategoria from '../components/Categoria/SearchToolBarCategoria';
import { DeleteButtonCategoria, NewButtonCategoria } from '../components/Categoria/ButtonsCategoria';
import DataTableCategoria from '../components/Categoria/BodyCategoria';
import { PageHeaderCategoria } from '../components/Categoria/HeaderCategoria';

export default function Categoria_Component () {

  const [isNewModalCategoriaOpen, setIsNewModalCategoriaOpen] = useState(false);
  const [isEditModalCategoriaOpen, setIsEditModalCategoriaOpen] = useState(false);
  const [openDeleteModalCategoria, setOpenDeleteModalCategoria] = useState(false);
  

  const showDeleteModal = () => {
    setOpenDeleteModalCategoria(true);
  };

  // Cerrar modal de confirmación de eliminación
  const handleDeleteClose = () => {
    setOpenDeleteModalCategoria(false);
  };

  // Confirmar eliminación
  const handleDeleteConfirm = () => {
    console.log('Elemento eliminado');
    setOpenDeleteModalCategoria(false);
  };
  
    const handleSearch = (value: string) => {
      console.log('Valor de búsqueda:', value);
    };

    const handleNewClick = () => {
      setIsNewModalCategoriaOpen(true);
    };

    const handleNewClose = () => {
      setIsNewModalCategoriaOpen(false);
    };

    const handleNewSave = () => {
      console.log('Formulario guardado');
      setIsNewModalCategoriaOpen(false);
    }; 

    const handleEditClick = () => {
      setIsEditModalCategoriaOpen(true);
    };
  
    const handleEditClose = () => {
      setIsEditModalCategoriaOpen(false);
    };
  
    const handleEditSave = () => {
      console.log('Formulario de edición guardado');
      setIsEditModalCategoriaOpen(false);
    };

    return(
  <>
    
      <div className="bodyContainerCategoria">
        <div className="tableContainerCategoria">
          <div className ="headerSearchContainerCategoria">
            <div className="headerContainerCategoria">
            <PageHeaderCategoria title = "Categoría" />
            </div>
            <div className ="SpaceCategoria">
              <SearchToolBarCategoria
                onSearch={handleSearch}
              />
            </div>
            <div className ="actionButtonsCategoria">
              <DeleteButtonCategoria
                text="Eliminar"
                onClick={showDeleteModal}
                icon={<img src={deleteIcon} alt=""/>}
              />
              <NewButtonCategoria
                text="Nuevo"
                onClick={handleNewClick}
                icon={<img src={newIcon} alt=""/>}
              />
            </div>
          </div>  
          <DataTableCategoria onEditClick={handleEditClick}/> 
        </div>
      </div>

    <Dialog open={openDeleteModalCategoria} onClose={handleDeleteClose}>
        <DialogTitle>¿Está seguro de eliminar esta Categoría?</DialogTitle>
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

        
    <NewCategoriaModal
        open={isNewModalCategoriaOpen}
        handleClose={handleNewClose}
        onSave={handleNewSave} 
    />

    <EditCategoriaModal
        open={isEditModalCategoriaOpen}
        handleClose={handleEditClose}
        onSave={handleEditSave}
    />
        
  </>
    );
};