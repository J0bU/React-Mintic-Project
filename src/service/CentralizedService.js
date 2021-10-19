import { PersonaService } from './PersonaService';
import { EquipoService } from './EquipoService';

export const CentralizedService = async () => {
  const response = await Promise.all([EquipoService(), PersonaService()]);
  const data = response.map(response => response);

  return {
    usuarios: data[1],
    equipos: data[0]
  };
};
