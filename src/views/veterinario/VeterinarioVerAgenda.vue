<template>
  <div>
    <div class="q-pa-md" v-show="showSimulatedReturnData">

      <div class="row text-center">
        <h4>Agenda</h4>
      </div>

      <q-markup-table v-if="agenda != null && agenda.length > 0">
        <thead>
          <tr>
            <th class="text-center">#</th>
            <th class="text-center">Diagnostico</th>
            <th class="text-center">Fecha</th>
            <th class="text-center">idMascota</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="elem in agenda" :key="elem.id">
            <td class="text-center">{{elem.id}}</td>
            <td class="text-center">{{elem.diagnostico}}</td>
            <td class="text-center">{{elem.fecha}}</td>
            <td class="text-center">{{elem.idMascota}}</td>
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
import { Router } from 'src/router';
import { useVerAgendaVeterinario } from '../../uses/veterinario/useVerAgendaVeterinario';

export default defineComponent({
  name: 'VeterinarioVerAgenda',
  components: {},
  setup() {
    const { agenda, verAgenda } = useVerAgendaVeterinario();
    let visible: Ref<boolean> = ref(false);
    let showSimulatedReturnData: Ref<boolean> = ref(false);
    let id: Ref<string> = ref(Router?.currentRoute.params.id as string);

    onBeforeMount(()=>{
      //void verAgenda(id.value);
      showLoading();
    });

    function showLoading () {
      visible.value = true;
      showSimulatedReturnData.value = false;
      setTimeout(() => {
        visible.value = false
        showSimulatedReturnData.value = true
        console.log(agenda);
      }, 3000);
    };

    return { agenda, visible, showSimulatedReturnData, id };
  }
});
</script>
