import axios from 'axios';

export const EquipoService = () => {
  const baseUrl = 'http://localhost:8080/equipos';
  return axios.get(baseUrl).then(res => res.data);
};
