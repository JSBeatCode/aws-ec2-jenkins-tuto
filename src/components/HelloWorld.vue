<template>
  <div>
    <ul>
      <li v-bind:class="isActive[0]">Item 1</li>
      <li :class="isActive[1]">Item 2</li>
      <li :class="isActive[2]">Item 3</li>
    </ul>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';

const isActive = ref(['inactive', 'active', 'inactive', 'inactive']);

</script>

<style>
.active {
  color: green;
}

.inactive {
  color: red;
}
</style>
