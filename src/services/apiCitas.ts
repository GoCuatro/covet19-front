import axios from 'axios';
import { Cookies } from 'quasar';
import { Cita } from '../types/Cita';
import { cita_ver, cita, cita_diagnostico, cita_delete, cita_update } from '../config/urls';

export const apiCitas = {

  async verCita(id: string): Promise<Cita> {
    try {
      const response = await axios.get(process.env.VUE_APP_BASE_URL.concat(cita).concat(cita_ver).concat(id),
        {headers: {Authorization: 'Bearer ' + Cookies.get('token')}});
      console.log(response.data);
      return new Promise((resolve) => {
        resolve(response.data);
      });
    }
    catch (e) {
      throw new Error('Error al cargar la Cita: '.concat(e));
    }
  },

  async agregarDiagnostico(citaW: Cita) {
    try {
      await axios.post(process.env.VUE_APP_BASE_URL.concat(cita).concat(cita_diagnostico), JSON.parse(JSON.stringify(citaW)),
        {headers: {Authorization: 'Bearer ' + Cookies.get('token')}});
    } catch (e) {
      throw new Error('Error al agregar el diagnostico: '.concat(e));
    }
  },

  async deleteCita(id: string) {
    try {
      const response = await axios.get(process.env.VUE_APP_BASE_URL.concat(cita).concat(cita_delete).concat(id),
        {headers: {Authorization: 'Bearer ' + Cookies.get('token')}});
    } catch (e) {
      throw new Error('Error al eliminar la cita: '.concat(e));
    }
  },

  async updateCita(citaW: Cita) {
    try {
      const response = await axios.post(process.env.VUE_APP_BASE_URL.concat(cita).concat(cita_update), JSON.parse(JSON.stringify(citaW)),
        {headers: {Authorization: 'Bearer ' + Cookies.get('token')}});
    } catch (e) {
      throw new Error('Error al actualizar la cita: '.concat(e));
    }
  },

};
