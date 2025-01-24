import * as React from 'react';
import '../../CSS/Categoria/ButtonsCategoria.css';

interface DeleteButtonCategoriaProps {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const DeleteButtonCategoria: React.FC<DeleteButtonCategoriaProps> = ({text, onClick, icon}) => {


  return (
    <button 
      className={"deleteButtonCategoria"}
      onClick={onClick}
      type="button"
    >
      {icon && <span className={"iconDeleteCategoria"}>{icon}</span>}
      <span className={"buttonTextDeleteCategoria"}>{text}</span>
    </button>
  );
};

interface NewButtonCategoriaProps {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const NewButtonCategoria: React.FC<NewButtonCategoriaProps> = ({ text, onClick, icon }) => {
  return (
    <button 
      className={"newButtonCategoria"}
      onClick={onClick}
      type="button"
    >
      {icon && <span className={"iconNewCategoria"}>{icon}</span>}
      <span className={"buttonTextNewCategoria"}>{text}</span>
    </button>
  );
};

interface EditButtonCategoriaProps {
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const EditButtonCategoria: React.FC<EditButtonCategoriaProps> = ({ onClick, icon }) => {
  return (
    <button 
      className={"editButtonCategoria"}
      onClick={onClick}
      type="button"
    >
    {icon} <span className={"iconEditCategoria"}></span>
    </button>
  );
};