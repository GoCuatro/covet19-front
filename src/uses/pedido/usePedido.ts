
import { Ref, ref, onMounted } from '@vue/composition-api';
import { Pedido } from '../../types/Pedido';
import { apiPedido } from 'services/apiPedido';
import { CommonUser } from 'types/CommonUser';
import { LocalStorage, SessionStorage } from 'quasar'

export function usePedido() {
    const pedidos: Ref<Pedido[]> = ref([]);

    onMounted(async () => {
        const user: CommonUser = LocalStorage.getItem('user') as CommonUser;
        pedidos.value = await apiPedido.getPedidoByIdUser(user.id);
    });

    return { pedidos };
}