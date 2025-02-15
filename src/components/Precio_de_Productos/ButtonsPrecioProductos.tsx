import * as React from 'react';
import '../../CSS/Precio_de_Productos/ButtonsPrecioProductos.css';

interface DeleteButtonPrecioProductosProps {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const DeleteButtonPrecioProductos: React.FC<DeleteButtonPrecioProductosProps> = ({text, onClick, icon}) => {


  return (
    <button 
      className={"deleteButtonPrecioProductos"}
      onClick={onClick}
      type="button"
      aria-label={text}
    >
      {icon && <span className={"iconDeletePrecioProductos"}>{icon}</span>}
      <span className={"buttonTextDeletePrecioProductos"}>{text}</span>
    </button>
  );
};

interface NewButtonPrecioProductosProps {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const NewButtonPrecioProductos: React.FC<NewButtonPrecioProductosProps> = ({ text, onClick, icon }) => {
  return (
    <button 
      className={"newButtonPrecioProductos"}
      onClick={onClick}
      type="button"
      aria-label={text}
    >
      {icon && <span className={"iconNewPrecioProductos"}>{icon}</span>}
      <span className={"buttonTextNewPrecioProductos"}>{text}</span>
    </button>
  );
};

interface EditButtonPrecioProductosProps {
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const EditButtonPrecioProductos: React.FC<EditButtonPrecioProductosProps> = ({ onClick, icon }) => {
  return (
    <button 
      className={"editButtonPrecioProductos"}
      onClick={onClick}
      type="button"
    >
    {icon} <span className={"iconEditPrecioProductos"}></span>
    </button>
  );
};