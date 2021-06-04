import { Ref, ref, onMounted } from '@vue/composition-api';
import { Mascota } from './../../types/Mascota';
import { apiMascota } from 'services/apiMascota';
import { Cookies } from 'quasar';
import { CommonUser } from 'types/CommonUser';
import { LocalStorage, SessionStorage } from 'quasar'

export function useMascotas() {
    const mascotas: Ref<Mascota[]> = ref([]);
  
    onMounted(async () => {
        const id: string = Cookies.get("user") as string;
        //const user: CommonUser = SessionStorage.getItem("user") as CommonUser;
        mascotas.value = await apiMascota.getMascotasByIdUser(id);
    });
  
    return { mascotas };
  }

  