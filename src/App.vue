<template>
  <router-view></router-view>
</template>

<script>



export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">


[fxLayout="row wrap"] {
  flex-flow: row wrap;
}

[fxLayout="row"] {
  flex-direction: row;
// box-sizing: border-box;
  display: flex;
}
[fxLayout="column"] {
  flex-direction: column;
  // box-sizing: border-box;
  display: flex;
}

[fxLayoutAlign="center center"] {
  display: flex;
  place-content: center;
  align-items: center;
}

[fxLayoutAlign="start center"] {
  display: flex;
  place-content: center flex-start;
  align-items: center;
}

[fxLayoutAlign="start start"] {
  display: flex;
  place-content: flex-start flex-start;
  align-items: center;
}



[fxLayoutAlign="end center"] {
  display: flex;
  place-content: center flex-end;
  align-items: center;
}


[fxFlex="none"] {
  flex: none;
}
[fxFlexFill] {
  height: 100%;
  width: 100%;
}


@mixin flex {
  @for $i from 0 through 100 {
    [fxLayout="column"] > [fxFlex="#{$i}"] {
      flex: 1 1 100% !important;
    box-sizing: border-box;
      max-height: #{$i} + '%' !important;
    }

    [fxLayout="row"] > [fxFlex="#{$i}"] {
      flex: 1 1 100% !important;
     box-sizing: border-box;
      max-width: #{$i} + '%' !important;
    }
  

    [fxLayout="column"] > [Gap="#{$i}"]{
      margin-bottom:  #{$i} + 'px';
    }

    [fxLayout="row"] > [Gap="#{$i}"]{
      margin-right:  #{$i} + 'px';
    }



  }
  [fxLayout="row"] > [fxFlex] {
      //flex: 1 1 1e-9px !important;
     box-sizing: border-box;
      flex-grow: 1 ;
    }
    [fxLayout="column"] > [fxFlex] {
      //flex: 1 1 1e-9px !important;
     box-sizing: border-box;
      flex-grow: 1 ;

    }
}
@include flex;

*{
  padding: 0;
  margin: 0;
  font-family: sans-serif;
  letter-spacing: 6px;
}

.bg{
  background: -webkit-linear-gradient(left, #005c53, #9fc131);
  background: linear-gradient(to right, #005c53, #9fc131);
}




</style>
