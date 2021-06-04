import { apiCita } from '../../services/apiCita';
import { Ref, ref } from '@vue/composition-api';
import { Cita } from './../../types/Cita';
import { UUID } from 'uuid-generator-ts';

export function useAgendarCita(idUser: string){
  const cita: Ref<Cita> = ref({
    id: new UUID().toString(),
    diagnostico: '',
    fecha: '',
    idVeterinario: '',
    idMascota: '',
    idUsuario: idUser,
  });

  async function create():Promise<void>{
    await apiCita.createCita(cita.value);
  }

  return { cita , create};
}
