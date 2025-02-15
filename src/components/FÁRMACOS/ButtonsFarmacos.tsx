import * as React from 'react';
import '../../CSS/Farmacos/ButtonsFarmacos.css';

interface ExcelButtonFarmacosProps {
    text: string;
    onClick?: () => void;
    icon?: React.ReactNode;
  }
  
export const ExcelButtonFarmacos: React.FC<ExcelButtonFarmacosProps> = ({ text, onClick, icon }) => {
    return (
      <button 
        className={"excelButtonFarmacos"}
        onClick={onClick}
        type="button"
      >
        {icon && <span className={"iconExcelFarmacos"}>{icon}</span>}
        <span className={"buttonTextExcelFarmacos"}>{text}</span>
      </button>
    );
};

interface DeleteButtonFarmacosProps {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const DeleteButtonFarmacos: React.FC<DeleteButtonFarmacosProps> = ({text, onClick, icon}) => {


  return (
    <button 
      className={"deleteButtonFarmacos"}
      onClick={onClick}
      type="button"
    >
      {icon && <span className={"iconDeleteFarmacos"}>{icon}</span>}
      <span className={"buttonTextDeleteFarmacos"}>{text}</span>
    </button>
  );
};

interface NewButtonFarmacosProps {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const NewButtonFarmacos: React.FC<NewButtonFarmacosProps> = ({ text, onClick, icon }) => {
  return (
    <button 
      className={"newButtonFarmacos"}
      onClick={onClick}
      type="button"
    >
      {icon && <span className={"iconNewFarmacos"}>{icon}</span>}
      <span className={"buttonTextNewFarmacos"}>{text}</span>
    </button>
  );
};

interface EditButtonFarmacosProps {
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const EditButtonFarmacos: React.FC<EditButtonFarmacosProps> = ({ onClick, icon }) => {
  return (
    <button 
      className={"editButtonFarmacos"}
      onClick={onClick}
      type="button"
    >
    {icon} <span className={"iconEditFarmacos"}></span>
    </button>
  );
};