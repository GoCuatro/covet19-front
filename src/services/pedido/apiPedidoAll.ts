import axios from 'axios';
import { Pedido } from 'types/Pedido';
import { Cookies } from 'quasar';

export default async function apiPedidoAll(): Promise<Pedido[]> {
  if (process.env.VUE_APP_BASE_URL) {
    const url: string = process.env.VUE_APP_BASE_URL.concat('/pedidos');
    try {
      const response = await axios.get<Pedido[]>(url, {
        headers: {
          Authorization: 'Bearer ' + Cookies.get('token')
        }
      });
      return response.data;
    } catch (e) {
      console.log(e);
    }
    return [];
  }
  return [];
}
