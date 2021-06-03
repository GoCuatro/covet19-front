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
        narrow-indicator
      >
        <q-tab name='create' label='Crear' />
        <q-tab name='alarms' label='Alarms' />
        <q-tab name='movies' label='Movies' />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model='tab' animated>
        <q-tab-panel name='create'>
          <admin-create />
        </q-tab-panel>

        <q-tab-panel name='alarms'>
          <div class='text-h6'>Alarms</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
import { defineComponent, Ref, ref } from '@vue/composition-api';
import { LoginInfo } from 'src/types/LoginInfo';
import axios from 'axios';
import AdminCreate from 'src/views/admin/AdminCreate.vue';

export default defineComponent({
  name: 'AdminPanel',
  components: { AdminCreate },
  setup(_, context) {
    let tab = ref(null);

    return { tab };
  }
});
</script>

<style lang="sass" scoped>
.my-custom-toggle
  border: 1px solid #027be3
</style>
