import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

export const ListScreen = () => {
  const [state, setState] = useState({
    nombre: '',
    usuario: '',
    updateUsuario: false,
    updateEquipo: false,
    idUsuario: 0,
    idEquipo: 0
  });
  const handleInputChange = e => {
    console.log(e.target.value, e.target.id);
    setState({
      ...state,
      [e.target.id]: [e.target.value]
    });
  };

  const equipoInformation = async e => {
    e.preventDefault();
    const idEquipo = state.idEquipo ? state.idEquipo[0] : 0;
    const nombreEquipo = state.name ? state.name[0] : 'DEFAULT';
    const equipoData = { id: idEquipo, name: nombreEquipo };

    await axios.post(`http://localhost:8080/equipos`, equipoData);
  };

  const usuarioInformation = async e => {
    e.preventDefault();
    const idUsuario = state.idUsuario ? state.idUsuario[0] : 0;
    const nombreUsuario = state.usuario ? state.usuario[0] : 'DEFAULT';
    const usuarioData = { id: idUsuario, nombre: nombreUsuario };
    const result = await axios.post(
      `http://localhost:8080/usuarios`,
      usuarioData
    );
    console.log(result);
  };

  return (
    <div className="grid">
      <div className="column">
        <h1> REGISTRO DE EQUIPOS </h1>
        <div className="card p-fluid">
          <i
            className="pi pi-pencil p-mr-2"
            onClick={e =>
              setState({ ...state, updateEquipo: !state.updateEquipo })
            }
          ></i>{' '}
          <h5>Datos del Equipo</h5>
          {state.updateEquipo && (
            <div className="field">
              <label htmlFor="idEquipo">
                ¿Cuál es el identificador del equipo?{' '}
              </label>
              <InputText
                id="idEquipo"
                type="text"
                className="p-inputtext"
                placeholder="Example: 1, 2, 3"
                onChange={handleInputChange}
              />
            </div>
          )}
          <div className="field">
            <label htmlFor="name">¿Nombre del equipo?</label>
            <InputText
              id="name"
              type="text"
              className="p-inputtext"
              placeholder="Example: Atlético Bucaramanga"
              onChange={handleInputChange}
            />
          </div>
          <Button label="Submit" onClick={equipoInformation}></Button>
        </div>
      </div>
      <div className="column-2">
        <h1> REGISTRO DE USUARIOS </h1>
        <div className="card p-fluid">
          <i
            className="pi pi-pencil p-mr-2"
            onClick={e =>
              setState({ ...state, updateUsuario: !state.updateUsuario })
            }
          ></i>{' '}
          <h5>Datos del Usuario</h5>
          {state.updateUsuario && (
            <div className="field">
              <label htmlFor="idUsuario">
                ¿Cuál es el identificador del usuario?{' '}
              </label>
              <InputText
                id="idUsuario"
                type="text"
                className="p-inputtext"
                placeholder="Example: 1, 2, 3"
                onChange={handleInputChange}
              />
            </div>
          )}
          <div className="field">
            <label htmlFor="usuario">¿Nombre del usuario?</label>
            <InputText
              id="usuario"
              type="text"
              className="p-inputtext"
              placeholder="Example: Juan Carlos"
              onChange={handleInputChange}
            />
          </div>
          <Button label="Submit" onClick={usuarioInformation}></Button>
        </div>
      </div>
    </div>
  );
};
