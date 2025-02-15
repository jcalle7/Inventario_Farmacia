import { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, DialogContentText } from '@mui/material';
import DataTableForma from '../components/Forma_Del_Farmaco/BodyForma';
import WarningIcon from '@mui/icons-material/Warning'; 
import NewFormaModal  from '../components/Forma_Del_Farmaco/modal/NewForma';
import EditFormaModal from '../components/Forma_Del_Farmaco/modal/EditForma';
import deleteIcon from '/public/Eliminar.svg';
import newIcon from '/public/Vector.svg';
import { DeleteButtonForma, NewButtonForma } from '../components/Forma_Del_Farmaco/ButtonsForma';
import { PageHeaderForma } from '../components/Forma_Del_Farmaco/HeaderForma';
import SearchToolBarForma from '../components/Forma_Del_Farmaco/SearchToolBarForma';

export default function Forma_Component () {

  const [isNewModalFormaOpen, setIsNewModalFormaOpen] = useState(false);
  const [isEditModalFormaOpen, setIsEditModalFormaOpen] = useState(false);
  const [openDeleteModalForma, setOpenDeleteModalForma] = useState(false);
  

  const showDeleteModal = () => {
    setOpenDeleteModalForma(true);
  };

  // Cerrar modal de confirmación de eliminación
  const handleDeleteClose = () => {
    setOpenDeleteModalForma(false);
  };

  // Confirmar eliminación
  const handleDeleteConfirm = () => {
    console.log('Elemento eliminado');
    setOpenDeleteModalForma(false);
  };
  
    const handleSearch = (value: string) => {
      console.log('Valor de búsqueda:', value);
    };

    const handleNewClick = () => {
      setIsNewModalFormaOpen(true);
    };

    const handleNewClose = () => {
      setIsNewModalFormaOpen(false);
    };

    const handleNewSave = () => {
      console.log('Formulario guardado');
      setIsNewModalFormaOpen(false);
    }; 

    const handleEditClick = () => {
      setIsEditModalFormaOpen(true);
    };
  
    const handleEditClose = () => {
      setIsEditModalFormaOpen(false);
    };
  
    const handleEditSave = () => {
      console.log('Formulario de edición guardado');
      setIsEditModalFormaOpen(false);
    };

    return(
  <>
    
      <div className="bodyContainerForma">
        <div className="tableContainerForma">
          <div className ="headerSearchContainerForma">
            <div className="headerContainerForma">
            <PageHeaderForma title = "Forma del Fármaco" />
            </div>
            <div className ="SpaceForma">
              <SearchToolBarForma
                onSearch={handleSearch}
              />
            </div>
            <div className ="actionButtonsForma">
              <DeleteButtonForma
                text="ELIMINAR"
                onClick={showDeleteModal}
                icon={<img src={deleteIcon} alt=""/>}
              />
              <NewButtonForma
                text="NUEVO"
                onClick={handleNewClick}
                icon={<img src={newIcon} alt=""/>}
              />
            </div>
          </div>  
          <DataTableForma onEditClick={handleEditClick}/> 
        </div>
      </div>

    <Dialog open={openDeleteModalForma} onClose={handleDeleteClose}>
        <DialogTitle>¿Está seguro de eliminar esta Forma del Fármaco?</DialogTitle>
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

        
    <NewFormaModal
        open={isNewModalFormaOpen}
        handleClose={handleNewClose}
        onSave={handleNewSave} 
    />

    <EditFormaModal
        open={isEditModalFormaOpen}
        handleClose={handleEditClose}
        onSave={handleEditSave}
    />
        
  </>
    );
};