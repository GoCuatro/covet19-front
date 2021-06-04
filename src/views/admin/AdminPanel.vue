<template>
  <q-page>
    <q-card>
      <q-tabs
        v-model='tab'
        dense
        class='text-grey'
        active-color='primary'
        indicator-color='primary'
        align='justify'
        narrow-indicator
      >
        <q-tab v-for='(panelHeader, panelHeaderIndex) in paneles' :name='panelHeader.panel' :label='panelHeader.label'
               :key='`panelHeader-${panelHeaderIndex}`' />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model='tab' animated>
        <q-tab-panel v-for='(panelTab, panelTabIndex) in paneles' :name='panelTab.panel'
                     :key='`panelTab-${panelTabIndex}`'>
          <component :is='panelTab.panel' />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script lang='ts'>
import { defineComponent, ref } from '@vue/composition-api';
import AdminCreate from 'src/views/admin/AdminCreate.vue';
import AdminNomina from 'views/admin/AdminNomina.vue';
import AdminPedidos from 'views/admin/AdminPedidos.vue';
import { PanelComponent } from 'types/PanelComponent';

export default defineComponent({
  name: 'AdminPanel',
  components: {
    AdminCreate,
    AdminNomina,
    AdminPedidos
  },
  setup() {
    let tab = ref(null);

    const paneles: PanelComponent[] = [
      {
        label: 'Pedidos',
        panel: 'admin-pedidos'
      },
      {
        label: 'Nomina',
        panel: 'admin-nomina'
      },
      {
        label: 'Crear',
        panel: 'admin-create'
      }
    ];

    return { tab, paneles };
  }
});
</script>

<style lang="sass" scoped>
.my-custom-toggle
  border: 1px solid #027be3
</style>
