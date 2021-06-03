import { Veterinario } from '../types/Veterinario';
import axios from 'axios';
import { veterinarios_all } from 'src/config/urls';
import { veterinarios_create } from '../config/urls';

export const apiVeterinario = {

  async getVeterinarios(): Promise<Veterinario[]> {
    try {
      console.log(process.env.VUE_APP_BASEURL);
      const response = await axios.get(process.env.VUE_APP_BASEURL.concat(veterinarios_all));
      console.log(response.data);
      return new Promise((resolve) => {
        resolve(response.data);
      });
    }
    catch (e) {
      throw new Error("Error al cargar los veterinarios: " + e);
    }
  },

  async createVeterinario(vet: Veterinario) {
    try {
      const response = await axios.post(process.env.VUE_APP_BASEURL.concat(veterinarios_create), JSON.parse(JSON.stringify(vet)));
    } catch (e) {
      throw new Error("Error al crear el Veterinario: " + e);
    }

  },
};
