import React from 'react';
import '../../CSS/Principio_Activo/HearderForm.css'; 

interface PageHeaderProps {
  title: string;
  SubTitle: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, SubTitle }) => {
  return (
    <header className={"pageHeader"}>
      <div className={"heading"}>
        <h1 className={"title"}>{title}</h1>
        <h2 className={"SubTitle"}>{SubTitle}</h2>
      </div>
    </header>
  );
};