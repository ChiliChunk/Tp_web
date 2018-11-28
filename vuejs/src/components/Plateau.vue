<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>TEST</h1>
    <div class="card-columns col">
      <Card v-for= "(item,index) in tabHero" :src="item.src" :myname="item.name" :isFlipped="item.isFlipped" :key="index" v-on:click.native="retourner(index)"/>
    </div>
    <footer class = "text-secondary">
      test footer


    </footer>
  </div>
  </template>

  <script>
  import Card from "@/components/Card.vue"
  import champions from '../../public/champions.js'
  export default {
    name: "Plateau",
    components:{
      Card
    },
    data : function() {
      return({
        tabHero : [],
        cardFlipped : []
      })
    },
    props: {
      msg: String,
    },
    created:function(){
      this.getTabHero()
    },
    methods: {
      getTabHero: function() {
        let i = 0
        for (i = 0 ; i < 6 ; i++){ // on selectionne 6 champions au hasard
         let rand = Math.floor((Math.random() * Object.keys(champions.data).length))
          let alias = Object.keys(champions.data)[rand]
          this.tabHero.push({name : alias , src : alias+"_0.jpg" , isFlipped : true, isFlippable : true})
          this.tabHero.push({name : alias , src : alias+"_1.jpg" , isFlipped : true, isFlippable : true})
        }
        this.tabHero = this.shuffle(this.tabHero)
      },
      shuffle : function(a) {
        for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
      },
      retourner : function (index){
        if(this.cardFlipped.length === 2){
          console.log(this.cardFlipped)
          if (this.cardFlipped[0] === this.cardFlipped[1]){
            //ce sont les meme
          }
          else{
            this.cardFlipped[0].isFlippable = true
            this.cardFlipped[1].isFlippable = true
          }
          this.cardFlipped = []
          this.tabHero.map( (item , index) => {
            if (item.isFlipped ===   false && item.isFlippable === true){
              item.isFlipped = true
            }
          })
        }
        if (this.tabHero[index].isFlippable){
          this.tabHero[index].isFlipped = !this.tabHero[index].isFlipped
          this.tabHero[index].isFlippable = false
          this.cardFlipped.push(this.tabHero[index])
        }

      }
    }
  };
  </script>
