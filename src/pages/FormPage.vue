<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
import tableComponent from "../components/TableComponent.vue";
const $q = useQuasar();

const myForm = ref(null);
const formulario = ref({
  producto: "",
  seleccion: "",
  terminos: false,
});

const opciones = ["Máxima", "Moderada", "Minima"];

const isDisable = ref(false);

const productos = ref([]);

const ProcesarFormulario = () => {
  myForm.value.validate().then((success) => {
    if (success) {
      // yay, models are correct

      if (!formulario.value.terminos) {
        $q.notify({
          type: "negative",
          message: "Por favor acepta los términos",
          position: "top",
          actions: [{ icon: "close", color: "white" }],
        });
        return;
      }
      console.log("Validacion completa");
      $q.notify({
        type: "positive",
        message: "Enviado",
        position: "center",
        actions: [{ icon: "close", color: "white" }],
      });

      //procesar el formulario
      productos.value = [
        ...productos.value,
        {
          producto: formulario.value.producto,
          prioridad: formulario.value.seleccion,
        },
      ];

      reset();
    } else {
      console.log("Valor invalido");
      // oh no, user has filled in
      // at least one invalid value
    }
  });
};

// to reset validations:
function reset() {
  formulario.value = {
    producto: "",
    seleccion: "",
    terminos: false,
  };
  myForm.value.resetValidation();
}

const DesactivarBotones = () => {
  console.log("Inhabilitar los botones");
  isDisable.value = true;
};
const HabilitarBotones = () => {
  console.log("Habilitar los botones");
  isDisable.value = false;
};
</script>

<template>
  <q-page padding>
    <h4>Agregar productos</h4>
    <!-- @validation-error.self="DesactivarBotones"
      @validation-success="HabilitarBotones" -->
    <q-form
      ref="myForm"
      class="row q-col-gutter-md"
      error
      @submit.prevent="ProcesarFormulario"
      @reset="reset"
    >
      <div class="col-12 col-sm-6">
        <q-input
          label="Producto"
          v-model="formulario.producto"
          lazy-rules
          :rules="[
            (val) => val.length >= 3 || 'Please use minimun 3 characters',
          ]"
        ></q-input>
      </div>

      <div class="col-12 col-sm-6">
        <q-toggle
          v-model="formulario.terminos"
          label="I accept the license and terms"
        />
      </div>

      <div class="col-12 col-sm-6">
        <q-select
          label="Prioridad"
          lazy-rules
          v-model="formulario.seleccion"
          :options="opciones"
        ></q-select>
      </div>
      <div class="col-12">
        <q-btn
          label="Enviar"
          rounded
          color="secondary"
          type="submit"
          :disable="isDisable"
        ></q-btn>
        <q-btn
          label="Reset"
          outline
          color="primary"
          class="q-ml-sm"
          :disable="isDisable"
          type="reset"
        ></q-btn>
      </div>
    </q-form>

    <tableComponent :productos="productos" />
  </q-page>
</template>
