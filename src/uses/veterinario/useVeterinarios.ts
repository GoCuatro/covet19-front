import { Veterinario } from '../../types/Veterinario';
import { apiVeterinario } from '../../services/apiVeterinario';
import { defineComponent, Ref, ref, onMounted } from '@vue/composition-api';

export function useVeterinarios() {
  const veterinarios: Ref<Veterinario[]> = ref([]);

  onMounted(async () => {
    veterinarios.value = await apiVeterinario.getVeterinarios();
  });

  return { veterinarios };
}
