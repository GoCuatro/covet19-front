import { Pedido } from 'types/Pedido';
import { Ref, ref } from '@vue/composition-api';
import apiPedidoAll from 'services/pedido/apiPedidoAll';
import apiSendPedido from 'services/pedido/apiSendPedido';

export default function usePedidoAll() {

  const activePedidos: Ref<Pedido[]> = ref([]);

  const loadPedidos = async () => {
    activePedidos.value = await apiPedidoAll();
  };

  function getTotal(pedido: Pedido): number {
    if (pedido.compraPedido) {
      let total = 0;
      pedido.compraPedido.forEach(value => total += (value.cantidad * value.precio));
      return total;
    }
    return 0;
  }

  const sendPedido = async (pedido: Pedido) => {
    const response = await apiSendPedido(pedido);
    return response == 200;

  };

  return { activePedidos, loadPedidos, getTotal, sendPedido };
}
