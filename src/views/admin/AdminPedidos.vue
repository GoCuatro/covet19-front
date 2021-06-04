<template>
  <q-page>
    <q-card>
      <q-card-section>
        <q-input type='search' label='Buscar' v-model='busquedaFilter' />
      </q-card-section>
      <q-separator />
      <q-card-section>
        <q-list>
          <q-item v-for='(admin, adminIndex) in filteredNomina' :key='admin.nombre + adminIndex'>
            <q-item-section>
              <admin-update v-if='editing.includes(adminIndex)' :admin='admin' :index='adminIndex'
                            @updated='onUpdated' />
              <q-card v-else>
                <q-card-section>
                  <q-item>
                    <q-item-section>
                      <q-item-label>{{ admin.correo }} -
                        <q-badge color='teal' :label='admin.cedula' />
                      </q-item-label>
                      <q-item-label caption>{{ admin.nombre }} - {{ admin.telefono }} - {{ admin.direccion }}
                      </q-item-label>
                    </q-item-section>

                    <q-item-section side>
                      <q-badge color='teal' :label='admin.id' />
                    </q-item-section>
                  </q-item>
                </q-card-section>
                <q-separator />
                <q-card-section>
                  <div class='row justify-end'>
                    <q-btn label='Editar' @click='editAdmin(adminIndex)' />
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
import { computed, defineComponent, onMounted, Ref, ref } from '@vue/composition-api';
import { useAdminNomina } from 'uses/admin/useAdminNomina';
import { useFilterAdmin } from 'uses/admin/useFilterAdmin';
import AdminUpdate from 'views/admin/AdminUpdate.vue';
import { CommonUser } from 'types/CommonUser';

export default defineComponent({
  name: 'AdminNomina',
  components: {
    AdminUpdate
  },
  setup() {
    const { nomina, loadNomina } = useAdminNomina();
    const { busquedaFilter, filterAdmin } = useFilterAdmin();
    const editing: Ref<number[]> = ref([]);
    onMounted(loadNomina);
    const filteredNomina = computed(() => {
      return filterAdmin(nomina.value);
    });

    function editAdmin(index: number) {
      editing.value.push(index);
    }

    function onUpdated(index: number, updated: CommonUser) {
      nomina.value[index] = updated;
      editing.value = editing.value.filter(value => {
        return value != index;
      });
    }

    return { busquedaFilter, filteredNomina, editing, editAdmin, onUpdated };
  }
})
;
</script>
