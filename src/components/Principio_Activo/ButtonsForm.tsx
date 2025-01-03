import * as React from 'react';
import '../../CSS/ButtonsForm.css';

interface DangerButtonProps {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const DeleteButton: React.FC<DangerButtonProps> = ({text, onClick, icon}) => {

  return (
    <button 
      className={"deleteButton"}
      onClick={onClick}
      type="button"
      aria-label={text}
    >
      {icon && <span className={"iconDelete"}>{icon}</span>}
      <span className={"buttonTextDelete"}>{text}</span>
    </button>
  );
};

interface NewButtonProps {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const NewButton: React.FC<NewButtonProps> = ({ text, onClick, icon }) => {
  return (
    <button 
      className={"newButton"}
      onClick={onClick}
      type="button"
      aria-label={text}
    >
      {icon && <span className={"iconNew"}>{icon}</span>}
      <span className={"buttonTextNew"}>{text}</span>
    </button>
  );
};

interface EditButtonProps {
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const EditButton: React.FC<EditButtonProps> = ({ onClick, icon }) => {
  return (
    <button 
      className={"editButton"}
      onClick={onClick}
      type="button"
    >
      {icon} <span className={"iconEdit"}>{icon}</span>
    </button>
  );
};