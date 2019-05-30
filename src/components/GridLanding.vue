<template>
  <section>
    <div class="container ">
      <div class="row-flex">  
        <div class="col-xs12">
          <h1>
            Fishtank CSS Grid examples
          </h1>
          <h3>12 column grid layouts</h3>
          <label><input type="radio" value="dgrid" v-model="tabIs"> Display Grid</label>
          <label><input type="radio" value="flex" v-model="tabIs"> Display Flex</label>
        </div>
      </div>
    </div>

    <transition name="fade">
      <template v-if="tabIs==='dgrid'">
        <DisplayGridExample/>
      </template>
      <template v-else>
        <DisplayFlexExample/>
      </template>
    </transition>
    
  </section>
</template>

<script>
import DisplayGridExample from './DisplayGridExamples.vue'
import DisplayFlexExample from './DisplayFlexExamples.vue'

export default {
  name: 'TwelveColumnGrid',
  components:{
    DisplayGridExample,
    DisplayFlexExample
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      innerHTML:"",
      tabIs:"flex"
    }
  },
  mounted(){
    this.innerHTML = this.innerHTML;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

@import '../styles/index.scss'; 
@import '../styles/index-dgrid.scss'; 

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.examples {
  .ft-row-flex{
    > *   > *{
      // background: darkblue;
      color: white;
      min-height: 32px;
    }
     > *:nth-child(odd) >* {
      background: lightblue;
    }
    > *:nth-child(even) >* {
      background: orange;
    }
    margin-top: 8px;
    margin-bottom: 8px;
  }
  .ft-row-dgrid{
    & > *{
      background: darkblue;
      color: white;
      min-height: 32px;
    }
  }
}
</style>
