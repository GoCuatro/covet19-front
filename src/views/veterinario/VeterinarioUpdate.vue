<template>
  <div>
    <q-card v-show="showSimulatedReturnData">
      <q-card-section>
        <h4>Actualizar Veterinario</h4>
        <q-input v-model='nombres.nombre' label='Nombre' />
        <q-input v-model='nombres.apellido' label='Apellidos' />
        <q-input v-model='vet.cedula' label='Cédula' type="number"/>
        <q-input v-model='vet.direccion' label='Dirección' />
        <q-input v-model='fecha' hint='Fecha de Nacimiento' type="date" />
        <q-input v-model='vet.telefono' label='Teléfono' type="number"/>
        <q-input v-model='vet.tarjetaProfesional' label='Tarjeta Profesional' />
        <q-input v-model='vet.correo' label='Correo' />
        <q-input v-model='contraseña.password1' filled :type="isPwd ? 'password' : 'text'"
                hint='Contraseña'>
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class='cursor-pointer'
              @click='isPwd = !isPwd'
            />
          </template>
        </q-input>
        <q-input v-model='contraseña.password2' filled :type="isPwd2 ? 'password' : 'text'"
                hint='Confirmar Contraseña'>
          <template v-slot:append>
            <q-icon
              :name="isPwd2 ? 'visibility_off' : 'visibility'"
              class='cursor-pointer'
              @click='isPwd2 = !isPwd2'
            />
          </template>
        </q-input>
      </q-card-section>

      <q-separator />

      <q-card-actions vertical>
        <q-btn label='Actualizar' @click='execute' />
      </q-card-actions>
    </q-card>

    <q-inner-loading :showing="visible">
      <q-spinner-gears size="50px" color="primary" />
    </q-inner-loading>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onBeforeMount, Ref, ref } from '@vue/composition-api';
import { Contrasenas } from '../../types/Contrasenas';
import { Nombres } from '../../types/Nombres';
import { useUpdateVeterinario } from '../../uses/veterinario/useUpdateVeterinario';

export default defineComponent({
  name: 'VeterinarioUpdate',
  components: {},
  setup() {
    let visible: Ref<boolean> = ref(false);
    let showSimulatedReturnData: Ref<boolean> = ref(false);
    const isPwd: Ref<boolean> = ref(true);
    const isPwd2: Ref<boolean> = ref(true);
    let fecha: Ref<string> = ref('');
    const { vet, update } = useUpdateVeterinario();

    let nombres: Ref<Nombres> = ref({
      nombre: '',
      apellido: ''
    });

    let contraseña: Ref<Contrasenas> = ref({
      password1: '',
      password2: '',
    });

    onBeforeMount(()=>{
      showLoading();
    });

    function showLoading () {
      visible.value = true;
      showSimulatedReturnData.value = false;
      setTimeout(() => {
        visible.value = false
        showSimulatedReturnData.value = true
        nombres.value.nombre = vet.value.nombre.split(' ')[0];
        if(vet.value.nombre.split(' ').length > 1) {
          nombres.value.apellido = vet.value.nombre.split(' ')[1];
        }
        fecha.value = vet.value.fechaNacimiento.split(' ')[0];
      }, 3000);
    };

    const execute = () => {
      vet.value.nombre = nombres.value.nombre + ' ' + nombres.value.apellido;
      vet.value.fechaNacimiento = fecha.value.concat(' 00:00:00');
      if(contraseña.value.password1 == contraseña.value.password2) {
        if(contraseña.value.password1 != '') {
          vet.value.password = contraseña.value.password1;
        }
        console.log(vet);
        void update();
      } else {
        throw new Error('La contraseña debe ser igual a la de confirmación');
      }
    };
    return { isPwd, isPwd2, vet, nombres, contraseña, execute, showSimulatedReturnData, visible, fecha };
  }
});
</script>
