import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { ListBox } from 'primereact/listbox';
import { Button } from 'primereact/button';
import { CentralizedService } from '../../service/CentralizedService';
import './soccer.css';

export const TeamScreen = () => {
  const [state, setState] = useState({
    nombre: '',
    id: 0,
    personas: [],
    equipos: [],
    local: '',
    visitante: '',
    usuario: '',
    fecha: '',
    glocal: 0,
    gvisitante: 0,
    update: true
  });

  const loadData = () => {
    CentralizedService().then(data => {
      setState({
        personas: data.usuarios,
        equipos: data.equipos
      });
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const usuarios = state.personas.map(persona => ({
    label: persona.nombre,
    value: persona.id
  }));

  const equipos = state.equipos.map(equipo => ({
    label: equipo.name,
    value: equipo.id
  }));

  const handleInputChange = e => {
    console.log(e.target.value, e.target.id);
    setState({
      ...state,
      [e.target.id]: [e.target.value]
    });
  };

  const submitInformation = async e => {
    e.preventDefault();
    const id = state.id ? state.id[0] : 0;
    const nombre = state.nombre ? state.nombre[0] : 'DEFAULT';
    const usuario = state.usuario ? state.usuario[0] : 1;
    const equipoLocal = state.local ? state.local[0] : 1;
    const equipoVisitante = state.visitante ? state.visitante[0] : 1;
    const golesLocal = state.glocal ? state.glocal[0] : 0;
    const golesVisitante = state.gvisitante ? state.gvisitante[0] : 0;
    const fecha = state.fecha ? state.fecha[0] : '2000-01-01';
    console.log(golesLocal, golesVisitante, fecha);
    const infoPartido = { id, nombre, golesLocal, golesVisitante, fecha };
    const idPartido = await axios
      .post(`http://localhost:8080/partidos`, infoPartido)
      .then(res => res.data.id);
    await axios.put(
      `http://localhost:8080/partidos/${idPartido}/usuario/${usuario}`
    );
    await axios
      .put(
        `http://localhost:8080/partidos/${idPartido}/equipol/${equipoLocal}/equipov/${equipoVisitante}`
      )
      .then(res => console.log(res.data));
  };

  var todayDate = new Date().toISOString().slice(0, 10);
  console.log(todayDate);

  return (
    <div className="grid">
      <div className="column">
        <h1> REGISTRO DE PARTIDOS </h1>
        <div className="card p-fluid">
          <i
            className="pi pi-pencil p-mr-2"
            onClick={e => setState({ ...state, update: !state.update })}
          ></i>{' '}
          <h5>Datos del partido</h5>
          {state.update && (
            <div className="field">
              <label htmlFor="id">
                ¿Cuál es el identificador del partido?{' '}
              </label>
              <InputText
                id="id"
                type="text"
                className="p-inputtext"
                placeholder="Example: 1, 2, 3"
                onChange={handleInputChange}
              />
            </div>
          )}
          <div className="field">
            <label htmlFor="nombre">¿Quiénes juegan?</label>
            <InputText
              id="nombre"
              type="text"
              className="p-inputtext"
              placeholder="Example: Atlético Bucaramanga vs Atlético Nacional"
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label htmlFor="usuario">¿Quién crea el partido?</label>
            <ListBox
              value={state.usuario}
              options={usuarios}
              onChange={handleInputChange}
              id="usuario"
            />
          </div>
          <div className="field">
            <label htmlFor="local">¿Cuál es el equipo local?</label>
            <ListBox
              value={state.local}
              options={equipos}
              onChange={handleInputChange}
              id="local"
            />
          </div>
          <div className="field">
            <label htmlFor="glocal">¿Cuántos goles hizo el equipo local?</label>
            <InputText
              id="glocal"
              type="number"
              className="p-inputtext"
              placeholder="Example: Atlético Bucaramanga vs Atlético Nacional"
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label htmlFor="visitante">¿Cuál es el equipo visitante?</label>
            <ListBox
              value={state.visitante}
              options={equipos}
              onChange={handleInputChange}
              id="visitante"
            />
          </div>
          <div className="field">
            <label htmlFor="gvisitante">
              ¿Cuántos goles hizo el equipo visitante?
            </label>
            <InputText
              id="gvisitante"
              type="text"
              className="p-inputtext"
              placeholder="Example: Atlético Bucaramanga vs Atlético Nacional"
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label htmlFor="fecha">Fecha del partido</label>
            <InputText
              id="name1"
              type="text"
              className="p-inputtext"
              value={todayDate}
              onChange={handleInputChange}
            />
          </div>
          <Button label="Submit" onClick={submitInformation}></Button>
        </div>
      </div>
    </div>
  );
};
