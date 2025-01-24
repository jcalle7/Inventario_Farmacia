import * as React from 'react';
import '../../CSS/Via_De_Administracion/ButtonsVia.css';

interface DeleteButtonViaProps {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const DeleteButtonVia: React.FC<DeleteButtonViaProps> = ({text, onClick, icon}) => {


  return (
    <button 
      className={"deleteButtonVia"}
      onClick={onClick}
      type="button"
      aria-label={text}
    >
      {icon && <span className={"iconDeleteVia"}>{icon}</span>}
      <span className={"buttonTextDeleteVia"}>{text}</span>
    </button>
  );
};

interface NewButtonViaProps {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const NewButtonVia: React.FC<NewButtonViaProps> = ({ text, onClick, icon }) => {
  return (
    <button 
      className={"newButtonVia"}
      onClick={onClick}
      type="button"
      aria-label={text}
    >
      {icon && <span className={"iconNewVia"}>{icon}</span>}
      <span className={"buttonTextNewVia"}>{text}</span>
    </button>
  );
};

interface EditButtonViaProps {
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const EditButtonVia: React.FC<EditButtonViaProps> = ({ onClick, icon }) => {
  return (
    <button 
      className={"editButtonVia"}
      onClick={onClick}
      type="button"
    >
    {icon} <span className={"iconEditVia"}></span>
    </button>
  );
};