import React from 'react';
import '../../CSS/Bodega/HeaderBodega.css'; 

interface PageHeaderBodegaProps {
  title: string;
}

export const PageHeaderBodega: React.FC<PageHeaderBodegaProps> = ({ title }) => {
  return (
    <header className={"pageHeaderBodega"}>
      <h1 className={"titleBodega"}>{title}</h1>
    </header>
  );
};