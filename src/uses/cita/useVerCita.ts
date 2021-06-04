import {Ref, ref } from '@vue/composition-api';
import { Cita } from '../../types/Cita';
import { apiCita } from '../../services/apiCita';

export function useVerCita() {
  const cita: Ref<Cita> = ref(
    {
      id: '',
      diagnostico: '',
      fecha: '',
      idMascota: '',
      idUsuario: '',
      idVeterinario: ''
    }
  );

  async function find(id: string){
    cita.value = await apiCita.verCita(id);
  }

  return { cita, find };
}
