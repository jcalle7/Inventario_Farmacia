import * as React from 'react';
import '../../CSS/Tipo_de_Movimiento/ButtonsTipoMovimiento.css';

interface DeleteButtonTipoMovimientoProps {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const DeleteButtonTipoMovimiento: React.FC<DeleteButtonTipoMovimientoProps> = ({text, onClick, icon}) => {


  return (
    <button 
      className={"deleteButtonTipoMovimiento"}
      onClick={onClick}
      type="button"
      aria-label={text}
    >
      {icon && <span className={"iconDeleteTipoMovimiento"}>{icon}</span>}
      <span className={"buttonTextDeleteTipoMovimiento"}>{text}</span>
    </button>
  );
};

interface NewButtonTipoMovimientoProps {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const NewButtonTipoMovimiento: React.FC<NewButtonTipoMovimientoProps> = ({ text, onClick, icon }) => {
  return (
    <button 
      className={"newButtonTipoMovimiento"}
      onClick={onClick}
      type="button"
      aria-label={text}
    >
      {icon && <span className={"iconNewTipoMovimiento"}>{icon}</span>}
      <span className={"buttonTextNewTipoMovimiento"}>{text}</span>
    </button>
  );
};

interface EditButtonTipoMovimientoProps {
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const EditButtonTipoMovimiento: React.FC<EditButtonTipoMovimientoProps> = ({ onClick, icon }) => {
  return (
    <button 
      className={"editButtonTipoMovimiento"}
      onClick={onClick}
      type="button"
    >
    {icon} <span className={"iconEditTipoMovimiento"}></span>
    </button>
  );
};