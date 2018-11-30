import React, { Component } from 'react'

class Card extends Component {
  render(){
    return(
      <div className="mb-4 flip" onClick={() => this.props.handleClick(this.props.index)}>
        <div className={  + this.props.flipped ? " card thumbnail flipped" : " card thumbnail notflipped" }>
          <div className="face front">
            <img className="card-img-top" src={"http://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+this.props.src} alt="Card  cap"/>
            <div className="card-body">
              <p className="card-text">{this.props.name}</p>
            </div>
          </div>
          <div className="face back">
            <img className="card-img-top" src="back.jpg" alt="Card  cap"/>
              <div className="card-body">
                <p className="card-text">Click me</p>
              </div>
          </div>
      </div>
      </div>
    )
  }
}

export default Card
