<template>
  <q-card>
    <q-card-section>
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

export default defineComponent({

  name: 'AgendarCita',
  components: {},
  setup() {

    const { cita, create } = useAgendarCita();

    const algoPasa = () => {
       cita.value.idUsuario;

        console.log(cita);
        void create();

    };
    return { cita, algoPasa };
  }
});
</script>
