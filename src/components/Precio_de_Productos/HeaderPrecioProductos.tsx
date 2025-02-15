import React from 'react';
import '../../CSS/Precio_de_Productos/HeaderPrecioProductos.css'; 

interface PageHeaderPrecioProductosProps {
  title: string;
}

export const PageHeaderPrecioProductos: React.FC<PageHeaderPrecioProductosProps> = ({ title }) => {
  return (
    <header className={"pageHeaderPrecioProductos"}>
      <h1 className={"titlePrecioProductos"}>{title}</h1>
    </header>
  );
};