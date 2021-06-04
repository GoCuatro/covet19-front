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
import { defineComponent, Ref, ref } from '@vue/composition-api';
import { LoginInfo } from 'src/types/LoginInfo';
import axios from 'axios';
import { LoginResponse } from '../types/LoginResponse';
import { resolve } from 'dns';

export default defineComponent({
  name: 'Login',
  components: {},
  setup(_, context) {
    const loginInfo: Ref<LoginInfo> = ref({
      email: '',
      pass: ''
    });
    const isPwd: Ref<boolean> = ref(true);

    const login = async (loginInfo: LoginInfo) => {
      try {
        const response = await axios.post('http://localhost:8090/login', JSON.parse(JSON.stringify(loginInfo)));
        let result: LoginResponse = response.data as LoginResponse;
        context.emit('logged', result);
      } catch (e) {
        console.log(e);
      }
    };

    return { loginInfo, isPwd, login };
  }
});
</script>
