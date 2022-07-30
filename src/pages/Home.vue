<template>
  <h1>Home Page</h1>

  <HelloWorld msg="Welcome to Vite + Vue3 + TypeScript Template" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default defineComponent({
  name: 'HomePage',

  components: { HelloWorld },

  setup() {}
});
</script>
