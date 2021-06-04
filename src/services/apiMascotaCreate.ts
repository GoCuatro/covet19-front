import { Mascota } from 'types/Mascota';
import axios from 'axios';
import { Cookies } from 'quasar';
import { mascotas_create } from 'src/config/urls';

export default async function mascotaCreate(mascota: Mascota) {
    try {
      const response = await axios.post(process.env.VUE_APP_BASE_URL.concat(mascotas_create), JSON.parse(JSON.stringify(mascota)),
        {headers:  {Authorization: 'Bearer ' + Cookies.get('token')}});
        return response.status;
        console.log(response.data);
    } catch (e) {
      throw new Error('Error al crear la mascota: '.concat(e));
    }
}
