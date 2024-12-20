import React, { useState } from 'react';
import { Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import  '../../CSS/BodyForm.css';
import { EditButton } from './ButtonsForm';

type TableRowSelection<T extends object = object> = TableProps<T>['rowSelection'];

interface DataType {
  key: React.Key;
  nombre: string;
  observación: string;
  mar: string;
  estado: string;
  grupoTerapéutico: string;
  categoría: string;
  editar:  JSX.Element;
}

const columns: TableColumnsType<DataType> = [
  { title: 'Nombre', dataIndex: 'nombre' },
  { title: 'Observación', dataIndex: 'observación' },
  { title: 'Mar', dataIndex: 'mar' },
  { title : 'Estado', dataIndex: 'estado' },
  { title: 'Grupo Terapéutico', dataIndex: 'grupoTerapéutico' },
  { title: 'Categoría', dataIndex: 'categoría'}, 
  { title: 'Editar', dataIndex: 'editar'},
];

const dataSource = Array.from<DataType>({ length: 60 }).map<DataType>((_, i) => ({
  key: i,
  nombre: 'Ácido Tranexamico',
  observación: 'Uso moderado',
  mar: 'No',
  estado: 'Disponible',
  grupoTerapéutico: 'Afección Hepática',
  categoría: 'Antibióticos',
  editar: (
    <EditButton
    onClick={() => ({key: i, nombre: 'Ácido Tranexamico'})}
    icon={<img src="/Editar.svg" alt="" />}
    />
  ),
}));

interface DataTableProps {
  onEditClick: (record: DataType) => void;
}

export const DataTable: React.FC<DataTableProps> = ({ onEditClick })  => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <Table<DataType> rowSelection={rowSelection} columns={columns} dataSource={dataSource}onRow={(record) => ({
        onClick: () => onEditClick(record),
      })}
    />
  );
};

interface SearchToolbarProps {
  onSearch?: (value: string) => void;
  icon?: React.ReactNode;
}

export const SearchToolbar: React.FC<SearchToolbarProps> = ({ onSearch, icon }) => {
  const [searchValue, setSearchValue] = React.useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    onSearch?.(value);
  };

  return (
    <div className={"searchToolbar"}>
      <div className={"searchContainer"}>
        <form className={"searchInputWrapper"} role="search">
          <label htmlFor="searchInput" className={"['visually-hidden']"}>
    
          </label>
          <div className={"inputContent"}>
            <input
              id="searchInput"
              type="search"
              className={"searchLabel"}
              placeholder="Buscar"
              value={searchValue}
              onChange={handleSearchChange}
              aria-label="Search input"
            />
          </div>
          <button 
            type="submit" 
            className={"searchIcon"}
            aria-label="Submit search"
          >
            {icon}
          </button>
        </form>
      </div>
    </div>
  );
}