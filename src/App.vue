<template>
  <router-view />
</template>

<script setup>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
const $q = useQuasar();

// calling here; equivalent to when component is created
$q.dark.set("auto");
</script>
