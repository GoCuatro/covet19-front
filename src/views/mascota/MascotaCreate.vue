<template>
  <q-page>
    <q-card>
      <q-card-section>
        <q-input v-model="newMascota.nombre" label="Nombre" />
        <q-input v-model="newMascota.edad" label="Edad" type="number" />
        <q-input v-model="newMascota.tipo" label="Tipo" />
        <q-input v-model="newMascota.raza" label="Raza" />
      </q-card-section>

      <q-separator />

      <q-card-actions vertical>
        <q-btn label="Crear" @click="algoPasa" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/composition-api';
import { useMascotaCreate } from 'uses/mascota/useMascotaCreate';

export default defineComponent({
  name: 'MascotaCreate',
  components: {},
 
  setup() {
    const { newMascota, create } = useMascotaCreate();


    function algoPasa() {
      console.log(newMascota);
      void create();
    }
    return { newMascota, algoPasa, create };
  },
});
</script>
