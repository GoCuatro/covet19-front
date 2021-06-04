import { Veterinario } from '../../types/Veterinario';
import { apiVeterinario } from '../../services/apiVeterinario';
import {Ref, ref, onBeforeMount } from '@vue/composition-api';

export function useVeterinarios() {
  const veterinarios: Ref<Veterinario[]> = ref([]);

  onBeforeMount(async () => {
    veterinarios.value = await apiVeterinario.getVeterinarios();
  });

  return { veterinarios };
}
