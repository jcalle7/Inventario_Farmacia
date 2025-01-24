import React from 'react';
import '../../CSS/Forma_De_Administracion/HeaderAdministracion.css'; 

interface PageHeaderAdministracionProps {
  title: string;
}

export const PageHeaderAdministracion: React.FC<PageHeaderAdministracionProps> = ({ title }) => {
  return (
    <header className={"pageHeaderAdministracion"}>
      <h1 className={"titleAdministracion"}>{title}</h1>
    </header>
  );
};