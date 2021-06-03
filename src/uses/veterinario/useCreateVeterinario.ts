import { Veterinario } from '../../types/Veterinario';
import { apiVeterinario } from '../../services/apiVeterinario';
import { Ref, ref } from '@vue/composition-api';

export function useCreateVeterinario() {

  const vet: Ref<Veterinario> = ref({
    id: '',
    cedula: 0,
    correo: '',
    direccion: '',
    fechaNacimiento: '',
    nombre: '',
    password: '',
    telefono: 0,
    tarjetaProfesional: ''
   });

  async function create() {
    await apiVeterinario.createVeterinario(vet.value);
  }

  return { vet, create };
}
