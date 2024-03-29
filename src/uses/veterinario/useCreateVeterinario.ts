import { Veterinario } from '../../types/Veterinario';
import { apiVeterinario } from '../../services/apiVeterinario';
import { Ref, ref } from '@vue/composition-api';
import { UUID } from 'uuid-generator-ts';

export function useCreateVeterinario() {

  const vet: Ref<Veterinario> = ref({
    id: new UUID().toString(),
    cedula: 0,
    correo: '',
    direccion: '',
    fechaNacimiento: '',
    nombre: '',
    password: '',
    telefono: 0,
    tarjetaProfesional: '',
    agenda: []
   });

  async function create(): Promise<void>{
    await apiVeterinario.createVeterinario(vet.value);
  }

  return { vet, create };
}
