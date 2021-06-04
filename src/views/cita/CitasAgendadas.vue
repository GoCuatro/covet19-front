<template>
<div>
    <div class="q-pa-md">

      <q-markup-table v-show="showSimulatedReturnData">
        <thead>
          <tr>
            <th class="text-center"><strong>Id Cita</strong></th>
            <th class="text-center"><strong>Id Mascota</strong></th>
            <th class="text-center"><strong>Id Veterinarios</strong></th>
            <th class="text-center"><strong>Fecha de la Cita</strong></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cita in citas" :key="cita.id">
            <td class="text-center" @click='redirige'>{{cita.id}}</td>
            <td class="text-center" @click='redirige'>{{cita.idMascota}}</td>
            <td class="text-center" @click='redirige'>{{cita.idVeterinario}}</td>
            <td class="text-center" @click='redirige'>{{cita.fecha}}</td>

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
import { LocalStorage } from 'quasar';
import { CommonUser } from 'types/CommonUser';
import { useCitasAgendadas } from '../../uses/cita/useCitasAgendadas';
import { Router } from 'src/router';

export default defineComponent({
  name: 'CitasAgendadas',
  components: {},
  setup() {
    const user: CommonUser = LocalStorage.getItem('user') as CommonUser;
    const { citas } = useCitasAgendadas(user.id);

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

    const redirige = () => {
      Router?.push("/user");

    };
    return { citas, visible, showSimulatedReturnData, redirige };
  }
});
</script>
