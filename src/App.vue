<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from '@/stores/message';
import { storeToRefs } from 'pinia';
const store = useMessageStore();
const { message } = storeToRefs(store);
</script>

<template>
  <SpeedInsights />
  <div id="layout">
    <header>
      <div id="flashMessage" v-if="message">
        <h4>{{ message }}</h4>
      </div>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'passenger' }">Passenger</RouterLink> |
          <RouterLink :to="{ name: 'about' }">About</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>

</template>

<style>
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

}

nav a {
  font-weight: bold;
  color: #2c3e50;

}

nav a.router-link-exact-active {
  color: #42b983;

}

h2 {
  font-size: 20px;
}

@keyframes yellofade{
  from{
    background-color: yellow;
  }
  to{
    background-color: transparent;
  }
}
#flashMessage{
  animation: yellofade 3s ease-in-out;
}
/* NProgress */
#nprogress {
  pointer-events: none;
}
#nprogress .bar {
  background: rgb(232, 6, 6); 
  position: fixed;
  z-index: 1031; 
  top: 0; 
  width: 100%; 
  height: 2px; 
}
#nprogress .peg {
  display: block;
  position: absolute;
  right: 0; 
  width: 100%; 
  height: 100%;
  box-shadow: 0 0 10px #29d, 0 0 5px #29d; 
}
</style>