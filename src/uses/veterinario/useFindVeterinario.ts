import { Veterinario } from '../../types/Veterinario';
import { apiVeterinario } from '../../services/apiVeterinario';
import {Ref, ref } from '@vue/composition-api';

export function useFindVeterinario() {
  const veterinario: Ref<Veterinario> = ref(
    {
      id: '',
      cedula: 0,
      correo: '',
      direccion: '',
      fechaNacimiento: '',
      nombre: '',
      password: '',
      telefono: 0,
      tarjetaProfesional: '',
      agenda: []
    }
  );

  async function find(id: string){
    veterinario.value = await apiVeterinario.findVeterinario(id);
  }

  return { veterinario, find };
}
