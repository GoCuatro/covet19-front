<template>
  <q-page class='row items-center justify-evenly'>
    <q-card v-if='!registerView'>
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
        <q-btn label='Iniciar Sesion' @click='loginView' />
        <q-btn label='Registrarse' @click='registerUser' />
      </q-card-actions>
    </q-card>
    <register v-else @registered='onRegistered' />
  </q-page>
</template>

<script lang='ts'>
import { defineComponent, Ref, ref } from '@vue/composition-api';
import useLogin from 'uses/useLogin';
import { LoginResponse } from 'types/LoginResponse';
import { Cookies, LocalStorage, Notify } from 'quasar';
import Register from 'views/Register.vue';

export default defineComponent({
  name: 'Login',
  components: {
    Register
  },
  setup(_, context) {
    const isPwd: Ref<boolean> = ref(true);
    const { loginInfo, login } = useLogin();
    const registerView: Ref<boolean> = ref(false);

    const loginView = async () => {
      try {
        let sessionInfo: LoginResponse | null = await login();
        if (sessionInfo != null) {
          LocalStorage.set('user', sessionInfo.user);
          Cookies.set('token', sessionInfo.token);
          context.emit('logged');
        }
      } catch (e) {
        console.log(e);
        if(e instanceof Error){
          Notify.create(e.message);
        }
      }
    };

    function registerUser() {
      registerView.value = true;
    }

    function onRegistered() {
      registerView.value = false;
    }

    return { loginInfo, isPwd, loginView, registerView, registerUser, onRegistered };
  }
});
</script>
