<template>
  <q-page>
    <q-card>
      <q-card-section>
        <q-input type='search' label='Buscar' v-model='busquedaFilter' />
      </q-card-section>
      <q-separator />
      <q-card-section>
        <q-list>
          <q-item v-for='(producto, productoIndex) in filteredCatalogo' :key='producto.nombre + productoIndex'>
            <q-item-section>
              <producto-update v-if='editing.includes(productoIndex)' :producto='producto' :index='productoIndex'
                               @updated='onUpdated' />
              <q-card v-else>
                <q-card-section>
                  <q-item>
                    <q-item-section>
                      <q-item-label>{{ producto.nombre }} -
                        <q-badge color='teal' :label='producto.marca' />
                      </q-item-label>
                      <q-item-label caption>{{ producto.descripcion }}</q-item-label>
                    </q-item-section>

                    <q-item-section side>
                      <q-badge color='teal' :label='producto.precio' />
                    </q-item-section>
                  </q-item>
                </q-card-section>
                <q-separator />
                <q-card-section>
                  <div class='row justify-end'>
                    <q-btn label='ver producto' @click='verProducto(producto)' />
                  </div>
                </q-card-section>
              </q-card>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
      <q-separator />
      <q-card-actions vertical>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script lang='ts'>
import { computed, defineComponent, onMounted, Ref, ref } from '@vue/composition-api';
import { useFilterProducto } from 'uses/producto/useFilterProducto';
import { useProductoCatalogo } from 'uses/producto/useProductoCatalogo';
import { Dialog, Notify } from 'quasar';
import { Producto } from 'types/Producto';
import ProductoUpdate from 'views/producto/ProductoUpdate.vue';

export default defineComponent({
  name: 'ProductoCatalogo',
  components: {
    ProductoUpdate
  },
  setup() {
    const { busquedaFilter, filterCatalogo } = useFilterProducto();
    const { catalogo, loadCatalogo } = useProductoCatalogo();
    const editing: Ref<number[]> = ref([]);

    onMounted(loadCatalogo);

    const filteredCatalogo = computed(() => {
      if (editing.value.length > 0) {
        Notify.create('Busqueda desactivada mientras se editan elementos');
        return catalogo.value;
      } else {
        return filterCatalogo(catalogo.value);
      }
    });

    function verProducto(producto: Producto){

    }



    function onUpdated(index: number, updated: Producto) {
      catalogo.value[index] = updated;
      editing.value = editing.value.filter(value => {
        return value != index;
      });
    }
    return { busquedaFilter, filteredCatalogo,   editing,  onUpdated };
  }
})
;
</script>
<!--
template>
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

-->
