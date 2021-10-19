import axios from 'axios';

export const PersonaService = async () => {
  const baseUrl = 'http://localhost:8080/usuarios';
  return axios.get(baseUrl).then(res => res.data);
};
