import { ref, Ref } from '@vue/composition-api';
import { UUID } from 'uuid-generator-ts';
import { RegisterUser } from 'types/RegisterUser';
import apiRegister from 'services/apiRegister';

export default function useRegister() {

  const newUser: Ref<RegisterUser> = ref({
    id: new UUID().toString(),
    cedula: 0,
    nombre: '',
    correo: '',
    password: '',
    telefono: 0,
    direccion: '',
    fecha: '',
    carrito: '',
    mascotas: ''
  });

  const register = async () => {
    const response = await apiRegister(newUser.value);
    return response == 201;
  };

  return { newUser, register };
}
