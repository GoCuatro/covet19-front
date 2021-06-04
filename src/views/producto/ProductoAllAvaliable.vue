<template>
  <div class="q-pa-md">
    <div class="row justify-center q-gutter-sm">
      <q-intersection
        v-for="producto in productos"
        :key="producto.nombre"
        :producto ="producto"
        class="example-item"
      >
        <q-card class="q-ma-sm">
          <img src="https://cdn.quasar.dev/img/mountains.jpg">

          <q-card-section>
            <div class="text-h6">{{ producto.nombre }}</div>
            <div class="text-subtitle2">${{ producto.precio }}</div>
          </q-card-section>
        </q-card>
      </q-intersection>
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import { useProductos } from '../../uses/producto/useProducto';
export default defineComponent({
  name: 'ProductoAllAvaliable',
  components: {},
  setup() {
    const { productos } = useProductos();
    return { productos };
  }
});
</script>

<style lang="sass" scoped>
.example-item
  height: 290px
  width: 290px
</style>

