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
        </q-tab-panel>

        <q-tab-panel name='Carrito'>
          <h2> Carrito en mantenimiento *~* </h2>
          <!-- componente del carrito !-->
        </q-tab-panel>

        <q-tab-panel name='Mascotas'>
          <div class='text-h6'>Mis Mascotas</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script lang='ts'>
import { defineComponent, ref } from '@vue/composition-api';
import ProductosAllAvaliable from '../producto/ProductoAllAvaliable.vue';

export default defineComponent({
  name: 'ProductoPanel',
  components: { ProductosAllAvaliable },
  setup() {
    let tab = ref('Tienda');
    return { tab };
  }

});
</script>
