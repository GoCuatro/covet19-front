<template>
  <div class="q-pa-md">
    <q-table
      title="Macotas"
      :data="mascotas"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script lang='ts'>
import { defineComponent} from '@vue/composition-api';
import { useMascotas } from '../../uses/mascota/useMascota';

export default defineComponent({
  name: 'mascotaAll',
  components: {},
  setup() {

    const { mascotas } = useMascotas();

    let columns = [
      { name: 'nombre', align: 'center', label: 'Nombre',  field: 'nombre', sortable: true },
      { name: 'edad', align: 'center', label: 'Edad', field: 'edad', sortable: true },
      { name: 'tipo', align: 'center', label: 'Tipo', field: 'tipo', sortable: true },
      { name: 'raza', align: 'center', label: 'Raza', field: 'raza', sortable: true },
    ];
    return { columns, mascotas };
  }
});
</script>
