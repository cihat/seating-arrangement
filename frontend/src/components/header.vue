<script>
export default {
  name: 'Header',
}
</script>

<template lang="pug">
header.header
  .logo
    img(src='../assets/firat-logo.png')
  nav
    .nav-wrapper
      router-link(to="/") Libraries
      router-link(to="/about") Seat Selection
    .auth-wrapper
      router-link(to="/login") Login
      router-link(to="/register") Register
</template>

<style lang="scss" scoped>
.header {
  height: 120px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  background-color: rgb(121, 10, 0);
  padding-left: 20px;
  padding-right: 20px;
  padding: auto;
  box-sizing: border-box;

  .logo {
    margin: auto;
    display: flex;
    justify-content: center;
    flex-grow: 1;
    img {
      max-width: 100px;
    }
  }

  nav {
    flex-grow: 9;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .nav-wrapper {
      & > :first-child {
        margin-right: 16px;
      }
    }

    .auth-wrapper {
      & > :first-child {
        margin-right: 16px;
      }
    }

    a {
      color: white;
      font-size: 24px;
    }
  }

  .router-link-active {
    text-decoration: underline;
    color: rgb(195, 188, 188);
  }
}
</style>
