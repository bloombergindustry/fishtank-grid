<template>
  <div>
    <h1>
      Fishtank CSS Grid examples
    </h1>
    <h3>12 column grid layouts</h3>
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <label><input type="checkbox" value="grid"> Grid</label>

    <div class="grid grid-layout--5 grid-row-spacing__16px">
      <div class="cell background">1</div>
      <div class="cell background">2</div>
      <div class="cell background">3</div>
      <div class="cell background">4</div>
      <div class="cell background">5</div>
      <div class="cell background">
        <p>Bacon ipsum dolor amet prosciutto sirloin spare ribs, sausage pork loin ham hock boudin cupim tri-tip shankle jowl tenderloin drumstick. Short ribs prosciutto rump salami. Chicken boudin alcatra, kevin tail swine turducken filet mignon strip steak meatloaf pork chop shankle shank flank fatback. Sausage flank pork chop, swine tri-tip salami kielbasa picanha brisket. Jowl ribeye pork belly chicken. Beef meatball bacon capicola.</p>
      </div>
      <div class="cell background">7</div>
      <div class="cell background">8</div>
      <div class="cell background">9</div>
      <div class="cell background">10</div>
      <div class="cell background">11</div>
      <div class="cell background">12</div>
    </div>
<hr>
    <div class="grid grid-layout--12 grid-row-spacing__16px">
      <div class="cell background grid-columns__2">1</div>
      <div class="cell background grid-columns__2">2</div>
      <div class="cell background grid-columns__2">3</div>
      <div class="cell background grid-columns__2">4</div>
      <div class="cell background grid-columns__2">5</div>
      <div class="cell background grid-columns__2">6</div>
    </div>
    <div class="grid grid-layout--12 grid-row-spacing__16px">
      <div class="cell background grid-inset__1">
        Bacon ipsum dolor amet tenderloin drumstick pork chop beef ribs filet mignon turkey. Rump landjaeger beef, pastrami drumstick meatball capicola picanha. Picanha frankfurter spare ribs, strip steak pig bacon venison pork belly ribeye cupim short loin drumstick. Prosciutto landjaeger brisket ground round drumstick turducken filet mignon. Buffalo beef ribs venison, meatball doner jerky kielbasa short loin ham hock brisket cow capicola tongue leberkas. Shoulder tri-tip sirloin shank doner, pig rump frankfurter cow turducken leberkas strip steak. Sausage kevin burgdoggen biltong pork shoulder salami filet mignon, cow meatball hamburger rump brisket venison shank. Beef ribs tri-tip short loin landjaeger chuck, ham hock beef pork belly. Landjaeger strip steak tongue, buffalo chicken turkey short loin filet mignon chuck. Shank sirloin fatback, tri-tip ham landjaeger burgdoggen pork chop ham hock swine meatloaf. Salami cow fatback chuck tail beef pancetta shoulder. Boudin frankfurter turkey filet mignon shank strip steak ground round meatloaf chuck drumstick meatball beef ribs. Ball tip bresaola pig short loin chicken tenderloin ground round. Andouille sausage pork capicola picanha prosciutto t-bone. Meatloaf hamburger bresaola pork belly sirloin swine. Capicola flank filet mignon, jerky landjaeger corned beef salami beef ribs. Tenderloin short ribs prosciutto, fatback ham cow ham hock flank meatloaf meatball short loin drumstick capicola. Alcatra jowl porchetta swine meatloaf. Chuck flank kielbasa sausage bacon ham meatball biltong meatloaf jerky picanha tri-tip venison. Tenderloin bacon kielbasa ham turducken tongue brisket pork belly short ribs ball tip shoulder. Prosciutto picanha venison, pork belly boudin short ribs shank leberkas ham hock pig. Kielbasa shoulder ham hock swine short loin bacon jowl fatback capicola biltong boudin alcatra shankle corned beef. Ball tip corned beef frankfurter venison shoulder bacon drumstick burgdoggen cupim hamburger leberkas andouille kielbasa. Leberkas venison fatback pork short loin, rump shankle.
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../styles/grid.scss'; 
</style>
