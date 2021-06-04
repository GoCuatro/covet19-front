import { CommonUser } from 'types/CommonUser';
import { ref, Ref } from '@vue/composition-api';
import { UUID } from 'uuid-generator-ts';
import apiAdminCreate from 'services/admin/apiAdminCreate';

export function useAdminCreate() {
  const newAdmin: Ref<CommonUser> = ref({
    id: new UUID().toString(),
    cedula: 0,
    nombre: '',
    correo: '',
    pass: '',
    telefono: 0,
    direccion: '',
    fechaNacimiento: '',
    rol: 'admin'
  });

  const create = async () => {
    const response = await apiAdminCreate(newAdmin.value);
    if (response) {
      newAdmin.value = {
        id: new UUID().toString(),
        cedula: 0,
        nombre: '',
        correo: '',
        pass: '',
        telefono: 0,
        direccion: '',
        fechaNacimiento: '',
        rol: 'admin'
      };
    }
    return response;
  };
  return { newAdmin, create };
}
