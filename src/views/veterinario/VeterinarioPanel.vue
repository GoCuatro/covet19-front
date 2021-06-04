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
        <q-tab name='create' label='Crear'/>
        <q-tab name='list' label='Veterinarios' />
        <q-tab name='movies' label='Movies' />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model='tab' animated>
        <q-tab-panel name='create'>
          <veterinario-create></veterinario-create>
        </q-tab-panel>

        <q-tab-panel name='list'>
          <veterinario-all></veterinario-all>
        </q-tab-panel>

        <q-tab-panel name='movies'>
          <div class='text-h6'>Movies</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script lang='ts'>
import { defineComponent, ref } from '@vue/composition-api';
import VeterinarioAll from './VeterinarioAll.vue';
import VeterinarioCreate from './VeterinarioCreate.vue';

export default defineComponent({
  name: 'VeterinarioPanel',
  components: {VeterinarioCreate, VeterinarioAll },
  setup() {
    let tab = ref('create');

    return { tab };
  }
});
</script>
