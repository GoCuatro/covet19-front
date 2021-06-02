<template>
  <q-card>
    <q-card-section>
      <q-input v-model='newAdmin.email' label='Email' />
      <q-input v-model='newAdmin.pass' filled :type="isPwd ? 'password' : 'text'"
               hint='Contraseña'>
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class='cursor-pointer'
            @click='isPwd = !isPwd'
          />
        </template>
      </q-input>
      <q-input v-model='newAdmin.nombre' label='Nombre' />
      <q-input v-model='newAdmin.apellido' label='Apellidos' />
    </q-card-section>

    <q-separator />

    <q-card-actions vertical>
      <q-btn label='Crear' @click='algoPasa' />
    </q-card-actions>
  </q-card>
</template>

<script lang='ts'>
import { defineComponent, Ref, ref } from '@vue/composition-api';
import { NewAdmin } from 'src/types/NewAdmin';

export default defineComponent({
  name: 'AdminCreate',
  components: {},
  setup(_, context) {
    const isPwd: Ref<boolean> = ref(true);
    let newAdmin: Ref<NewAdmin> = ref({
      email: '',
      pass: '',
      nombre: '',
      apellido: ''
    });
    const algoPasa = () => {
      console.log('Algo pasa');
    };
    return { isPwd, newAdmin, algoPasa };
  }
});
</script>
