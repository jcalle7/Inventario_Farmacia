import { SearchToolbar, DataTable } from '../components/Principio_Activo/BodyForm';
import { DeleteButton, NewButton } from '../components/Principio_Activo/ButtonsForm';
import { PageHeader } from '../components/Principio_Activo/HeaderForm';
import searchIcon from '../assets/buscar.svg'; 
import deleteIcon from '/public/Eliminar.svg';
import newIcon from '/public/Nuevo.svg';


export default function Principio_Component () {
  
    const handleSearch = (value: string) => {
      console.log('Valor de búsqueda:', value);
    };

    let handleDangerClick = () => {
      console.log('Eliminar un Principio Activo');
    };

    let handleNewClick = () => {
      console.log('Crear un Principio Activo');
    };

    const handleEditClick = () => {
      console.log('Editar un Principio Activo');
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
                onClick={handleDangerClick}
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
  </>
    );
};