<template>
  <q-card>
    <q-card-section>
      <q-input v-model='nombres.nombre' label='Nombre' />
      <q-input v-model='nombres.apellido' label='Apellidos' />
      <q-input v-model='vet.cedula' label='Cédula' type="number"/>
      <q-input v-model='vet.direccion' label='Dirección' />
      <q-input v-model='vet.fechaNacimiento' hint='Fecha de Nacimiento' type="date" />
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
      <q-btn label='Crear' @click='algoPasa' />
    </q-card-actions>
  </q-card>
</template>

<script lang='ts'>
import { defineComponent, Ref, ref } from '@vue/composition-api';
import { Contrasenas } from '../../types/Contrasenas';
import { Nombres } from '../../types/Nombres';
import { useCreateVeterinario } from '../../uses/veterinario/useCreateVeterinario';

export default defineComponent({
  name: 'VeterinarioCreate',
  components: {},
  setup() {
    const isPwd: Ref<boolean> = ref(true);
    const isPwd2: Ref<boolean> = ref(true);
    const { vet, create } = useCreateVeterinario();

    let nombres: Ref<Nombres> = ref({
      nombre: '',
      apellido: ''
    });

    let contraseña: Ref<Contrasenas> = ref({
      password1: '',
      password2: ''
    });

    const algoPasa = () => {
      vet.value.nombre = nombres.value.nombre + ' ' + nombres.value.apellido;

      if(contraseña.value.password1 == contraseña.value.password2) {
        vet.value.password = contraseña.value.password1;
        console.log(vet);
        void create();
      } else {
        throw new Error('La contraseña debe ser igual a la de confirmación');
      }
    };
    return { isPwd, isPwd2, vet, nombres, contraseña, algoPasa };
  }
});
</script>
