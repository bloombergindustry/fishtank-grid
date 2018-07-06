<template>
  <section class="container examples">
    <DisplayGridExampleStandard/>
    <hr>
    <div class="row-dgrid grid-background">
      <div class="cell background col-xs12">12</div>
      <div class="cell background col-xs1">1</div>
      <div class="cell background col-xs11">11</div>
      <div class="cell background col-xs2">2</div>
      <div class="cell background col-xs10">10</div>
      <div class="cell background col-xs3">3</div>
      <div class="cell background col-xs9">9</div>
      <div class="cell background col-xs4">4</div>
      <div class="cell background col-xs8">8</div>
      <div class="cell background col-xs5">5</div>
      <div class="cell background col-xs7">7</div>
      <div class="cell background col-xs6">6</div>
      <div class="cell background col-xs6">6</div>
      <div class="cell background col-xs7">7</div>
      <div class="cell background col-xs5">5</div>
      <div class="cell background col-xs8">8</div>
      <div class="cell background col-xs4">4</div>
      <div class="cell background col-xs9">9</div>
      <div class="cell background col-xs3">3</div>
      <div class="cell background col-xs10">10</div>
      <div class="cell background col-xs2">2</div>
      <div class="cell background col-xs11">11</div>
      <div class="cell background col-xs1">1</div>
      <div class="cell background col-xs12 col-md8 col-lg3 col-xl3">Responsive</div>
      <div class="cell background col-xs12 col-md4 col-lg9 col-xl9">Responsive</div>
    </div>
    <hr>
    <div class="row-dgrid col-fixed-12 grid-background">
      <div class="cell background col-3">3</div>
      <div class="cell background col-2">2</div>
      <div class="cell background col-7">7</div>
    </div>
    <hr>

    <div class="row-dgrid col-fixed-12 grid-background grid-background" >
      <div class="cell background col-offset-start-xs2 col-offset-end-xs6 col-offset-start-md4 col-offset-end-md9">7</div>
    </div>
    <div class="row-dgrid col-fixed-12 grid-background grid-background">
      <div class="cell background col-offset-start-xs2 col-offset-end-xs5">2-5</div>
      <div class="cell background col-offset-start-xs9 col-offset-end-xs13">9-13</div>
    </div>
    <hr>

    <div class="row-dgrid col-fixed-12 grid-background">
      <div class="cell background col-3">3</div>
      <div class="cell background col-9" style="background-color:gold">Parent 9 Column Cell
        <div class="row-dgrid col-fixed-6">
          <div class="cell background col-2">2 nested</div>
          <div class="cell background col-4">4 nested</div>
          <div class="cell background col-6">6 nested</div>
        </div>
      </div>
    </div>
    <hr>
  </section>
</template>
<script>
import DisplayGridExampleStandard from './DisplayGridExampleStandard.vue'
export default {
  components:{
    DisplayGridExampleStandard
  }
}
</script>

