<template>
  <q-page class='row items-center justify-evenly'>
    <q-card>
      <q-card-section>
        <q-input v-model='loginInfo.email' label='Email' />
        <q-input v-model='loginInfo.pass' filled :type="isPwd ? 'password' : 'text'"
                 hint='Contraseña'>
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class='cursor-pointer'
              @click='isPwd = !isPwd'
            />
          </template>
        </q-input>
      </q-card-section>

      <q-separator />

      <q-card-actions vertical>
        <q-btn label='Iniciar Sesion' @click='login(loginInfo)' />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script lang='ts'>
import { defineComponent, ref } from '@vue/composition-api';
import { LoginInfo } from 'src/types/LoginInfo';
import axios from 'axios';

export default defineComponent({
  name: 'Login',
  components: {},
  setup(_, context) {
    const loginInfo: LoginInfo = ref({
      email: '',
      pass: ''
    });
    const isPwd: boolean = ref(true);

    const login = async (loginInfo: LoginInfo) => {
      try {
        const response = await axios.post('http://localhost:8090/login', JSON.parse(JSON.stringify(loginInfo)));
        context.emit('logged', response.data);
      } catch (e) {
        console.log(e);
      }
    };

    return { loginInfo, isPwd, login };
  }
});
</script>
