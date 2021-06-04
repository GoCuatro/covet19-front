import { Pedido } from 'types/Pedido';
import axios from 'axios';
import { Cookies } from 'quasar';

export default async function apiSendPedido(pedido: Pedido): Promise<number> {
  if (process.env.VUE_APP_BASE_URL) {
    const url: string = process.env.VUE_APP_BASE_URL.concat(`/pedidos/enviar/${pedido.idPedido}`);
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: 'Bearer ' + Cookies.get('token')
        }
      });
      return response.status;
    } catch (e) {
      console.log(e);
    }
    return 400;
  }
  return 400;
}
