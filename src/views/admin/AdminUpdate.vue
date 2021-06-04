<template>
  <q-card>
    <q-card-section>
      <q-input v-model='newAdmin.id' hint='Id' disable />
      <q-input v-model='newAdmin.nombre' hint='Nombre' />
      <q-input v-model='newAdmin.telefono' hint='Telefono' />
      <q-input v-model='newAdmin.direccion' hint='Direccion' />
      <q-input v-model='newAdmin.fechaNacimiento' hint='Fecha de nacimiento' type='date' />
    </q-card-section>

    <q-separator />

    <q-card-actions vertical>
      <q-btn label='Guardar' @click='updateView' />
    </q-card-actions>
  </q-card>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/composition-api';
import { Notify } from 'quasar';
import useAdminUpdate from 'uses/admin/useAdminUpdate';
import { CommonUser } from 'types/CommonUser';

export default defineComponent({
  name: 'AdminUpdate',
  props: {
    admin: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  components: {},
  setup(props, context) {
    const { newAdmin, update } = useAdminUpdate(<CommonUser>props.admin);
    const updateView = async () => {
      const response = await update();
      if (response) {
        context.emit('updated', props.index, JSON.parse(JSON.stringify(newAdmin.value)));
      } else {
        Notify.create('Ocurrio un error');
      }
    };
    return { newAdmin, updateView };
  }
});
</script>
