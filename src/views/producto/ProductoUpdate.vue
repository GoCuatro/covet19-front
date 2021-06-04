<template>
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
      <q-btn label='Guardar' @click='updateView' />
    </q-card-actions>
  </q-card>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/composition-api';
import { Producto } from 'types/Producto';
import useProductoUpdate from 'uses/producto/useProductoUpdate';
import { Notify } from 'quasar';

export default defineComponent({
  name: 'ProductoCreate',
  components: {},
  props: {
    producto: {
      type: Producto,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  setup(props, context) {
    const { newProducto, update } = useProductoUpdate(props.producto);
    const updateView = async () => {
      const response = await update();
      if (response) {
        context.emit('updated', props.index, JSON.parse(JSON.stringify(newProducto.value)));
      } else {
        Notify.create('Ocurrio un error');
      }
    };
    return { newProducto, updateView };
  }
});
</script>
