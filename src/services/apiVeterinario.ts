import { Veterinario } from '../types/Veterinario';
import axios from 'axios';
import { veterinarios_all } from 'src/config/urls';
import { veterinarios_create, veterinarios_update } from '../config/urls';
import { Cookies } from 'quasar';

export const apiVeterinario = {

  async getVeterinarios(): Promise<Veterinario[]> {
    try {
      const response = await axios.get(process.env.VUE_APP_BASE_URL.concat(veterinarios_all),
        {headers: {'X-Requested-With': 'XMLHttpRequest', 'Authorization': Cookies.get('token')}});
      console.log(response.data);
      return new Promise((resolve) => {
        resolve(response.data);
      });
    }
    catch (e) {
      throw new Error('Error al cargar los veterinarios: '.concat(e));
    }
  },

  async createVeterinario(vet: Veterinario) {
    try {
      await axios.post(process.env.VUE_APP_BASE_URL.concat(veterinarios_create), JSON.parse(JSON.stringify(vet)),
        {headers: {'X-Requested-With': 'XMLHttpRequest', 'Authorization': Cookies.get('token')}});
    } catch (e) {
      throw new Error('Error al crear el Veterinario: '.concat(e));
    }
  },

  async findVeterinario(id: string): Promise<Veterinario> {
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

  async updateVeterinario(vet: Veterinario) {
    try {
      await axios.post(process.env.VUE_APP_BASE_URL.concat(veterinarios_update), JSON.parse(JSON.stringify(vet)),
        {headers: {'X-Requested-With': 'XMLHttpRequest', 'Authorization': Cookies.get('token')}});
    } catch (e) {
      throw new Error('Error al actualizar el veterinario: '.concat(e));
    }
  },

};
