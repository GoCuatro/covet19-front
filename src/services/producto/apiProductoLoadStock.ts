import { Producto } from 'types/Producto';
import axios from 'axios';

export default async function apiProductoLoadStock(producto: Producto, quantity: number): Promise<number> {
  if (process.env.VUE_APP_BASE_URL) {
    const url: string = process.env.VUE_APP_BASE_URL.concat(`/producto/${producto.id}`);
    try {
      console.log(quantity);
      const response = await axios.put(url, {
        stock: quantity
      });
      return response.status;
    } catch (e) {
      console.log(e);
    }
    return 500;
  }
  return 500;
}
