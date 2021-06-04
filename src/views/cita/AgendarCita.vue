<template>
  <div>
    <q-card v-show="showSimulatedReturnData">
      <q-card-section >
        <q-input v-model='cita.id' label='ID' disable />
        <br>
        <q-select filled v-model="mascSelected" :options="optionsM" label="Mascota" />
        <br>
        <q-select filled v-model="vetSelected" :options="optionsV" label="Veterinario" />
        <br>
        <q-input v-model='cita.fecha' hint='Fecha de la cita' type="date" />
      </q-card-section>

      <q-separator />

      <q-card-actions vertical>
        <q-btn label='Crear' @click='algoPasa' />
      </q-card-actions>
    </q-card>

  <q-inner-loading :showing="visible">
        <q-spinner-gears size="50px" color="primary" />
    </q-inner-loading>

  </div>
</template>

<script lang='ts'>
import { defineComponent, onBeforeMount, Ref, ref } from '@vue/composition-api';
import { useAgendarCita} from '../../uses/cita/useAgendarCita';
import { LocalStorage } from 'quasar';
import { CommonUser} from 'types/CommonUser';
import { useVeterinarios } from 'uses/veterinario/useVeterinarios';
import { SelectElement } from '../../types/SelectElement';
import { useMascotas } from '../../uses/mascota/useMascotas';


export default defineComponent({

  name: 'AgendarCita',
  components: {},
  setup() {

    const user: CommonUser = LocalStorage.getItem('user') as CommonUser;
    const { cita, create } = useAgendarCita(user.id);

    const { veterinarios } = useVeterinarios();
    const { mascotas } = useMascotas();

    const vetSelected: Ref<SelectElement> = ref({
      label: '',
      value: ''
    });
    const mascSelected: Ref<SelectElement> = ref({
      label: '',
      value: ''
    });
    let visible: Ref<boolean> = ref(false);
    let showSimulatedReturnData: Ref<boolean> = ref(false);

    let optionsV: Ref<SelectElement[]> =  ref([]);
    let optionsM: Ref<SelectElement[]> =  ref([]);

    onBeforeMount(() => {
      showLoading()
    })

    const algoPasa = () => {
        console.log(cita);
        cita.value.idMascota = mascSelected.value.value;
        cita.value.idVeterinario = vetSelected.value.value;
        void create();
    };

    function showLoading() {
      visible.value = true;
      showSimulatedReturnData.value = false;
      setTimeout(() => {
        visible.value = false
        showSimulatedReturnData.value = true
        veterinarios.value.forEach(vet => {
          optionsV.value.push(
            {
              label: vet.nombre,
              value: vet.id,
            }
          );
        });
        mascotas.value.forEach(masc => {
          optionsM.value.push(
            {
              label: masc.nombre,
              value: masc.id,
            }
          );
        });
      }, 3000);
    };

    return { cita, algoPasa, vetSelected, mascSelected, optionsV, optionsM, visible, showSimulatedReturnData };
  }
});
</script>
