<template>
  <q-card>
    <q-card-section >
      <q-input v-model='user.nombre' label='Nombre' disable/>
      <q-input v-model='user.cedula' label='Cédula' type="number" disable/>
      <q-input v-model='user.direccion' label='Dirección' disable/>
      <q-input v-model='user.fechaNacimiento' hint='Fecha de Nacimiento' type="date" disable/>
      <q-input v-model='user.telefono' label='Teléfono' type="number" disable/>
      <q-input v-model='user.correo' label='Correo' disable/>
    </q-card-section>
  </q-card>
</template>

<script lang='ts'>
import { defineComponent, Ref, ref } from '@vue/composition-api';
import { LocalStorage } from 'quasar';
import { Nombres } from '../../types/Nombres';
import { CommonUser } from '../../types/CommonUser';

export default defineComponent({
  name: 'UserView',
  components: {},
  setup() {
    const user= LocalStorage.getItem('user') as CommonUser;

    let nombres: Ref<Nombres> = ref({
      nombre: '',
      apellido: ''
    });

    return { user, nombres };
  }
});
</script>
