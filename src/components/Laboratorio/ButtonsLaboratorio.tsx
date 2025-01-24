import * as React from 'react';
import '../../CSS/Laboratorio/ButtonsLaboratorio.css';

interface DeleteButtonLaboratorioProps {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const DeleteButtonLaboratorio: React.FC<DeleteButtonLaboratorioProps> = ({text, onClick, icon}) => {


  return (
    <button 
      className={"deleteButtonLaboratorio"}
      onClick={onClick}
      type="button"
      aria-label={text}
    >
      {icon && <span className={"iconDeleteLaboratorio"}>{icon}</span>}
      <span className={"buttonTextDeleteLaboratorio"}>{text}</span>
    </button>
  );
};

interface NewButtonLaboratorioProps {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const NewButtonLaboratorio: React.FC<NewButtonLaboratorioProps> = ({ text, onClick, icon }) => {
  return (
    <button 
      className={"newButtonLaboratorio"}
      onClick={onClick}
      type="button"
      aria-label={text}
    >
      {icon && <span className={"iconNewLaboratorio"}>{icon}</span>}
      <span className={"buttonTextNewLaboratorio"}>{text}</span>
    </button>
  );
};

interface EditButtonLaboratorioProps {
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const EditButtonLaboratorio: React.FC<EditButtonLaboratorioProps> = ({ onClick, icon }) => {
  return (
    <button 
      className={"editButtonLaboratorio"}
      onClick={onClick}
      type="button"
    >
    {icon} <span className={"iconEditLaboratorio"}></span>
    </button>
  );
};