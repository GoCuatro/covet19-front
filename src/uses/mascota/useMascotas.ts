import { Ref, ref, onMounted } from '@vue/composition-api';
import { Mascota } from '../../types/Mascota';
import { apiMascota } from 'services/apiMascota';
import { CommonUser } from 'types/CommonUser';
import { LocalStorage, SessionStorage } from 'quasar'

export function useMascotas() {
    const mascotas: Ref<Mascota[]> = ref([]);

    onMounted(async () => {
        const user: CommonUser = LocalStorage.getItem('user') as CommonUser;
        mascotas.value = await apiMascota.getMascotasByIdUser(user.id);
    });

    return { mascotas };
}
