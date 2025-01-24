import React from 'react';
import '../../CSS/Laboratorio/HeaderLaboratorio.css'; 

interface PageHeaderLaboratorioProps {
  title: string;
}

export const PageHeaderLaboratorio: React.FC<PageHeaderLaboratorioProps> = ({ title }) => {
  return (
    <header className={"pageHeaderLaboratorio"}>
      <h1 className={"titleGrupo"}>{title}</h1>
    </header>
  );
};