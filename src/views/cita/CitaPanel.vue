<template>
  <q-page>
    <q-card>
      <q-tabs
        v-model='tab'
        dense
        class='text-grey'
        active-color='primary'
        indicator-color='primary'
        align='justify'
        narrow-
      >
        <q-tab name='agendar' label='Agendar Cita'/>
        <q-tab name='citas' label='Ver Citas' />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model='tab' animated>
        <q-tab-panel name='agendar'>
          <div class='text-h6'>Agendar citas</div>
          <agendar-cita></agendar-cita>
        </q-tab-panel>

        <q-tab-panel name='citas'>
          <div class='text-h6'>Mis Mascotas</div>
          en construcción...
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script lang='ts'>
import { defineComponent, ref } from '@vue/composition-api';
import AgendarCita from '../cita/AgendarCita.vue';

export default defineComponent({
  name: 'CitaPanel',
  components: { AgendarCita },
  setup() {
    let tab = ref('agendar');
    return { tab };
  }

});
</script>
