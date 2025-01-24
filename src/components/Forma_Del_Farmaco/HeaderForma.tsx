import React from 'react';
import '../../CSS/Forma_Del_Farmaco/HeaderForma.css'; 

interface PageHeaderFormaProps {
  title: string;
}

export const PageHeaderForma: React.FC<PageHeaderFormaProps> = ({ title }) => {
  return (
    <header className={"pageHeaderForma"}>
      <h1 className={"titleForma"}>{title}</h1>
    </header>
  );
};