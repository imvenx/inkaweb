<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated style="background-color:brown">
      <q-toolbar>
        <!-- <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" /> -->

        <img decoding="async" src="../assets/dragon.svg" style="width:7em; margin: -1em">
        <q-toolbar-title>
          csSvg
        </q-toolbar-title>
        <!-- <a href="https://github.com/imvenx/cssvgweb/raw/master/public/cssvg-0.0.1.AppImage"> -->
        <a href="/cssvgweb/cssvg-0.0.1.AppImage">
          Download for linux
        </a>
        <!-- <a href="https://github.com/imvenx/cssvgweb/raw/master/public/cssvg%20Setup%200.0.1.exe"> -->
        <a href="/cssvgweb/cssvg%20Setup%200.0.1.exe" disabled>
          Download for Windows
        </a>
        <a href="https://github.com/imvenx/cssvg" target="_blank" rel="noopener noreferrer">Repo</a>
        <a href="https://discord.gg/F8Wzc5SPjq" target="_blank" rel="noopener noreferrer">Discord</a>
        <a href="https://www.youtube.com/channel/UCh30W9QnXS-XZwNuk-twnyg" target="_blank"
          rel="noopener noreferrer">Youtube</a>
      </q-toolbar>
    </q-header>
    <!-- 
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          Essential Links
        </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';


// const leftDrawerOpen = ref(false)

// function toggleLeftDrawer() {
//   leftDrawerOpen.value = !leftDrawerOpen.value
// }
</script>

<style scoped>
a {
  color: white;
  font-weight: 1000;
  margin: 0 1em;
  text-decoration: none;
}
</style>
