<template>
  <section class="">
    <div class="container ">
      <div class="row-flex">
        <div class="col-xs12">
          <div class="">Display Flex</div>
        </div>
      </div>
    </div>
    <DisplayFlexExampleStandard/>
    <DisplayFlexExampleOffset/>
    <DisplayFlexExampleResponsive/>
    <DisplayFlexExampleFluid/>
  </section>
</template>
<script>
import DisplayFlexExampleStandard from './DisplayFlexExampleStandard.vue';
import DisplayFlexExampleOffset from './DisplayFlexExampleOffset.vue';
import DisplayFlexExampleResponsive from './DisplayFlexExampleResponsive.vue';
import DisplayFlexExampleFluid from './DisplayFlexExampleFluid.vue';
export default {
  components:{
    DisplayFlexExampleStandard,
    DisplayFlexExampleOffset,
    DisplayFlexExampleResponsive,
    DisplayFlexExampleFluid
  }
}
</script>

<style lang="scss">
  .col-xs1, .col-xs2{

  }
</style>

