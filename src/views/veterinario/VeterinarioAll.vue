<template>
  <div class="q-pa-md">
    <q-table
      title="Veterinarios"
      :data="veterinarios"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script lang='ts'>
import { defineComponent, Ref, ref } from '@vue/composition-api';
import { useVeterinarios } from '../../uses/veterinario/useVeterinarios';

export default defineComponent({
  name: 'VeterinarioCreate',
  components: {},
  setup() {
    const { veterinarios } = useVeterinarios();

    let columns = [
      { name: 'nombre', label: 'Nombre', align: 'center', field: 'nombre', sortable: true },
      { name: 'cedula', align: 'center', label: 'Cédula', field: 'cedula', sortable: true },
      { name: 'correo', align: 'center', label: 'Correo', field: 'correo', sortable: true },
      { name: 'direccion', label: 'Dirección', field: 'direccion', sortable: true },
      { name: 'telefono', label: 'Teléfono', field: 'telefono', sortable: true },
      { name: 'tarjetaProfesional', label: 'Tarjeta Profesional', field: 'tarjetaProfesional', sortable: true },
      { name: 'fechaNacimiento', label: 'Fecha de Nacimiento', field: 'fechaNacimiento'},
    ];

    return { columns, veterinarios };
  }
});
</script>
