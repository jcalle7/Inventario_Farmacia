import React from 'react';
import '../../CSS/Farmacos/HeaderFarmacos.css'; 

interface PageHeaderFarmacosProps {
  title: string;
}

export const PageHeaderFarmacos: React.FC<PageHeaderFarmacosProps> = ({ title }) => {
  return (
    <header className={"pageHeaderFarmacos"}>
      <h1 className={"titleFarmacos"}>{title}</h1>
    </header>
  );
};