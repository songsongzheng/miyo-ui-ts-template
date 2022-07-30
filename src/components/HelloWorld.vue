<script setup lang="ts">
import { useStore } from '@/store';

defineProps<{ msg: string }>();

const store = useStore();

function increment() {
  store.dispatch('increment');
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <!-- ... other code ... -->

  <!-- <button type="button" @click="count++">count is: {{ count }}</button> -->
  <button type="button" @click="increment">
    count is: {{ store.state.count }}
  </button>
</template>
