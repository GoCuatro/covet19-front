<template>
  <q-page>
    <q-card>
      <q-card-section>
        <q-list>
          <q-item v-for='(pedido, pedidoIndex) in pedidos' :key='pedido.idPedido + pedidoIndex'>
            <q-item-section>
              <q-card>
                <q-card-section>
                  <q-item>
                    <q-item-section>
                      <q-item-label>Pedido - {{ pedido.idPedido }}</q-item-label>
                    </q-item-section>

                    <q-item-section side>
                      <q-badge color='teal' :label='"Total: " + getTotal(pedido)' />
                    </q-item-section>
                  </q-item>

                  <q-item>
                    <q-item-section>
                      <q-item-label>
                        Enviado:
                        <q-avatar v-if='pedido.enviadoPedido' icon='check' color='green' rounded size='sm' />
                        <q-avatar v-else icon='close' color='red' rounded size='sm' />
                      </q-item-label>
                      <template v-if='pedido.enviadoPedido'>
                        <q-item-label>
                          Fecha enviado: {{ pedido.fechaEnviadoPedido }}
                        </q-item-label>
                      </template>
                      <q-item-label>
                        Finalizado:
                        <q-avatar v-if='pedido.finalizadoPedido' icon='check' color='green' rounded size='sm' />
                        <q-avatar v-else icon='close' color='red' rounded size='sm' />
                      </q-item-label>
                      <template v-if='pedido.finalizadoPedido'>
                        <q-item-label>
                          Fecha enviado: {{ pedido.fechaFinalizadoPedido }}
                        </q-item-label>
                      </template>
                    </q-item-section>
                  </q-item>

                </q-card-section>

                <q-separator />

                <q-expansion-item
                  expand-separator
                  icon='shopping_cart'
                  label='Carrito'
                  :caption='`${pedido.compraPedido.length} elementos`'
                >
                  <q-list>
                    <q-item v-for='(compra, indexCompra) in pedido.compraPedido' :key='compra.id+indexCompra'>
                      <q-item-section top avatar>
                        <q-avatar color='primary' text-color='white' square>{{ compra.cantidad }}</q-avatar>
                      </q-item-section>

                      <q-item-section>
                        <q-item-label>{{ compra.nombre }}</q-item-label>
                        <q-item-label caption>{{ compra.marca }}</q-item-label>
                      </q-item-section>

                      <q-item-section side>
                        <q-badge color='teal' :label='compra.precio' />
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-expansion-item>
                <q-separator />
                <q-card-section>
                  <div class='row justify-end'>
                    <q-btn label='Finalizar Pedido' @click='finalizarPedidoView(pedido)' />
                  </div>
                </q-card-section>
              </q-card>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
      <q-separator />
      <q-card-actions vertical>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script lang='ts'>
import { defineComponent, onMounted } from '@vue/composition-api';
import { usePedido } from 'uses/pedido/usePedido';
import { Pedido } from 'types/Pedido';
import { Notify } from 'quasar';

export default defineComponent({
  name: 'PedidoAll',
  components: {},
  setup() {
    const { pedidos, loadPedidos, getTotal, finalizarPedido } = usePedido();
    onMounted(loadPedidos);
    const finalizarPedidoView = async (pedido: Pedido) => {
      const response = await finalizarPedido(pedido);
      if (response) {
        Notify.create('Pedido enviado exitosamente.');
        void (await loadPedidos());
      }
    };
    return { pedidos, getTotal, finalizarPedidoView };
  }
})
;
</script>