<template>
  <q-layout view='hHh Lpr lFf'>
    <template v-if='logged'>
      <q-header elevated>
        <q-toolbar>
          <q-btn
            flat
            dense
            round
            icon='menu'
            aria-label='Menu'
            @click='leftDrawerOpen = !leftDrawerOpen'
          />

          <q-toolbar-title>
            CoVet - 19
          </q-toolbar-title>

          <q-btn label='Cerrar Sesion' @click='logOut' />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model='leftDrawerOpen'
        show-if-above
        bordered
        content-class='bg-grey-1'
      >
        <q-list>
          <q-item-label
            header
            class='text-grey-8'
          >
            Modulos
          </q-item-label>
          <EssentialLink
            v-for='link in essentialLinks'
            :key='link.title'
            v-bind='link'
          />
        </q-list>
      </q-drawer>
      <q-page-container>
        <router-view />
      </q-page-container>
    </template>
    <template v-else>
      <q-page-container>
        <login @logged='onLogged' />
      </q-page-container>
    </template>
  </q-layout>
</template>

<script lang='ts'>
import EssentialLink from 'components/EssentialLink.vue';

const linksData = [
  {
    title: 'Admin',
    caption: '',
    icon: 'admin_panel_settings',
    link: '/admin'
  },
  {
    title: 'Veterinario',
    caption: '',
    icon: 'local_hospital',
    link: '/veterinario'
  },
  {
    title: 'Productos',
    caption: '',
    icon: 'code',
    link: '/producto'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

import { defineComponent, onBeforeMount, ref } from '@vue/composition-api';
import Login from 'src/views/Login.vue';
import { Cookies } from 'quasar';
import useLogin from 'uses/useLogin';
import { LocalStorage } from 'quasar';

export default defineComponent({
  name: 'MainLayout',
  components: { Login, EssentialLink },
  setup() {

    const leftDrawerOpen = ref(false);
    const essentialLinks = ref(linksData);
    const { logged } = useLogin();

    onBeforeMount(() => {
      let token = Cookies.get('token');
      if (token != null) {
        logged.value = true;
      }
    });

    function onLogged() {
      logged.value = true;
    }

    function logOut() {
      Cookies.remove('token');
      LocalStorage.remove('user');
      logged.value = false;
    }

    return { leftDrawerOpen, essentialLinks, logged, onLogged, logOut };
  }
});
</script>
