import {Ref, ref } from '@vue/composition-api';
import { Cita } from '../../types/Cita';
import { apiCita } from '../../services/apiCita';

export function useAgregarDiagnostico() {
  const citaD: Ref<Cita> = ref(
    {
      id: '',
      diagnostico: '',
      fecha: '',
      idMascota: '',
      idUsuario: '',
      idVeterinario: ''
    }
  );

  async function agregarDiagnostico(){
    await apiCita.agregarDiagnostico(citaD.value);
  }

  return { citaD, agregarDiagnostico };
}
