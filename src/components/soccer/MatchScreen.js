import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/nova/theme.css';
import axios from 'axios';

export const MatchScreen = () => {
  const [state, setstate] = useState({
    partidos: {}
  });
  axios.get('http://localhost:8080/partidos').then(res =>
    setstate({
      ...state,
      partidos: res.data
    })
  );

  // {
  return (
    <>
      <div className="grid">
        <div className="header-table"></div>
        <div className="column-table">
          <div className="card">
            <h1> LISTADO DE PARTIDOS </h1>
            <DataTable value={state.partidos} stripedRows>
              <Column field="id" header="ID"></Column>
              <Column field="nombre" header="Nombre"></Column>
              <Column field="fecha" header="Fecha"></Column>
              <Column field="golesLocal" header="Goles local"></Column>
              <Column field="golesVisitante" header="Goles visitante"></Column>
              <Column field="usuario.nombre" header="Usuario"></Column>
              <Column field="local.name" header="Equipo Local"></Column>
              <Column field="visitante.name" header="Equipo Visitante"></Column>
            </DataTable>
          </div>
        </div>
      </div>
    </>
  );
  // }
  // return <div>Match Screen</div>;
};
