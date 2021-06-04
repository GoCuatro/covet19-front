<template>
  <div>
    <div class="q-pa-md">

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
          {{veterinario.fechaNacimiento}}
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

    </div>

  </div>
</template>

<script lang='ts'>
import { defineComponent, onBeforeMount, Ref, ref } from '@vue/composition-api';
import { useFindVeterinario } from '../../uses/veterinario/useFindVeterinario';
import useRouter from 'vue-router';

export default defineComponent({
  name: 'VeterinarioFind',
  components: {},
  setup(_, context) {
    const { find, veterinario } = useFindVeterinario();
    //let route = this.$router.params.id;
    let visible: Ref<boolean> = ref(false);
    let showSimulatedReturnData: Ref<boolean> = ref(false);
    let id: Ref<string> = ref("e755f4fd-f3d4-405d-80fe-888da35f9d82");

    onBeforeMount(()=>{
      //id.value = this.$router.params.id;
      void find(id.value);
      //showLoading();
    });

    function showLoading () {
      visible.value = true
      showSimulatedReturnData.value = false
      setTimeout(() => {
        visible.value = false
        showSimulatedReturnData.value = true
      }, 3000);
    };

    return { veterinario, visible, showSimulatedReturnData };
  }
});
</script>
