<template>
  <div>
    <div class="q-pa-md" v-show="showSimulatedReturnData">
      <q-card>
        <q-card-section>
          <div class="row text-center">
            <h4>Cita con id: {{cita.id}}</h4>
          </div>

          <div class="row">
            <div class="col-4">
              <strong>Fecha: </strong>
            </div>
            <div class="col-8">
              {{cita.fecha}}
            </div>
          </div>

          <div class="row">
            <div class="col-4">
              <strong>IdMascota: </strong>
            </div>
            <div class="col-8">
              <a :href="`mascota/${cita.idMascota}`">{{cita.idMascota}}</a>
            </div>
          </div>

          <div class="row" v-show="cita.diagnostico !== ''">
            <div class="col-4">
              <strong>Diagnostico: </strong>
            </div>
            <div class="col-8" v-show="!isVet">
              {{cita.diagnostico}}
            </div>
            <div class="col-8" v-show="isVet">
              <q-input
                v-model="cita.diagnostico"
                filled
                autogrow
              />
            </div>
          </div>

          <div class="row" v-show="!isVet">
            <div class="col-4">
              <strong>Veterinario: </strong>
            </div>
            <div class="col-8">
              <a :href="`veterinario/find/${cita.idVeterinario}`">{{cita.idVeterinario}}</a>
            </div>
          </div>
        </q-card-section>
      </q-card>

      <br>
      <q-card-actions vertical v-show="!isVet">
        <q-btn label='Editar' @click='editar' />
      </q-card-actions>

      <br>
      <q-card-actions vertical v-show="!isVet">
        <q-btn label='Cancelar' @click='deleteCitaV' />
      </q-card-actions>

      <q-card-actions vertical v-show="isVet">
        <q-btn label='Guardar Diagnostico' @click='guardarDiagnostico' />
      </q-card-actions>

    </div>
    <q-inner-loading :showing="visible">
        <q-spinner-gears size="50px" color="primary" />
    </q-inner-loading>

  </div>
</template>

<script lang='ts'>
import { defineComponent, onBeforeMount, Ref, ref } from '@vue/composition-api';
import { Router } from 'src/router';
import { LocalStorage } from 'quasar';
import { CommonUser } from 'types/CommonUser';
import { useVerCita } from '../../uses/cita/useVerCita';
import { useAgregarDiagnostico } from '../../uses/cita/useAgregarDiagnostico';
import { useDeleteCita } from '../../uses/cita/useDeleteCita';

export default defineComponent({
  name: 'CitaVer',
  components: {},
  setup() {
    const { find , cita } = useVerCita();
    const { agregarDiagnostico, citaD } = useAgregarDiagnostico();
    const { deleteCita } = useDeleteCita();
    let visible: Ref<boolean> = ref(false);
    let showSimulatedReturnData: Ref<boolean> = ref(false);
    let isVet: Ref<boolean> = ref(false);
    let id: Ref<string> = ref(Router?.currentRoute.params.id as string);

    onBeforeMount(()=>{
      if((LocalStorage.getItem('user') as CommonUser).rol === 'vet') {
          isVet.value = true;
      }
      void find(id.value);
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

    function editar() {
      Router?.push("/cita/".concat("update/").concat(cita.value.id));
    }

    function deleteCitaV() {
      deleteCita(cita.value.id);
      Router?.push("user/cita");
    }

    function guardarDiagnostico() {
      citaD.value = cita.value;
      void agregarDiagnostico();
    }

    return { cita, visible, showSimulatedReturnData, id, isVet, editar, guardarDiagnostico, deleteCitaV };
  }
});
</script>
