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
        <q-btn label='Iniciar Sesion' @click='loginView' />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script lang='ts'>
import { defineComponent, Ref, ref } from '@vue/composition-api';
import { LoginResponse } from 'types/LoginResponse';
import { LocalStorage, Cookies } from 'quasar';
import useLogin from 'uses/producto/useLogin';

export default defineComponent({
  name: 'Login',
  components: {},
  setup(_, context) {
    const isPwd: Ref<boolean> = ref(true);
    const { loginInfo, login } = useLogin();

    const loginView = async () => {
      try {
        let sessionInfo: LoginResponse | null = await login();
        context.emit('logged');
        if (sessionInfo != null) {
          LocalStorage.set('user', sessionInfo.user);
          Cookies.set('token', sessionInfo.token);
        }
        console.log(sessionInfo);
      } catch (e) {
        console.log(e);
      }
    };

    return { loginInfo, isPwd, loginView };
  }
});
</script>
