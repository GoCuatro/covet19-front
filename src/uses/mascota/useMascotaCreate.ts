import { ref, Ref } from '@vue/composition-api';
import { Mascota } from 'types/Mascota';
import { UUID } from 'uuid-generator-ts';
import apiMascotaCreate  from 'services/apiMascotaCreate';
import { LocalStorage, SessionStorage } from 'quasar'
import { CommonUser } from 'types/CommonUser';

export function useMascotaCreate() {
  const newMascota: Ref<Mascota> = ref({
    id: new UUID().toString(),
    nombre: '',
    tipo: '',
    raza: '',
    edad: 0, 
    peso: 0,
    idUsuario:''
  });

  function resetMascota() {
    newMascota.value.id = new UUID().toString();
    newMascota.value.nombre = '';
    newMascota.value.edad = 0;
    newMascota.value.tipo = '';
    newMascota.value.raza = '';
  }

 async function create():Promise<void>{
    console.log(newMascota.value);
    if(newMascota.value.nombre.length>0 && newMascota.value.tipo.length>0 && newMascota.value.raza.length>0)
    {
      const user: CommonUser = LocalStorage.getItem('user') as CommonUser;
      newMascota.value.idUsuario= user.id;
      const response = await apiMascotaCreate(newMascota.value);
      if (response == 201) {
        resetMascota();
      }
    }
    
  };
  return { newMascota, create };
}
