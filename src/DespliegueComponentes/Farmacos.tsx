import { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, DialogContentText } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning'; 
import deleteIcon from '/public/Eliminar.svg';
import newIcon from '/public/Vector.svg';
import excelIcon from '/public/Excel.svg';
import { DeleteButtonFarmacos, ExcelButtonFarmacos, NewButtonFarmacos } from '../components/FÁRMACOS/ButtonsFarmacos';
import DataTableFarmacos from '../components/FÁRMACOS/BodyFarmacos';
import { PageHeaderFarmacos } from '../components/FÁRMACOS/HeaderFarmacos';
import SearchToolBarFarmacos from '../components/FÁRMACOS/SearchToolBarFarmacos';
import NewFarmacoModal from '../components/FÁRMACOS/modales/NewFarmaco';  
import EditFarmacoModal from '../components/FÁRMACOS/modales/EditFarmaco';

export default function Farmaco_Component () {

  const [isNewModalFarmacoOpen, setIsNewModalFarmacoOpen] = useState(false);
  const [isEditModalFarmacoOpen, setIsEditModalFarmacoOpen] = useState(false);
  const [openDeleteModalFarmaco, setOpenDeleteModalFarmaco] = useState(false);
  

  const showDeleteModal = () => {
    setOpenDeleteModalFarmaco(true);
  };

  // Cerrar modal de confirmación de eliminación
  const handleDeleteClose = () => {
    setOpenDeleteModalFarmaco(false);
  };

  // Confirmar eliminación
  const handleDeleteConfirm = () => {
    console.log('Elemento eliminado');
    setOpenDeleteModalFarmaco(false);
  };
  
    const handleSearch = (value: string) => {
      console.log('Valor de búsqueda:', value);
    };

    const handleNewClick = () => {
      setIsNewModalFarmacoOpen(true);
    };

    const handleNewClose = () => {
      setIsNewModalFarmacoOpen(false);
    };

    const handleNewSave = () => {
      console.log('Formulario guardado');
      setIsNewModalFarmacoOpen(false);
    }; 

    const handleEditClick = () => {
      setIsEditModalFarmacoOpen(true);
    };
  
    const handleEditClose = () => {
      setIsEditModalFarmacoOpen(false);
    };
  
    const handleEditSave = () => {
      console.log('Formulario de edición guardado');
      setIsEditModalFarmacoOpen(false);
    };

    return(
  <>
      <div className="bodyContainerFarmacos">
        <div className="tableContainerFarmacos">
          <div className ="headerSearchContainerFarmacos">
            <div className="headerContainerFarmacos">
            <PageHeaderFarmacos title = "Fármacos" />
            </div>
            <div className ="SpaceFarmacos">
              <SearchToolBarFarmacos
                onSearch={handleSearch}
              />
            </div>
            <div className ="actionButtonsFarmacos">
              <DeleteButtonFarmacos
                text="ELIMINAR"
                onClick={showDeleteModal}
                icon={<img src={deleteIcon} alt=""/>}
              />
              <NewButtonFarmacos
                text="NUEVO"
                onClick={handleNewClick}
                icon={< img src={newIcon} alt=""/>}
              />

            <ExcelButtonFarmacos
                text="EXCEL"
                icon={< img src={excelIcon} alt=""/>}
              />

            </div>
          </div>  
          <DataTableFarmacos onEditClick={handleEditClick}/> 
        </div>
      </div>

    <Dialog open={openDeleteModalFarmaco} onClose={handleDeleteClose}>
        <DialogTitle>¿Está seguro de eliminar este Fármaco?</DialogTitle>
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

        
    <NewFarmacoModal
        open={isNewModalFarmacoOpen}
        handleClose={handleNewClose}
        onSave={handleNewSave} 
    />

    <EditFarmacoModal
        open={isEditModalFarmacoOpen}
        handleClose={handleEditClose}
        onSave={handleEditSave}
    />
        
  </>
    );
};    