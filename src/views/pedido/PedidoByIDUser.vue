<template>
  <div class="q-pa-md">
    <q-table
      title="Pedidos realizados"
      :data="pedidos"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script lang='ts'>
import { defineComponent} from '@vue/composition-api';
import { usePedido } from '../../uses/pedido/usePedido';

export default defineComponent({
  name: 'PedidoAll',
  components: {},
  setup() {

    const { pedidos } = usePedido();

    let columns = [
      { name: 'idPedido', align: 'center', label: 'ID',  field: 'idPedido', sortable: true },
      { name: 'enviadoPedido', align: 'center', label: 'Pedido enviado', field: 'enviadoPedido', sortable: true },
      { name: 'finalizadoPedido', align: 'center', label: 'Pedido finalizado', field: 'finalizadoPedido', sortable: true },
      { name: 'fechaEnviadoPedido', align: 'center', label: 'fecha de envía', field: 'fechaEnviadoPedido', sortable: true },
      { name: 'fechaFinalizadoPedido', align: 'center', label: 'fecha de finalización', field: 'fechaFinalizadoPedido', sortable: true },
      { name: 'total', align: 'center', label: 'Total', field: 'total', sortable: true },

    ];

    return { columns, pedidos };
  }
});
</script>