import React, { Component,useState } from 'react'

export default class profile extends Component {
  constructor(props){
    super(props)
    this.handleName = this.handleName.bind(this)
  }
  handleName(){
    alert(this.props.fullName)
  }
  render() {
    return (
      <div>
      <img className='img' width='150px' src={this.props.src} alt='photo' /> 
      <h1 className='name' onClick={this.handleName}>{this.props.fullName}</h1>
      <h1 className='bio'>{this.props.bio}</h1>
      <h1 className='pro'>{this.props.profession}</h1>
      </div>
    )
  }
}
