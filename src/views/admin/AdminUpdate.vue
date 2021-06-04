<template>
  <q-card>
    <q-card-section>
      <q-input v-model='newAdmin.id' hint='Id' disable />
      <q-input v-model='newAdmin.correo' hint='Email' />
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
      <q-input v-model='newAdmin.cedula' hint='Cedula' />
      <q-input v-model='newAdmin.nombre' hint='Nombre' />
      <q-input v-model='newAdmin.telefono' hint='Telefono' />
      <q-input v-model='newAdmin.direccion' hint='Direccion' />
      <q-input v-model='newAdmin.fechaNacimiento' hint='Fecha de nacimiento' type='date' />
    </q-card-section>

    <q-separator />

    <q-card-actions vertical>
      <q-btn label='Crear' @click='createView' />
    </q-card-actions>
  </q-card>
</template>

<script lang='ts'>
import { defineComponent, Ref, ref } from '@vue/composition-api';
import { useAdminCreate } from 'uses/admin/useAdminCreate';
import { Notify } from 'quasar';

export default defineComponent({
  name: 'AdminCreate',
  components: {},
  setup() {
    const isPwd: Ref<boolean> = ref(true);
    const { newAdmin, create } = useAdminCreate();

    const createView = async () => {
      const response = await create();
      if(response){
        Notify.create('Administrador creado correctamente');
      }else{
        Notify.create('Ocurrio un error');
      }
    }

    return { isPwd, newAdmin, createView };
  }
});
</script>
