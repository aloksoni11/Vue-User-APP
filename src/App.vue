<template>
  <div id="app">
    <b-navbar
      type="light"
      variant="light"
      toggleable="lg"
      id="nav"
      class="border mb-4"
    >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <router-link :to="{ name: 'home' }" class="mr-2">Home</router-link> |
        <router-link :to="{ name: 'about' }" class="mx-2">About</router-link> |
        <router-link :to="{ name: 'app-user' }" class="ml-2"
          >User App</router-link
        >
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
body{background-color: #0277ec38 !important;}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
