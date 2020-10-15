<template lang="pug">
  .container
    router-view <!-- куда вставлять компоненты, определенные во router.js -->
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica Neue", Helvetica, sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.42;
    -webkit-font-smoothing: antialiased;
    background: #f5f5f5;
  }

  ul, body {
    margin: 0;
    padding: 0;

    li {
      list-style: none;
    }
  }

  .container {
    width: 600px;
    margin: 0 auto;
  }
</style>

