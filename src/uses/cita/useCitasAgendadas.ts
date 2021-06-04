import { apiCita } from './../../services/apiCita';
import { Cita } from '../../types/Cita';
import {Ref, ref, onMounted } from '@vue/composition-api';

export function useCitasAgendadas() {
  const citas: Ref<Cita[]> = ref([]);

  onMounted(async () => {
    citas.value = await apiCita.getCitasAgendadas();
  });

  return { citas };
}
