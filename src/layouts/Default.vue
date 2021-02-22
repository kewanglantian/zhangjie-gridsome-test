<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/"><img class="logo" src="../logo.svg" alt="" sizes="" srcset=""></g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/journal">Journal</g-link>
        <g-link class="nav__link" to="/hi/">Say Hi!</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}
.logo{
  width: 54px;
}
.layout {
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
