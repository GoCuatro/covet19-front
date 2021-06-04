<template>
  <q-card>
    <q-card-section>
      <q-input v-model='cita.id' label='ID' disable />
      <q-input v-model='cita.idMascota' label='Id mascota' />
      <q-input v-model='cita.idVeterinario' label='Id veterinario' />
      <q-input v-model='cita.fecha' hint='Fecha de la cita' type="date" />
    </q-card-section>

    <q-separator />

    <q-card-actions vertical>
      <q-btn label='Crear' @click='algoPasa' />
    </q-card-actions>
  </q-card>
</template>

<script lang='ts'>
import { defineComponent, Ref, ref } from '@vue/composition-api';
import { useAgendarCita} from '../../uses/cita/useAgendarCita';
import { LocalStorage } from 'quasar';
import { CommonUser} from 'types/CommonUser';


export default defineComponent({

  name: 'AgendarCita',
  components: {},
  setup() {

    const user: CommonUser = LocalStorage.getItem('user') as CommonUser;
    const { cita, create } = useAgendarCita(user.id);

    const algoPasa = () => {


        console.log(cita);
        void create();

    };
    return { cita, algoPasa };
  }
});
</script>
