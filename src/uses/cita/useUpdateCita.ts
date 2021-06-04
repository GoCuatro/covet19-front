import { apiCitas } from '../../services/apiCitas';
import { Ref, ref } from '@vue/composition-api';
import { Cita } from '../../types/Cita';

export function useUpdateCita() {

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

  async function updateCita(){
    await apiCitas.updateCita(cita.value);
  }

  return { cita, updateCita };
}
