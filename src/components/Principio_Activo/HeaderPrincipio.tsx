import React from 'react';
import '../../CSS/Principio_Activo/HearderPrincipio.css'; 

interface PageHeaderProps {
  title: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <header className={"pageHeader"}>
      <h1 className={"title"}>{title}</h1>
      {/* <div className={"heading"}>
        
      </div> */}
    </header>
  );
};