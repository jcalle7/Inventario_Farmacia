import React from 'react';
import '../../CSS/Tipo_de_Movimiento/HeaderTipoMovimiento.css'; 

interface PageHeaderTipoMovimientoProps {
  title: string;
}

export const PageHeaderTipoMovimiento: React.FC<PageHeaderTipoMovimientoProps> = ({ title }) => {
  return (
    <header className={"pageHeaderTipoMovimiento"}>
      <h1 className={"titleTipoMovimiento"}>{title}</h1>
    </header>
  );
};