import { Veterinario } from '../../types/Veterinario';
import { apiVeterinario } from '../../services/apiVeterinario';
import { Ref, ref, onMounted } from '@vue/composition-api';
import { CommonUser } from '../../types/CommonUser';
import { LocalStorage } from 'quasar';

export function useUpdateVeterinario() {

  const vet: Ref<Veterinario> = ref({
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
   });

    onMounted(async ()=> {
      const user = LocalStorage.getItem('user') as CommonUser;
      vet.value = await apiVeterinario.findVeterinario(user.id);
      vet.value.agenda = [];
    });

  async function update(): Promise<void>{
    await apiVeterinario.updateVeterinario(vet.value);
  }

  return { vet, update };
}
