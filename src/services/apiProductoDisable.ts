import { Producto } from 'types/Producto';
import axios from 'axios';

export default async function apiProductoDisable(producto: Producto) {
  if (process.env.VUE_APP_BASE_URL) {
    const url: string = process.env.VUE_APP_BASE_URL.concat('/producto');
    try {
      const response = await axios.delete(url + `?id=${producto.id}`);
      return response.status;
    } catch (e) {
      console.log(e);
    }
  }
}
