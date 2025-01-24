import * as React from 'react';
import '../../CSS/Grupo_Terapeutico/ButtonsGrupo.css';

interface DeleteButtonGrupoProps {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const DeleteButtonGrupo: React.FC<DeleteButtonGrupoProps> = ({text, onClick, icon}) => {


  return (
    <button 
      className={"deleteButtonGrupo"}
      onClick={onClick}
      type="button"
      aria-label={text}
    >
      {icon && <span className={"iconDeleteGrupo"}>{icon}</span>}
      <span className={"buttonTextDeleteGrupo"}>{text}</span>
    </button>
  );
};

interface NewButtonGrupoProps {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const NewButtonGrupo: React.FC<NewButtonGrupoProps> = ({ text, onClick, icon }) => {
  return (
    <button 
      className={"newButtonGrupo"}
      onClick={onClick}
      type="button"
      aria-label={text}
    >
      {icon && <span className={"iconNewGrupo"}>{icon}</span>}
      <span className={"buttonTextNewGrupo"}>{text}</span>
    </button>
  );
};

interface EditButtonGrupoProps {
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const EditButtonGrupo: React.FC<EditButtonGrupoProps> = ({ onClick, icon }) => {
  return (
    <button 
      className={"editButtonGrupo"}
      onClick={onClick}
      type="button"
    >
    {icon} <span className={"iconEditGrupo"}></span>
    </button>
  );
};