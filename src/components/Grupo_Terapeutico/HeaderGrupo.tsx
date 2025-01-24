import React from 'react';
import '../../CSS/Grupo_Terapeutico/HeaderGrupo.css'; 

interface PageHeaderGrupoProps {
  title: string;
}

export const PageHeaderGrupo: React.FC<PageHeaderGrupoProps> = ({ title }) => {
  return (
    <header className={"pageHeaderGrupo"}>
      <h1 className={"titleGrupo"}>{title}</h1>
    </header>
  );
};