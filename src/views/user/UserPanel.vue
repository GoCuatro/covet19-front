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
        <q-tab name='Perfil' label='Perfil'/>
        <q-tab name='Tienda' label='Tienda'/>
        <q-tab name='Carrito' label='Carrito' />
        <q-tab name='Pedidos' label='Pedidos' />
        <q-tab name='Mascotas' label='Mascotas' />
        <q-tab name='AgregarMascota' label='Agregar Mascota' />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model='tab' animated>
        <q-tab-panel name='Perfil'>
          <user-view></user-view>
       <!-- <veterinario-create></veterinario-create> !-->
        </q-tab-panel>
        <q-tab-panel name='Tienda'>
          <productos-all-avaliable></productos-all-avaliable>
        </q-tab-panel>

        <q-tab-panel name='Carrito'>
          <h2> Carrito en mantenimiento *~* </h2>
          <!-- componente del carrito !-->
        </q-tab-panel>

        <q-tab-panel name='Pedidos'>
         <pedido-all></pedido-all>
        </q-tab-panel>

        <q-tab-panel name='Mascotas'>
         <mascota-all></mascota-all>
        </q-tab-panel>

        <q-tab-panel name='AgregarMascota'>
         <mascota-create></mascota-create>
        </q-tab-panel>


      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script lang='ts'>
import { defineComponent, ref } from '@vue/composition-api';
import ProductosAllAvaliable from '../producto/ProductoAllAvaliable.vue';
import MascotaAll from '../mascota/MascotaAll.vue';
import PedidoAll from '../pedido/PedidoByIDUser.vue';
import MascotaCreate from '../mascota/MascotaCreate.vue';
import UserView from '../user/UserView.vue';

export default defineComponent({
  name: 'ProductoPanel',
  components: { ProductosAllAvaliable, MascotaAll, PedidoAll, MascotaCreate, UserView },
  setup() {
    let tab = ref('Tienda');
    return { tab };
  }
});
</script>
