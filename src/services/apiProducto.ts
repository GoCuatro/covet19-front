import { Producto } from './../types/Producto';
import axios from 'axios';
import { productos_all } from 'src/config/urls';
import { Cookies } from 'quasar';

export const apiProducto = {

  async getProductos(): Promise<Producto[]> {
    try {
      const response = await axios.get(process.env.VUE_APP_BASE_URL.concat(productos_all),
        {headers: {'X-Requested-With': 'XMLHttpRequest', 'Authorization': Cookies.get('token')}});
      console.log(response.data);
      return new Promise((resolve) => {
        resolve(response.data);
      });
    }
    catch (e) {
      throw new Error('Error al cargar los productos: '.concat(e));
    }
  },

  /*async createProducto(vet: Veterinario) {
    try {
      await axios.post(process.env.VUE_APP_BASE_URL.concat(veterinarios_create), JSON.parse(JSON.stringify(vet)),
        {headers: {'X-Requested-With': 'XMLHttpRequest', 'Authorization': Cookies.get('token')}});
    } catch (e) {
      throw new Error('Error al crear el Veterinario: '.concat(e));
    }
  },

  async findProducto(id: string): Promise<Producto> {
    try {
      const response = await axios.get(process.env.VUE_APP_BASE_URL.concat(veterinarios_all).concat('/').concat(id),
        {headers: {'X-Requested-With': 'XMLHttpRequest', 'Authorization': Cookies.get('token')}});
      return new Promise((resolve) => {
        resolve(response.data);
      });
    } catch (e) {
      throw new Error('Error al buscar el veterinario: '.concat(e));
    }
  },

  async updateProducto(vet: Producto) {
    try {
      await axios.post(process.env.VUE_APP_BASE_URL.concat(veterinarios_update), JSON.parse(JSON.stringify(vet)),
        {headers: {'X-Requested-With': 'XMLHttpRequest', 'Authorization': Cookies.get('token')}});
    } catch (e) {
      throw new Error('Error al actualizar el veterinario: '.concat(e));
    }
  },*/

};
