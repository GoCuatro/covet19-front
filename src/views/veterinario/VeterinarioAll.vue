<template>
  <div>
    <div class="q-pa-md">

      <q-markup-table v-show="showSimulatedReturnData">
        <thead>
          <tr>
            <th class="text-center"><strong>#</strong></th>
            <th class="text-center"><strong>Nombre</strong></th>
            <th class="text-center"><strong>Cédula</strong></th>
            <th class="text-center"><strong>Correo</strong></th>
            <th class="text-center"><strong>Dirección</strong></th>
            <th class="text-center"><strong>Teléfono</strong></th>
            <th class="text-center"><strong>Tarjeta Profesional</strong></th>
            <th class="text-center"><strong>Fecha de Nacimiento</strong></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="vet in veterinarios" :key="vet.id">
            <td class="text-center"><a :href="`/veterinario/find/${vet.id}`">{{vet.id}}</a></td>
            <td class="text-center">{{vet.nombre}}</td>
            <td class="text-center">{{vet.cedula}}</td>
            <td class="text-center">{{vet.correo}}</td>
            <td class="text-center">{{vet.direccion}}</td>
            <td class="text-center">{{vet.telefono}}</td>
            <td class="text-center">{{vet.tarjetaProfesional}}</td>
            <td class="text-center">{{vet.fechaNacimiento}}</td>
          </tr>
        </tbody>

      </q-markup-table>

    </div>

    <q-inner-loading :showing="visible">
      <q-spinner-gears size="50px" color="primary" />
    </q-inner-loading>

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
      visible.value = true;
      showSimulatedReturnData.value = false;
      setTimeout(() => {
        visible.value = false
        showSimulatedReturnData.value = true
      }, 3000);
    };

    return { veterinarios, visible, showSimulatedReturnData };
  }
});
</script>
