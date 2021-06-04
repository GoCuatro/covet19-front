import { Cita } from '../types/Cita';
import axios from 'axios';
import { citas_agendar, cita, cita_ver, cita_update, cita_delete, cita_diagnostico } from '../config/urls';
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
      throw new Error('Error al cargar las citas: '.concat(e));
    }
  },

  async getCitasAgendadas(idUser: string): Promise<Cita[]> {
    try {
      const response = await axios.get(process.env.VUE_APP_BASE_URL.concat('/users/').concat(idUser).concat('/verCitasAgendadas'),
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
      throw new Error('Error al cargar las citas: '.concat(e));
    }
  },

  async createCita(cita: Cita) {
    try {
      console.log(cita);
      await axios.post(process.env.VUE_APP_BASE_URL.concat(citas_agendar), JSON.parse(JSON.stringify(cita)),
        {headers: {Authorization: 'Bearer ' + Cookies.get('token')}});
    } catch (e) {
      throw new Error('Error al crear la Cita: '.concat(e));
    }
  },

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
      const response = await axios.post(process.env.VUE_APP_BASE_URL.concat(cita).concat(citaW.id).concat(cita_update), JSON.parse(JSON.stringify(citaW)),
        {headers: {Authorization: 'Bearer ' + Cookies.get('token')}});
    } catch (e) {
      throw new Error('Error al actualizar la cita: '.concat(e));
    }
  },

};
