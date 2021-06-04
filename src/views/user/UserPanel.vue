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
        <q-tab name='Tienda' label='Tienda'/>
        <q-tab name='Carrito' label='Carrito' />
        <q-tab name='Mascotas' label='Mascotas' />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model='tab' animated>
        <q-tab-panel name='Tienda'>
          <productos-all-avaliable></productos-all-avaliable>
       <!-- <veterinario-create></veterinario-create> !-->
        </q-tab-panel>

        <q-tab-panel name='Carrito'>
          <!-- <veterinario-all></veterinario-all> !-->
        </q-tab-panel>

        <q-tab-panel name='Mascotas'>
         <mascota-all></mascota-all>
        </q-tab-panel>

      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script lang='ts'>
import { defineComponent, ref } from '@vue/composition-api';
import ProductosAllAvaliable from '../producto/ProductoAllAvaliable.vue';
import MascotaAll from '../mascota/MascotaAll.vue';
export default defineComponent({
  name: 'ProductoPanel',
  components: { ProductosAllAvaliable, MascotaAll },
  setup() {
    let tab = ref('Tienda');
    return { tab };
  }

});
</script>
