import { Producto } from 'types/Producto';
import axios from 'axios';
import { Cookies } from 'quasar';

export default async function apiProductoFind(idProducto: string): Promise<Producto> {
  try {
    const response = await axios.get(process.env.VUE_APP_BASE_URL.concat('/producto/').concat(idProducto),
    {
      headers: {
        Authorization: 'Bearer ' + Cookies.get('token')
      }
    });
    console.log(response.data);
    return new Promise((resolve) => {
      resolve(response.data);
    });
  }
  catch (e) {
    throw new Error('Error al cargar Producto: '.concat(e));
  }
}

