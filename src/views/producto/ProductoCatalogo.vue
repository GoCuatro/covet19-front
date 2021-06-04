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
                    <q-btn label='Cargar Inventario' @click='getLoadStock(producto)' />
                    <q-btn label='Editar' @click='editProducto(productoIndex)' />
                    <q-btn label='Deshabilitar' @click='disableProductoView(producto)' />
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
    const { catalogo, loadCatalogo, loadStock, diableProducto } = useProductoCatalogo();
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

    function getLoadStock(producto: Producto) {
      Dialog.create({
        title: 'Cargar inventario',
        message: '¿Cuantas unidades va a cargar?',
        prompt: {
          model: '0',
          type: 'number' // optional
        },
        cancel: true,
        persistent: true
      }).onOk((data: number) => {
        loadStock(producto, Number(data)).then(value => {
          if (value) {
            Notify.create('Inventario cargado exitosamente');
          } else {
            Notify.create('Ocurrio un error');
          }
        }).catch(() => Notify.create('Ocurrio un error'));
      });
    }

    function editProducto(index: number) {
      editing.value.push(index);
    }

    function onUpdated(index: number, updated: Producto) {
      catalogo.value[index] = updated;
      editing.value = editing.value.filter(value => {
        return value != index;
      });
    }

    function disableProductoView(producto: Producto) {
      diableProducto(producto).then(value => {
        if (value) {
          Notify.create('Producto deshabilitado');
          void (loadCatalogo());
        } else {
          Notify.create('Ocurrio un error');
        }
      }).catch(() => Notify.create('Ocurrio un error'));
    }

    return { busquedaFilter, filteredCatalogo, getLoadStock, disableProductoView, editing, editProducto, onUpdated };
  }
})
;
</script>
