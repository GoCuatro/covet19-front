import { Pedido } from '../types/Pedido';
import axios from 'axios';
import { pedidos_by_user_id } from 'src/config/urls';
import { Cookies } from 'quasar';

export const apiPedido = {

  async getPedidoByIdUser(id: string): Promise<Pedido[]> {
    try {
      const response = await axios.get(process.env.VUE_APP_BASE_URL.concat(pedidos_by_user_id).concat(id),
      {  headers: {
        Authorization: 'Bearer ' + Cookies.get('token')
      } });
      console.log(response.data);
      return new Promise((resolve) => {
        resolve(response.data);
      });
    }
    catch (e) {
      throw new Error('Error al cargar los pedidos: '.concat(e));
    }
  },
}