<template>
  <q-card>
    <q-card-section>
      <q-input v-model='newUser.correo' hint='Email' />
      <q-input v-model='newUser.password' filled :type="isPwd ? 'password' : 'text'"
               hint='Contraseña'>
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class='cursor-pointer'
            @click='isPwd = !isPwd'
          />
        </template>
      </q-input>
      <q-input v-model='newUser.cedula' hint='Cedula' />
      <q-input v-model='newUser.nombre' hint='Nombre' />
      <q-input v-model='newUser.telefono' hint='Telefono' />
      <q-input v-model='newUser.direccion' hint='Direccion' />
      <q-input v-model='newUser.fecha' hint='Fecha de nacimiento' type='date' />
    </q-card-section>

    <q-separator />

    <q-card-actions vertical>
      <q-btn label='Registrarse' @click='registerView' />
    </q-card-actions>
  </q-card>
</template>

<script lang='ts'>
import { defineComponent, Ref, ref } from '@vue/composition-api';
import useRegister from 'uses/useRegister';
import { Notify } from 'quasar';

export default defineComponent({
  name: 'Register',
  components: {},
  setup(_, context) {
    const isPwd: Ref<boolean> = ref(true);
    const { newUser, register } = useRegister();

    const registerView = async () => {
      const response = await register();
      if (response) {
        Notify.create('Registrado correctamente, por favor ingrese con sus credenciales');
        context.emit('registered');
      }
    };

    return { isPwd, newUser, registerView };
  }
});
</script>
