import { apiCita } from '../../services/apiCita';
import { Ref, ref } from '@vue/composition-api';
import { Cita } from './../../types/Cita';

export function useAgendarCita(){
  const cita: Ref<Cita> = ref({
    id: '',
    diagnostico: '',
    fecha: '',
    idVeterinario: '',
    idMascota: '',
    idUsuario: ''
  });

  async function create():Promise<void>{
    await apiCita.createCita(cita.value);
  }

  return { cita, create};
}
