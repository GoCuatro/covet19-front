import {Ref, ref } from '@vue/composition-api';
import { Cita } from '../../types/Cita';
import { apiCitas } from '../../services/apiCitas';

export function useAgregarDiagnostico() {
  const citaD: Ref<Cita> = ref(
    {
      id: '',
      diagnostico: '',
      fechaCita: '',
      idMascota: '',
      idUsuario: '',
      idVeterinario: ''
    }
  );

  async function agregarDiagnostico(){
    await apiCitas.agregarDiagnostico(citaD.value);
  }

  return { citaD, agregarDiagnostico };
}
