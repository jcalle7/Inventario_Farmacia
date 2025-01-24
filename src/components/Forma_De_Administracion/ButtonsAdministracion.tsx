import * as React from 'react';
import '../../CSS/Forma_De_Administracion/ButtonsAdministracion.css';

interface DeleteButtonAdministracionProps {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const DeleteButtonAdministracion: React.FC<DeleteButtonAdministracionProps> = ({text, onClick, icon}) => {


  return (
    <button 
      className={"deleteButtonAdministracion"}
      onClick={onClick}
      type="button"
    >
      {icon && <span className={"iconDeleteAdministracion"}>{icon}</span>}
      <span className={"buttonTextDeleteAdministracion"}>{text}</span>
    </button>
  );
};

interface NewButtonAdministracionProps {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const NewButtonAdministracion: React.FC<NewButtonAdministracionProps> = ({ text, onClick, icon }) => {
  return (
    <button 
      className={"newButtonAdministracion"}
      onClick={onClick}
      type="button"
    >
      {icon && <span className={"iconNewAdministracion"}>{icon}</span>}
      <span className={"buttonTextNewAdministracion"}>{text}</span>
    </button>
  );
};

interface EditButtonAdministracionProps {
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const EditButtonAdministracion: React.FC<EditButtonAdministracionProps> = ({ onClick, icon }) => {
  return (
    <button 
      className={"editButtonAdministracion"}
      onClick={onClick}
      type="button"
    >
    {icon} <span className={"iconEditAdministracion"}></span>
    </button>
  );
};