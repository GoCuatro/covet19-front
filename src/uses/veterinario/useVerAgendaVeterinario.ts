import { Veterinario } from '../../types/Veterinario';
import { apiVeterinario } from '../../services/apiVeterinario';
import {Ref, ref, onBeforeMount } from '@vue/composition-api';
import { ElementoAgenda } from '../../types/ElementoAgenda';
import { LocalStorage } from 'quasar';
import { CommonUser } from '../../types/CommonUser';

export function useVerAgendaVeterinario() {
  const agenda: Ref<ElementoAgenda[]> = ref([]);

  onBeforeMount(async () => {
    const user = LocalStorage.getItem('user') as CommonUser;
    agenda.value = await apiVeterinario.getAgendaVeterinario(user.id);
  });

  async function verAgenda(id: string) {
    agenda.value = await apiVeterinario.getAgendaVeterinario(id);
  }

  return { agenda, verAgenda };
}
