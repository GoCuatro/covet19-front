import { Veterinario } from '../../types/Veterinario';
import { apiVeterinario } from '../../services/apiVeterinario';
import {Ref, ref, onMounted } from '@vue/composition-api';

export function useVeterinarios() {
  const veterinarios: Ref<Veterinario[]> = ref([]);

  onMounted(async () => {
    veterinarios.value = await apiVeterinario.getVeterinarios();
    /* veterinarios.value = [
      {
        id: 'dftgyh',
        cedula: 23456,
        correo: 'fesgrdhghv',
        direccion: 'djhsgfd',
        fechaNacimiento: '03/06/2020',
        nombre: 'hgsd',
        password: 'hdsg',
        telefono: 45543,
        tarjetaProfesional: 'hgdfsa'
      }
    ]; */
  });

  return { veterinarios };
}
