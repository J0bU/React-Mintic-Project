import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import { CentralizedService } from '../../service/CentralizedService';

export const MatchUpdateScreen = () => {
  const [state, setState] = useState({
    usuarios: {},
    equipos: {}
  });

  CentralizedService().then(data =>
    setState({ usuarios: data.usuarios, equipos: data.equipos })
  );
  return (
    <>
      <div className="grid">
        <div className="header-table"></div>
        <div className="column-table">
          <div className="card">
            <h1> LISTADO DE USUARIOS </h1>
            <DataTable value={state.usuarios} stripedRows>
              <Column field="id" header="ID"></Column>
              <Column field="nombre" header="Nombre"></Column>
            </DataTable>
          </div>
          <div className="card">
            <h1> LISTADO DE EQUIPOS </h1>
            <DataTable value={state.equipos} stripedRows>
              <Column field="id" header="ID"></Column>
              <Column field="name" header="Nombre"></Column>
            </DataTable>
          </div>
        </div>
      </div>
    </>
  );
};
