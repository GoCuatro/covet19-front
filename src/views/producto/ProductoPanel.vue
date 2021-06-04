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
import { PanelComponent } from 'types/PanelComponent';
import ProductoCreate from 'views/producto/ProductoCreate.vue';
import ProductoCatalogo from 'views/producto/ProductoCatalogo.vue';

export default defineComponent({
  name: 'ProductoPanel',
  components: {
    ProductoCreate,
    ProductoCatalogo
  },
  setup() {
    const paneles: PanelComponent[] = [
      {
        label: 'Catalogo',
        panel: 'producto-catalogo'
      },
      {
        label: 'Crear',
        panel: 'producto-create'
      }
    ];

    let tab = ref(null);

    return { tab, paneles };
  }
});
</script>
