<template>
  <q-table
    class="q-mt-xl"
    title="Productos"
    no-data-label="No hay productos por mostrar"
    :columns="columns"
    :rows="productos"
  ></q-table>
</template>

<script setup>
const props = defineProps({
  productos: {
    type: Array,
    required: true,
  },
});

const columns = [
  {
    name: "producto",
    label: "Producto",
    align: "left",
    field: "producto",
    sortable: true,
  },
  {
    name: "prioridad",
    label: "Prioridad",
    align: "left",
    field: "prioridad",
    sortable: true,
  },
];
</script>
