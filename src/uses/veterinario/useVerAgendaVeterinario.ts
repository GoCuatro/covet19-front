import { Veterinario } from '../../types/Veterinario';
import { apiVeterinario } from '../../services/apiVeterinario';
import {Ref, ref, onBeforeMount } from '@vue/composition-api';
import { ElementoAgenda } from '../../types/ElementoAgenda';

export function useVerAgendaVeterinario() {
  const agenda: Ref<ElementoAgenda[]> = ref([]);

  onBeforeMount(async () => {
    agenda.value = await apiVeterinario.getAgendaVeterinario("e755f4fd-f3d4-405d-80fe-888da35f9d82");
  });

  async function verAgenda(id: string) {
    agenda.value = await apiVeterinario.getAgendaVeterinario(id);
  }

  return { agenda, verAgenda };
}
