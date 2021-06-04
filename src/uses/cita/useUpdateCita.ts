import { apiCita } from '../../services/apiCita';
import { Ref, ref, onMounted } from '@vue/composition-api';
import { Cita } from '../../types/Cita';

export function useUpdateCita(id: string) {

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

  onMounted(async ()=> {
    cita.value = await apiCita.verCita(id);
  });

  async function updateCita(){
    await apiCita.updateCita(cita.value);
  }

  return { cita, updateCita };
}
