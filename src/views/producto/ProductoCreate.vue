<template>
  <q-page>
    <q-card>
      <q-card-section>
        <q-input v-model='newProducto.id' label='ID' disable />
        <q-input v-model='newProducto.nombre' label='Nombre' />
        <q-input v-model='newProducto.descripcion' label='Descripcion' type='textarea' />
        <q-input v-model='newProducto.marca' label='Marca' />
        <q-input v-model.number='newProducto.precio' label='Precio' type='number' />
      </q-card-section>

      <q-separator />

      <q-card-actions vertical>
        <q-btn label='Crear' @click='createView' />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/composition-api';
import { useProductoCreate } from 'uses/producto/useProductoCreate';
import { Notify } from 'quasar';

export default defineComponent({
  name: 'ProductoCreate',
  components: {},
  setup() {

    const { newProducto, create } = useProductoCreate();

    const createView = async () => {
      const response = await create();
      if (response) {
        Notify.create('Producto creado correctamente');
      }
    };

    return { newProducto, createView };
  }
});
</script>
