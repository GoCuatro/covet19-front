<template>
  <div>
    <div class="q-pa-md">

      <q-table v-show="showSimulatedReturnData"
        title="Veterinarios"
        :data="veterinarios"
        :columns="columns"
        row-key="name"
      />

      <q-inner-loading :showing="visible">
        <q-spinner-gears size="50px" color="primary" />
      </q-inner-loading>

    </div>

  </div>
</template>

<script lang='ts'>
import { defineComponent, onBeforeMount, Ref, ref } from '@vue/composition-api';
import { useVeterinarios } from '../../uses/veterinario/useVeterinarios';

export default defineComponent({
  name: 'VeterinarioCreate',
  components: {},
  setup() {
    const { veterinarios } = useVeterinarios();

    let visible: Ref<boolean> = ref(false);
    let showSimulatedReturnData: Ref<boolean> = ref(false);

    onBeforeMount(()=>{
      showLoading();
    });

    function showLoading () {
      visible.value = true
      showSimulatedReturnData.value = false
      setTimeout(() => {
        visible.value = false
        showSimulatedReturnData.value = true
      }, 3000);
    };

    let columns = [
      { name: 'nombre', label: 'Nombre', align: 'center', field: 'nombre', sortable: true },
      { name: 'cedula', align: 'center', label: 'Cédula', field: 'cedula', sortable: true },
      { name: 'correo', align: 'center', label: 'Correo', field: 'correo', sortable: true },
      { name: 'direccion', label: 'Dirección', field: 'direccion', sortable: true, align: 'center' },
      { name: 'telefono', label: 'Teléfono', field: 'telefono', sortable: true, align: 'center' },
      { name: 'tarjetaProfesional', label: 'Tarjeta Profesional', field: 'tarjetaProfesional', sortable: true, align: 'center' },
      { name: 'fechaNacimiento', label: 'Fecha de Nacimiento', field: 'fechaNacimiento', align: 'center'},
    ];

    return { columns, veterinarios, visible, showSimulatedReturnData };
  }
});
</script>
