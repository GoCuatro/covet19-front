
import { Ref, ref, onMounted } from '@vue/composition-api';
import { Pedido } from '../../types/Pedido';
import { apiPedido } from 'services/apiPedido';
import apiFinalizarPedido  from 'services/pedido/apiFinalizarPedido';
import { CommonUser } from 'types/CommonUser';
import { LocalStorage, SessionStorage } from 'quasar'

export function usePedido() {
    const pedidos: Ref<Pedido[]> = ref([]);

    const activePedidos: Ref<Pedido[]> = ref([]);

    const loadPedidos = async () => {
        const user: CommonUser = LocalStorage.getItem('user') as CommonUser;
        pedidos.value = await apiPedido.getPedidoByIdUser(user.id);
      };
    
      function getTotal(pedido: Pedido): number {
        if (pedido.compraPedido) {
          let total = 0;
          pedido.compraPedido.forEach(value => total += (value.cantidad * value.precio));
          return total;
        }
        return 0;
      }
    
      const finalizarPedido = async (pedido: Pedido) => {
        const response= await apiFinalizarPedido(pedido);
        return response == 200;
    
      };
    
      return { pedidos, loadPedidos, getTotal, finalizarPedido };
}