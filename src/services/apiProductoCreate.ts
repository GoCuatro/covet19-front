import { Producto } from 'types/Producto';
import axios from 'axios';

export default async function apiProductoCreate(producto: Producto) {
  if (process.env.VUE_APP_BASE_URL) {
    const url: string = process.env.VUE_APP_BASE_URL.concat('/producto');
    try {
      const response = await axios.post(url, JSON.parse(JSON.stringify(producto)));
      return response.status;
    } catch (e) {
      console.log(e);
    }
  }
}
