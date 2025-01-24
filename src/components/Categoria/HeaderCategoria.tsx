import React from 'react';
import '../../CSS/Categoria/HeaderCategoria.css'; 

interface PageHeaderCategoriaProps {
  title: string;
}

export const PageHeaderCategoria: React.FC<PageHeaderCategoriaProps> = ({ title }) => {
  return (
    <header className={"pageHeaderCategoria"}>
      <h1 className={"titleCategoria"}>{title}</h1>
    </header>
  );
};