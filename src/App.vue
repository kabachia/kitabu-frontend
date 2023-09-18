<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Kitabu</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/books" class="nav-link">Books</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Add Book</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/authors" class="nav-link">Authors</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/authors/add" class="nav-link">Add Author</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
