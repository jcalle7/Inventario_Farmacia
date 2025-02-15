import React from 'react';
import '../../CSS/Lista_de_Precios/HeaderListaPrecios.css'; 

interface PageHeaderListaPreciosProps {
  title: string;
}

export const PageHeaderListaPrecios: React.FC<PageHeaderListaPreciosProps> = ({ title }) => {
  return (
    <header className={"pageHeaderListaPrecios"}>
      <h1 className={"titleListaPrecios"}>{title}</h1>
    </header>
  );
};