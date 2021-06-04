<template>
  <q-page>
    <q-card>
      <q-card-section>
        <q-input v-model='newProducto.id' label='ID' disable />
        <q-input v-model='newProducto.nombre' label='Nombre' />
        <q-input v-model='newProducto.descripcion' label='Descripcion' type='textarea' />
        <q-input v-model='newProducto.marca' label='Marca' />
        <q-input v-model.number='newProducto.marca' label='Precio' type='number' />
      </q-card-section>

      <q-separator />

      <q-card-actions vertical>
        <q-btn label='Crear' @click='algoPasa' />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script lang='ts'>
import { defineComponent, Ref, ref } from '@vue/composition-api';
import { Producto } from 'types/Producto';
import { UUID } from 'uuid-generator-ts';
import { Router} from '../../router';

export default defineComponent({
  name: 'ProductoCreate',
  components: {},
  setup(_, context) {

    const uuid: string = new UUID().toString();
    const newProducto: Ref<Producto> = ref({
      id: uuid,
      nombre: '',
      descripcion: '',
      marca: '',
      precio: 0
    });

    function algoPasa() {
      if(Router!=null){
        Router.push('HolaMundo');
      }
    }

    return { newProducto, algoPasa };
  }
});
</script>
