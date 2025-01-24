import React from 'react';
import '../../CSS/Via_De_Administracion/HeaderVia.css'; 

interface PageHeaderViaProps {
  title: string;
}

export const PageHeaderVia: React.FC<PageHeaderViaProps> = ({ title }) => {
  return (
    <header className={"pageHeaderVia"}>
      <h1 className={"titleVia"}>{title}</h1>
    </header>
  );
};