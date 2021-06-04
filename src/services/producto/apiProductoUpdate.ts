import { Producto } from 'types/Producto';
import axios from 'axios';
import { Cookies } from 'quasar';

export default async function apiProductoUpdate(producto: Producto) {
  if (process.env.VUE_APP_BASE_URL) {
    const url: string = process.env.VUE_APP_BASE_URL.concat('/producto');
    try {
      const response = await axios.patch(url, JSON.parse(JSON.stringify(producto)), {
        headers: {
          Authorization: 'Bearer ' + Cookies.get('token')
        }
      });
      return response.status;
    } catch (e) {
      console.log(e);
    }
  }
}
