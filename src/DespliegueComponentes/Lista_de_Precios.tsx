import { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, DialogContentText } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import deleteIcon from '/public/Eliminar.svg';
import newIcon from '/public/Vector.svg';
import { DeleteButtonListaPrecios, NewButtonListaPrecios } from '../components/Lista_de_Precios/ButtonsListaPrecios';
import NewListaPreciosModal from '../components/Lista_de_Precios/modal/NewListaPrecios';
import EditListaPreciosModal from '../components/Lista_de_Precios/modal/EditListaPrecios';
import DataTableListaPrecios from '../components/Lista_de_Precios/BodyListaPrecios';
import SearchToolBarListaPrecios from '../components/Lista_de_Precios/SearchToolBarListaPrecios';
import { PageHeaderListaPrecios } from '../components/Lista_de_Precios/HeaderListaPrecios';

export default function ListaPrecios_Component () {

  const [isNewModalListaPreciosOpen, setIsNewModalListaPreciosOpen] = useState(false);
  const [isEditModalListaPreciosOpen, setIsEditModalListaPreciosOpen] = useState(false);
  const [openDeleteModalListaPrecios, setOpenDeleteModalListaPrecios] = useState(false);
  

  const showDeleteModal = () => {
    setOpenDeleteModalListaPrecios(true);
  };

  // Cerrar modal de confirmación de eliminación
  const handleDeleteClose = () => {
    setOpenDeleteModalListaPrecios(false);
  };

  // Confirmar eliminación
  const handleDeleteConfirm = () => {
    console.log('Elemento eliminado');
    setOpenDeleteModalListaPrecios(false);
  };
  
    const handleSearch = (value: string) => {
      console.log('Valor de búsqueda:', value);
    };

    const handleNewClick = () => {
      setIsNewModalListaPreciosOpen(true);
    };

    const handleNewClose = () => {
      setIsNewModalListaPreciosOpen(false);
    };

    const handleNewSave = () => {
      console.log('Formulario guardado');
      setIsNewModalListaPreciosOpen(false);
    }; 

    const handleEditClick = () => {
      setIsEditModalListaPreciosOpen(true);
    };
  
    const handleEditClose = () => {
      setIsEditModalListaPreciosOpen(false);
    };
  
    const handleEditSave = () => {
      console.log('Formulario de edición guardado');
      setIsEditModalListaPreciosOpen(false);
    };

    return(
  <>
    
      <div className="bodyContainerListaPrecios">
        <div className="tableContainerListaPrecios">
          <div className ="headerSearchContainerListaPrecios">
            <div className="headerContainerListaPrecios">
            <PageHeaderListaPrecios title = "Lista de Precios" />
            </div>
            <div className ="SpaceListaPrecios">
              <SearchToolBarListaPrecios
                onSearch={handleSearch}
              />
            </div>
            <div className ="actionButtonsListaPrecios">
              <DeleteButtonListaPrecios
                text="ELIMINAR"
                onClick={showDeleteModal}
                icon={<img src={deleteIcon} alt=""/>}
              />
              <NewButtonListaPrecios
                text="NUEVO"
                onClick={handleNewClick}
                icon={< img src={newIcon} alt=""/>}
              />

            </div>
          </div>  
          <DataTableListaPrecios onEditClick={handleEditClick}/> 
        </div>
      </div>

    <Dialog open={openDeleteModalListaPrecios} onClose={handleDeleteClose}>
        <DialogTitle>¿Está seguro de eliminar esta Lista de Precios?</DialogTitle>
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

        
    <NewListaPreciosModal
        open={isNewModalListaPreciosOpen}
        handleClose={handleNewClose}
        onSave={handleNewSave} 
    />

    <EditListaPreciosModal
        open={isEditModalListaPreciosOpen}
        handleClose={handleEditClose}
        onSave={handleEditSave}
    />
        
  </>
    );
};    