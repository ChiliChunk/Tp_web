<template>
<div class="mb-4 flip">
				<div :class="'card thumbnail '  + flipped ">
					<div class="face front">
						<img class="card-img-top"
							 :src="'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/'+src"
							 alt="Card  cap"/>
						<div class="card-body">
							<p class="card-text">{{myname}}</p>
						</div>
					</div>
					<div class="face back">
						<img class="card-img-top" src="back.jpg" alt="Card  cap"/>
						<div class="card-body">
							<p class="card-text">Click me</p>
						</div>
					</div>
				</div>
			</div>
</template>


<script>
export default {
  name: "Card",
  props: {
    src: String,
    myname: String,
    isFlipped: Boolean,
  },
  data: () => ({
    // flipped: this.isFlipped
  }),
  computed: {
    flipped: function() {
      return this.isFlipped ? "flipped" : "notflipped";
    }
  }
};
</script>
<style scoped>
.card-body {
  margin-top: -60px;
  padding: 0;
  color: white;
}
.flip {
  -webkit-perspective: 800px;
  width: 400px;
  height: 200px;
  position: relative;
  margin-bottom: 10px;
}
.flip .card.flipped {
  -webkit-transform: rotatex(-180deg);
}
.flip .card {
  width: 100%;
  height: 100%;
  -webkit-transform-style: preserve-3d;
  -webkit-transition: 0.5s;
}

.flip .card .face {
  width: 100%;
  height: 100%;
  position: absolute;
  -webkit-backface-visibility: hidden;
  z-index: 2;
}
.flip .card .front {
  position: absolute;
  z-index: 1;
  background: white;
  color: black;
  cursor: pointer;
}
.flip .card .back {
  -webkit-transform: rotatex(-180deg);
  background: blue;
  background: black;
  color: white;
  cursor: pointer;
}
</style>
