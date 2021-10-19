import axios from 'axios';
export const PartidoService = id => {
  const baseUrl = `http://localhost:8080/partidos/${id}`;
  return axios.get(baseUrl).then(res => res.data);
};
