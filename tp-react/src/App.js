import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import champions from './champions.js'
import Card from './components/Card'

class App extends Component {

  async componentDidMount(){
    this.setState({tabHero : []})
    await this.getTabHero()
    console.log(this.state)
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      let w = Math.random() * (i + 1);
      let j = Math.floor(w);
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a
  }

  getTabHero() {
    let i = 0
    let temp = []
    for (i = 0 ; i < 6 ; i++){ // on selectionne 6 champions au hasard
     let rand = Math.floor((Math.random() * Object.keys(champions.data).length))
      let alias = Object.keys(champions.data)[rand]
      let currentlength = temp.length
      temp.push({name : alias , src : alias+"_0.jpg" , isFlipped : true, isFlippable : true , index: null})
      temp.push({name : alias , src : alias+"_1.jpg" , isFlipped : true, isFlippable : true , index: null})
    }
    this.shuffle(temp)
    temp.map((item, index) => {
      item.index = index
    })
    this.setState({tabHero : temp})

  }

  handleFlip(index){
    if((this.state.flippedCard || []).length >= 2){//deux carte retournee
      console.log(this.state.flippedCard)
      if (this.state.flippedCard[0].name == this.state.flippedCard[1].name){ // ce sont les meme
        this.state.tabHero[this.state.flippedCard[0].index].isFlippable = false // on fait en sorte qu'elle ne peuvent plus etre retournee
        this.state.tabHero[this.state.flippedCard[1].index].isFlippable = false
      }
      else{
        console.log('ce ne sont pas les meme')
        this.state.tabHero[this.state.flippedCard[0].index].isFlipped = true
        this.state.tabHero[this.state.flippedCard[1].index].isFlipped = true
      }

      this.state.flippedCard.splice(0, this.state.flippedCard.length)
    }
    let temp = this.state.flippedCard || []
    if (temp.includes(this.state.tabHero[index]) ==false){
      temp.push (this.state.tabHero[index])
    }
    this.state.tabHero[index].isFlipped = false
    this.setState({flippedCard : temp})
  }

  render() {
    const cards= ((this.state && this.state.tabHero) || []).map((item, index) => {
      return(
        <Card
        name={item.name}
        src = {item.src}
        handleClick={this.handleFlip.bind(this)}
        flipped={item.isFlipped}
        index={index}
        key={item+index}/>
      )
    });
    return (
      <div>
        <h1>Memo TEST</h1>
        <div className="card-columns col">
          {cards}
        </div>
      </div>
    )
  }
}

export default App;
