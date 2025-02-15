import * as React from 'react';
import '../../CSS/Bodega/ButtonsBodega.css';

interface DeleteButtonBodegaProps {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const DeleteButtonBodega: React.FC<DeleteButtonBodegaProps> = ({text, onClick, icon}) => {


  return (
    <button 
      className={"deleteButtonBodega"}
      onClick={onClick}
      type="button"
    >
      {icon && <span className={"iconDeleteBodega"}>{icon}</span>}
      <span className={"buttonTextDeleteBodega"}>{text}</span>
    </button>
  );
};

interface NewButtonBodegaProps {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const NewButtonBodega: React.FC<NewButtonBodegaProps> = ({ text, onClick, icon }) => {
  return (
    <button 
      className={"newButtonBodega"}
      onClick={onClick}
      type="button"
    >
      {icon && <span className={"iconNewBodega"}>{icon}</span>}
      <span className={"buttonTextNewBodega"}>{text}</span>
    </button>
  );
};

interface EditButtonBodegaProps {
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const EditButtonBodega: React.FC<EditButtonBodegaProps> = ({ onClick, icon }) => {
  return (
    <button 
      className={"editButtonBodega"}
      onClick={onClick}
      type="button"
    >
    {icon} <span className={"iconEditBodega"}></span>
    </button>
  );
};