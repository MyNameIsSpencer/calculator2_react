import React, {Component} from 'react';


class Calculator extends Component {
  constructor(props) {
    super()
    this.state = {
      calcResults: 0,
      input1: 0,
      input2: 0
    }
  }

  addStuff(e) {
    e.preventDefault();
    let newNumber = parseInt(this.state.input1) + parseInt(this.state.input2);
    this.setState({
      calcResults: newNumber,
      input1: 0,
      input2: 0
    })
  }

  clearCalc(e) {
    e.preventDefault();
    this.setState({
      calcResults: 0,
      input1: 0,
      input2: 0
    })
  }

  newNumbChange1(e) {
    e.preventDefault();
    this.setState({
      input1: e.target.value
    })
  }

  newNumbChange2(e) {
    e.preventDefault();
    this.setState({
      input2: e.target.value
    })
  }

  render(){

    return(
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <button className="myButt" onClick={(e) => this.addStuff(e)}> ADD IT </button>
           <input type="number" ref="key1" onChange={(e) => this.newNumbChange1(e)} value={this.state.input1}/>
           <span> + </span>
           <input type="number" ref="key2" onChange={(e) => this.newNumbChange2(e)} value={this.state.input2}/>
           <span> = </span>
           <h2 className="results">{this.state.calcResults}</h2>
        </div>

        <style>{` .results {
          border: 7px inset firebrick;
          width: 35%;
          max-width: 400px;
          text-align: center;
          margin-left: auto;
          margin-right: auto;
          font-size: 5em;
        }`}</style>

        <style>{` .myButt {
          display: block;
          border: 7px groove lightgray;
          background-color: whitesmoke;
          width: 20%;
          max-width: 200px;
          text-align: center;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 20px;
          font-size: 2em;
        }`}</style>

        <style>{` .myButt:hover {
          border: 7px groove cadetblue;
          background-color: dodgerblue;
          color: white;
        }`}</style>

      </div>
    )
  }

}

export default Calculator
