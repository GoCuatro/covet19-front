import {Ref, ref } from '@vue/composition-api';
import { Cita } from '../../types/Cita';
import { apiCitas } from '../../services/apiCitas';

export function useVerCita() {
  const cita: Ref<Cita> = ref(
    {
      id: '',
      diagnostico: '',
      fechaCita: '',
      idMascota: '',
      idUsuario: '',
      idVeterinario: ''
    }
  );

  async function find(id: string){
    cita.value = await apiCitas.verCita(id);
  }

  return { cita, find };
}
