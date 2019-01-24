<template>
  <div id="app">
    <root />
  </div>
</template>
<script>
import Root from './Root.vue'
export default {
  components: { Root }
}
</script>

<style lang="scss">
html, body, #app {
  height: 100%;
  width: 100%;
  display: flex;
  user-select: none;
}

.dib { display: inline-block; }
.df { display: flex; }
.fc { flex-direction: column; }
.fd { flex-direction: column-reverse; }
.fr { flex-direction: row-reverse; }
.fg { flex-grow: 1; }
.fb { flex-basis: 0;}
.fac {
  align-items: center;
}
.point {
  cursor: pointer;

}
.wh-30{
  height: 30px;
  width: 30px;
}
.shb {
  filter: drop-shadow(0px 10px 5px rgba(0,0,0,0.5));
}
</style>
