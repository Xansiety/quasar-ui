<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
const $q = useQuasar();

// get status
console.log($q.dark.isActive); // true, false

// get configured status
console.log($q.dark.mode); // "auto", true, false

// set status
$q.dark.set(true); // or false or "auto"

// toggle

const drawer = ref(false);
</script>

<template>
  <q-layout view="lHh Lpr lff">
    <q-header elevated class="bg-cyan-8">
      <q-toolbar>
        <q-toolbar-title>Header</q-toolbar-title>
        <q-btn @click="$q.dark.toggle()" label="DarkMode">Dark Mode</q-btn>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="400">
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item
            clickable
            v-ripple
            :to="{ name: 'home' }"
            active-class="my-menu-link"
            exact
          >
            <q-item-section avatar>
              <q-icon name="inbox" />
            </q-item-section>

            <q-item-section> Home </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            :to="{ name: 'about' }"
            active-class="my-menu-link"
            exact
          >
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section> About </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            :to="{ name: 'tipografia' }"
            active-class="my-menu-link"
            exact
          >
            <q-item-section avatar>
              <q-icon name="info" />
            </q-item-section>

            <q-item-section> Tipografía </q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            :to="{ name: 'grid' }"
            active-class="my-menu-link"
            exact
          >
            <q-item-section avatar>
              <q-icon name="info" />
            </q-item-section>

            <q-item-section> GRID </q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            :to="{ name: 'form' }"
            active-class="my-menu-link"
            exact
          >
            <q-item-section avatar>
              <q-icon name="info" />
            </q-item-section>

            <q-item-section> Formularios </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">Razvan Stoenescu</div>
          <div>@rstoenescu</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
.my-menu-link {
  color: white;
  background: #669fc0;
}
</style>
