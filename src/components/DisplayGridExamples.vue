<template>
  <div>
    <section class="ft-container examples">
      <DisplayGridExampleStandard/>
      <hr>
      <div class="ft-row-dgrid grid-background">
        <div class="cell background ft-col-xs12">12</div>
        <div class="cell background ft-col-xs1">1</div>
        <div class="cell background ft-col-xs11">11</div>
        <div class="cell background ft-col-xs2">2</div>
        <div class="cell background ft-col-xs10">10</div>
        <div class="cell background ft-col-xs3">3</div>
        <div class="cell background ft-col-xs9">9</div>
        <div class="cell background ft-col-xs4">4</div>
        <div class="cell background ft-col-xs8">8</div>
        <div class="cell background ft-col-xs5">5</div>
        <div class="cell background ft-col-xs7">7</div>
        <div class="cell background ft-col-xs6">6</div>
        <div class="cell background ft-col-xs6">6</div>
        <div class="cell background ft-col-xs7">7</div>
        <div class="cell background ft-col-xs5">5</div>
        <div class="cell background ft-col-xs8">8</div>
        <div class="cell background ft-col-xs4">4</div>
        <div class="cell background ft-col-xs9">9</div>
        <div class="cell background ft-col-xs3">3</div>
        <div class="cell background ft-col-xs10">10</div>
        <div class="cell background ft-col-xs2">2</div>
        <div class="cell background ft-col-xs11">11</div>
        <div class="cell background ft-col-xs1">1</div>
        <div class="cell background ft-col-xs12 ft-col-md8 ft-col-lg3 ft-col-xl3">Responsive</div>
        <div class="cell background ft-col-xs12 ft-col-md4 ft-col-lg9 ft-col-xl9">Responsive</div>
      </div>
      <hr>
      <div class="ft-row-dgrid ft-col-fixed-12 grid-background">
        <div class="cell background col-3">3</div>
        <div class="cell background col-2">2</div>
        <div class="cell background col-7">7</div>
      </div>
      <hr>

      <div class="ft-row-dgrid ft-col-fixed-12 grid-background grid-background" >
        <div class="cell background ft-col-offset-start-xs2 ft-col-offset-end-xs6 ft-col-offset-start-md4 ft-col-offset-end-md9">7</div>
      </div>
      <div class="ft-row-dgrid ft-col-fixed-12 grid-background grid-background">
        <div class="cell background ft-col-offset-start-xs2 ft-col-offset-end-xs5">2-5</div>
        <div class="cell background ft-col-offset-start-xs9 ft-col-offset-end-xs13">9-13</div>
      </div>
      <hr>
    </section>
    <section class="ft-container ft-fluid examples">
      <div class="ft-row-dgrid ft-col-fixed-12 grid-background">
        <div class="cell background ft-col-3">3</div>
        <div class="cell background ft-col-9" style="background-color:gold">Parent 9 Column Cell
          <div class="ft-row-dgrid ft-col-fixed-6">
            <div class="cell background ft-col-2">2 nested</div>
            <div class="cell background ft-col-4">4 nested</div>
            <div class="cell background ft-col-6">6 nested</div>
          </div>
        </div>
      </div>
      <hr>
    </section>
  </div>
</template>
<script>
import DisplayGridExampleStandard from './DisplayGridExampleStandard.vue'
export default {
  components:{
    DisplayGridExampleStandard
  }
}
</script>

