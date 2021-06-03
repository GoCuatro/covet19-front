<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <q-btn-toggle
        v-model="secondModel"
        spread
        class="my-custom-toggle"
        no-caps
        rounded
        unelevated
        toggle-color="primary"
        color="white"
        text-color="primary"
        :options="[
          {label: 'Productos', value: 'one'},
          {label: 'Carrito', value: 'two'},
          {label: 'Mascotas', value: 'three'}
        ]"
      />
    </div>
  </div>
</template>

<script lang = 'ts'>
export default {
  data () {
    return {
      model: 'one',
      secondModel: 'one'
    }
  }
}
</script>

<style lang="sass" scoped>
.my-custom-toggle
  border: 1px solid #027be3
</style>
