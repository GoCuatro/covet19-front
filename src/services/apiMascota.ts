import { Mascota } from '../types/Mascota';
import axios from 'axios';
import { mascotas_all } from 'src/config/urls';
import { mascotas_by_id_user } from 'src/config/urls';
import { Cookies } from 'quasar';

export const apiMascota = {

  async getMascotasByIdUser(id: string): Promise<Mascota[]> {
    try {
      const response = await axios.get(process.env.VUE_APP_BASE_URL.concat(mascotas_by_id_user).concat(id),
        {  headers: {
          Authorization: 'Bearer ' + Cookies.get('token')
        } });
      console.log(response.data);
      return new Promise((resolve) => {
        resolve(response.data);
      });
    }
    catch (e) {
      throw new Error('Error al cargar las mascotas: '.concat(e));
    }
  },
  async getMascotas(): Promise<Mascota[]> {
    try {
      const response = await axios.get(process.env.VUE_APP_BASE_URL.concat(mascotas_all),
        { headers: { 'X-Requested-With': 'XMLHttpRequest', 'Authorization': Cookies.get('token') } });
      console.log(response.data);
      return new Promise((resolve) => {
        resolve(response.data);
      });
    }
    catch (e) {
      throw new Error('Error al cargar las mascotas: '.concat(e));
    }
  },
};
