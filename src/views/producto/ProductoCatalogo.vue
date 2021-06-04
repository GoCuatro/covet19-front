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
              <q-card>
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
import { computed, defineComponent, onMounted } from '@vue/composition-api';
import { useFilterProducto } from 'uses/producto/useFilterProducto';
import { useProductoCatalogo } from 'uses/producto/useProductoCatalogo';
import { Dialog } from 'quasar';
import { Producto } from 'types/Producto';

export default defineComponent({
  name: 'ProductoCatalogo',
  components: {},
  setup() {
    const { busquedaFilter, filterCatalogo } = useFilterProducto();
    const { catalogo, loadCatalogo, loadStock, diableProducto } = useProductoCatalogo();

    onMounted(loadCatalogo);

    const filteredCatalogo = computed(() => {
      return filterCatalogo(catalogo.value);
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
        void (loadStock(producto, Number(data)));
      });
    }

    function disableProductoView(producto: Producto) {
      void(diableProducto(producto));
    }

    return { busquedaFilter, filteredCatalogo, getLoadStock, disableProductoView };
  }
})
;
</script>
