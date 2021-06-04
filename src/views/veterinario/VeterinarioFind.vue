<template>
  <div>
    <div class="q-pa-md" v-show="showSimulatedReturnData">
      <q-card>
        <q-card-section>
          <div class="row text-center">
            <h4>Veterinario con id: {{id}}</h4>
          </div>

          <div class="row">
            <div class="col-4">
              <strong>Nombres: </strong>
            </div>
            <div class="col-8">
              {{veterinario.nombre}}
            </div>
          </div>

          <div class="row">
            <div class="col-4">
              <strong>Cédula: </strong>
            </div>
            <div class="col-8">
              {{veterinario.cedula}}
            </div>
          </div>

          <div class="row">
            <div class="col-4">
              <strong>Correo: </strong>
            </div>
            <div class="col-8">
              {{veterinario.correo}}
            </div>
          </div>

          <div class="row">
            <div class="col-4">
              <strong>Dirección: </strong>
            </div>
            <div class="col-8">
              {{veterinario.direccion}}
            </div>
          </div>

          <div class="row">
            <div class="col-4">
              <strong>Teléfono: </strong>
            </div>
            <div class="col-8">
              {{veterinario.telefono}}
            </div>
          </div>

          <div class="row">
            <div class="col-4">
              <strong>Fecha de Nacimiento: </strong>
            </div>
            <div class="col-8">
              {{veterinario.fechaNacimiento.split(' ')[0]}}
            </div>
          </div>

          <div class="row">
            <div class="col-4">
              <strong>Tarjeta Profesional: </strong>
            </div>
            <div class="col-8">
              {{veterinario.tarjetaProfesional}}
            </div>
          </div>
        </q-card-section>
      </q-card>

    </div>
    <q-inner-loading :showing="visible">
        <q-spinner-gears size="50px" color="primary" />
    </q-inner-loading>

    <q-card-actions vertical v-show="perfil">
      <q-btn label='Editar' @click='editar' />
    </q-card-actions>

  </div>
</template>

<script lang='ts'>
import { defineComponent, onBeforeMount, Ref, ref } from '@vue/composition-api';
import { Router } from 'src/router';
import { useFindVeterinario } from '../../uses/veterinario/useFindVeterinario';
import { LocalStorage } from 'quasar';
import { CommonUser } from 'types/CommonUser';

export default defineComponent({
  name: 'VeterinarioFind',
  components: {},
  setup() {
    const { find, veterinario } = useFindVeterinario();
    let visible: Ref<boolean> = ref(false);
    let showSimulatedReturnData: Ref<boolean> = ref(false);
    let perfil: Ref<boolean> = ref(false);
    let id: Ref<string> = ref(Router?.currentRoute.params.id as string);

    onBeforeMount(()=>{
      void find(id.value);
      showLoading();
    });

    function showLoading () {
      visible.value = true;
      showSimulatedReturnData.value = false;
      setTimeout(() => {
        visible.value = false
        showSimulatedReturnData.value = true
        console.log(veterinario.value.id);
        if((LocalStorage.getItem('user') as CommonUser).id === veterinario.value.id) {
          perfil.value = true;
        }
        console.log(veterinario);
      }, 3000);
    };

    function editar() {
      Router?.push("/veterinario".concat("/update/").concat(veterinario.value.id));
    }

    return { veterinario, visible, showSimulatedReturnData, id, perfil, editar };
  }
});
</script>
