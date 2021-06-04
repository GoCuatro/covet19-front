import { Cita } from './../types/Cita';
import axios from 'axios';
import { citas_agendar, ver_cita } from '../config/urls';
import { Cookies } from 'quasar';

export const apiCita = {

  async getCitas(): Promise<Cita[]> {
    try {
      //TO-DO get citas
      /*const response;
      return new Promise((resolve) => {
        resolve(response.data);
      });*/
      const citas: Cita []=[];
      return citas;
    }
    catch (e) {
      throw new Error('Error al cargar los veterinarios: '.concat(e));
    }
  },

  async createCita(cita: Cita) {
    try {
      await axios.post(process.env.VUE_APP_BASE_URL.concat(citas_agendar), JSON.parse(JSON.stringify(cita)),
        {headers: {'X-Requested-With': 'XMLHttpRequest', 'Authorization': Cookies.get('token')}});
    } catch (e) {
      throw new Error('Error al crear la Cita: '.concat(e));
    }
  },

  async findCita(id: string): Promise<Cita> {
    try {
      const response = await axios.get(process.env.VUE_APP_BASE_URL.concat(ver_cita).concat('/').concat(id),
        {headers: {'X-Requested-With': 'XMLHttpRequest', 'Authorization': Cookies.get('token')}});
      return new Promise((resolve) => {
        resolve(response.data);
      });
    } catch (e) {
      throw new Error('Error al buscar el veterinario: '.concat(e));
    }
  },

  async updateCita(cita: Cita) {
    try {
      await axios.post(process.env.VUE_APP_BASE_URL.concat(ver_cita).concat('/').concat(cita.id).concat('/update'), JSON.parse(JSON.stringify(cita)),
        {headers: {'X-Requested-With': 'XMLHttpRequest', 'Authorization': Cookies.get('token')}});
    } catch (e) {
      throw new Error('Error al actualizar el veterinario: '.concat(e));
    }
  },

};
