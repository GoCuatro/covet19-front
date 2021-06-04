import { Producto } from 'types/Producto';
import axios from 'axios';

export default async function apiProductoCatalogo(): Promise<Producto[]> {
  if (process.env.VUE_APP_BASE_URL) {
    const url: string = process.env.VUE_APP_BASE_URL.concat('/productos/catalogo');
    try {
      const response = await axios.get<Producto[]>(url);
      return response.data;
    } catch (e) {
      console.log(e);
    }
    return [];
  }
  return [];
}
