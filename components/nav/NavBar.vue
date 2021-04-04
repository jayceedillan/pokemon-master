<template>
  <nav class="navbar navbar-expand-sm bg-nav">
    <div class="display-3 text-white">Welcome Pokemon Games</div>
  </nav>
</template>

<style lang="css" scoped>
.bg-nav {
  background: linear-gradient(
    -45deg,
    #ee7752,
    #e73c7e,
    #23a6d5,
    #23d5ab,
    #4b535c,
    #0098f0
  );
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
<script lang="ts" src="./NavBar.ts"></script>