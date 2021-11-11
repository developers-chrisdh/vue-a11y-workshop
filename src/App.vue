<template>
  <div id="nav">
    <div class="logo">
      <img alt="Vue logo" src="./assets/logo.png">
      <div class="logo-text">
        <span class="text-1">a11y</span>
        <span>Workshop</span>
      </div>
    </div>
    <router-link to="/">Home</router-link> |
    <router-link to="/intro">Intro</router-link> |
    <router-link to="/voiceover">VoiceOver</router-link> |
    <router-link to="/opdracht-1">Opdracht 1</router-link> |
    <router-link to="/opdracht-1">Opdracht 2</router-link>
  </div>
  <div class="page">
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>
