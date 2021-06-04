import { Ref, ref, onMounted } from '@vue/composition-api';
import { Mascota } from './../../types/Mascota';
import { apiMascota } from 'services/apiMascota';

export function useMascotas() {
    const mascotas: Ref<Mascota[]> = ref([]);
  
    onMounted(async () => {
        mascotas.value = await apiMascota.getMascotasByIdUser();
    });
  
    return { mascotas };
  }