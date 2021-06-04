<template>
  <q-card>
    <q-card-section>
      <div class="q-pa-md">
        <q-table
          title="Citas Agendadas"
          :data="citasAgendadas"
          :columns="columns"
          row-key="name"
        />
      </div>
    </q-card-section>

    <q-separator />

    <q-card-actions vertical>
      <q-btn label='VerCita' @click='algoPasa' />
    </q-card-actions>
  </q-card>
</template>

<script lang='ts'>
import { defineComponent} from '@vue/composition-api';
import { useCitasAgendadas } from '../../uses/cita/useCitasAgendadas';

export default defineComponent({
  name: 'CitasAgendadas',
  components: {},
  setup() {
    const { citas } = useCitasAgendadas();

    let columns = [
      { name: 'idMascota', label: 'id Mascota', align: 'center', field: 'idMascota', sortable: true },
      { name: 'idVeterinario', label: 'id Veterinario', align: 'center', field: 'idVeterinario', sortable: true },
      { name: 'fecha', label: 'Fecha de la Cita', field: 'fecha'}
    ];

    return { columns, citas };
  }
});
</script>
