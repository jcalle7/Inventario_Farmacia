import * as React from 'react';
import '../../CSS/Forma_Del_Farmaco/ButtonsForma.css';

interface DeleteButtonFormaProps {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const DeleteButtonForma: React.FC<DeleteButtonFormaProps> = ({text, onClick, icon}) => {


  return (
    <button 
      className={"deleteButtonForma"}
      onClick={onClick}
      type="button"
    >
      {icon && <span className={"iconDeleteForma"}>{icon}</span>}
      <span className={"buttonTextDeleteForma"}>{text}</span>
    </button>
  );
};

interface NewButtonFormaProps {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const NewButtonForma: React.FC<NewButtonFormaProps> = ({ text, onClick, icon }) => {
  return (
    <button 
      className={"newButtonForma"}
      onClick={onClick}
      type="button"
    >
      {icon && <span className={"iconNewForma"}>{icon}</span>}
      <span className={"buttonTextNewForma"}>{text}</span>
    </button>
  );
};

interface EditButtonFormaProps {
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const EditButtonForma: React.FC<EditButtonFormaProps> = ({ onClick, icon }) => {
  return (
    <button 
      className={"editButtonForma"}
      onClick={onClick}
      type="button"
    >
    {icon} <span className={"iconEditForma"}></span>
    </button>
  );
};