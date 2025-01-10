import { useState } from 'react';
import { SearchToolbar, DataTable } from '../components/Principio_Activo/BodyForm';
import { DeleteButton, NewButton } from '../components/Principio_Activo/ButtonsForm';
import { PageHeader } from '../components/Principio_Activo/HeaderForm';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal } from 'antd';
import  NewPrincipio  from '../components/Principio_Activo/Modal/NewPrincipio';
import EditPrincipio from '../components/Principio_Activo/Modal/EditPrincipio';
import searchIcon from '../assets/buscar.svg'; 
import deleteIcon from '/public/Eliminar.svg';
import newIcon from '/public/Nuevo.svg';

export default function Principio_Component () {

  const [modal, contextHolder] = Modal.useModal();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const showConfirm = () => {
    modal.confirm({
      title: '¿Está seguro de eliminar este Principio Activo?',
      icon: <ExclamationCircleFilled/>,
      okText: 'OK', 
      cancelText: 'Cancelar',
    });
  };
  
    const handleSearch = (value: string) => {
      console.log('Valor de búsqueda:', value);
    };

    const handleNewClick = () => {
      setIsModalVisible(true);
    };

    const handleCancel = () => {
      setIsModalVisible(false);
    };

    const handleSave = () => {
      console.log('Formulario guardado');
      setIsModalVisible(false);
    }; 

    const handleEditClick = () => {
      setIsEditModalVisible(true);
    };
  
    const handleEditCancel = () => {
      setIsEditModalVisible(false);
    };
  
    const handleEditSave = () => {
      console.log('Formulario de edición guardado');
      setIsEditModalVisible(false);
    };

    return(
  <>
      <div className="headerContainer">
        <PageHeader title = "Principio Activo" SubTitle = "Formulario"/>
      </div>
    
      <div className="bodyContainer">
        <div className="tableContainer">
          <div className ="headerSearchContainer">
            <div className ="Space">
              <SearchToolbar 
                onSearch={handleSearch}
                icon={<img src={searchIcon} alt=""/>}
              />
            </div>
            <div className ="actionButtons">
              <DeleteButton
                text="Eliminar"
                onClick={showConfirm}
                icon={<img src={deleteIcon} alt=""/>}
              />
              <NewButton 
                text="Nuevo"
                onClick={handleNewClick}
                icon={<img src={newIcon} alt=""/>}
              />
            </div>
          </div>  
          <DataTable onEditClick={handleEditClick}/> 
        </div>
      </div>

      <Modal
        title="Crear Nuevo Principio Activo"
        open={isModalVisible}
        onCancel={handleCancel} 
        onOk={handleSave} 
        okText="Guardar"
        cancelText="Cancelar"
      >
        <NewPrincipio/>
        </Modal>

        <Modal
        title="Editar Principio Activo"
        open={isEditModalVisible}
        onCancel={handleEditCancel}
        onOk={handleEditSave}
        okText="Guardar Cambios"
        cancelText="Cancelar"
      >
        <EditPrincipio />
      </Modal>
        
      {contextHolder}
  </>
    );
};