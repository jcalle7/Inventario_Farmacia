import * as React from 'react';
import '../../CSS/Lista_de_Precios/ButtonsListaPrecios.css';

interface DeleteButtonListaPreciosProps {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const DeleteButtonListaPrecios: React.FC<DeleteButtonListaPreciosProps> = ({text, onClick, icon}) => {


  return (
    <button 
      className={"deleteButtonListaPrecios"}
      onClick={onClick}
      type="button"
    >
      {icon && <span className={"iconDeleteListaPrecios"}>{icon}</span>}
      <span className={"buttonTextDeleteListaPrecios"}>{text}</span>
    </button>
  );
};

interface NewButtonListaPreciosProps {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const NewButtonListaPrecios: React.FC<NewButtonListaPreciosProps> = ({ text, onClick, icon }) => {
  return (
    <button 
      className={"newButtonListaPrecios"}
      onClick={onClick}
      type="button"
    >
      {icon && <span className={"iconNewListaPrecios"}>{icon}</span>}
      <span className={"buttonTextNewListaPrecios"}>{text}</span>
    </button>
  );
};

interface EditButtonListaPreciosProps {
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const EditButtonListaPrecios: React.FC<EditButtonListaPreciosProps> = ({ onClick, icon }) => {
  return (
    <button 
      className={"editButtonListaPrecios"}
      onClick={onClick}
      type="button"
    >
    {icon} <span className={"iconEditListaPrecios"}></span>
    </button>
  );
};