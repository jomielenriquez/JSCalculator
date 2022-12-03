import React, { Component }  from 'react';
import { isThisTypeNode } from "typescript";
import "./styles.css";

var Line2="";
var isRead = true;

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
    this.state={
      Line2:"",
      keyList:["0","1","2","3","4","5","6","7","8","9","ESCAPE","/","X","-","+","=","BACKSPACE","."]
    }
  }
  componentDidMount() {
    const setKey = (event) => {
      this.setState({ keyPressed: event.key.toUpperCase() });
    };
    document.addEventListener("keydown", setKey);
  }

  componentDidUpdate() {
    console.log("Pressed:"+this.state.keyPressed)
    if (this.state.keyList.includes(this.state.keyPressed)) {
      this.handleClick("keydown", this.state.keyPressed);
    }
  }

  handleClick(event){
    if(arguments.length==2) this.addClickEffect("btn_"+arguments[1]);
    else isRead = true;
    
    var value = arguments.length==2? arguments[1]:event.target.value;
    if(isRead) {
      Line2 += value;
      document.getElementById("secondLine").innerHTML=Line2;
    }
    isRead = !isRead;
  }

  addClickEffect(btn){
    document.getElementById(btn).classList.add("Operator_Active");
    setTimeout(function(){
      document.getElementById(btn).classList.remove("Operator_Active");
    },50)
  }
  render(){
    return (
      <div className="Calculator">
        <div className="display">
          <div className="firstLine">
            <h3>Welcome</h3>
          </div>
          <div className="secondLine">
            <h3 id="secondLine">9876543210</h3>
          </div>
        </div>
        <div className="buttonPad">
          <div className="buttonRow">
            <div className="buttonCell">
              <button 
                ref="btn"
                className="longButton AC" 
                onClick={this.handleClick}
                id={"btn_" + this.state.keyList[10]}
                value={this.state.keyList[10]}
              >AC</button>
            </div>
            <div className="buttonCell">
              <button 
                className="Operator"
                onClick={this.handleClick}
                id={"btn_" + this.state.keyList[11]}
                value={this.state.keyList[11]}
              >/</button>
            </div>
            <div className="buttonCell">
              <button 
                className="Operator"
                onClick={this.handleClick}
                id={"btn_" + this.state.keyList[12]}
                value={this.state.keyList[12]}
              >x</button>
            </div>
          </div>
          <div className="buttonRow">
            <div className="buttonCell">
              <button 
                className="Num"
                onClick={this.handleClick}
                id={"btn_" + this.state.keyList[7]}
                value={this.state.keyList[7]}
              >7</button>
            </div>
            <div className="buttonCell">
              <button 
                className="Num"
                onClick={this.handleClick}
                id={"btn_" + this.state.keyList[8]}
                value={this.state.keyList[8]}
              >8</button>
            </div>
            <div className="buttonCell">
              <button 
                className="Num"
                onClick={this.handleClick}
                id={"btn_" + this.state.keyList[9]}
                value={this.state.keyList[9]}
              >9</button>
            </div>
            <div className="buttonCell">
              <button 
                className="Operator"
                onClick={this.handleClick}
                id={"btn_" + this.state.keyList[13]}
                value={this.state.keyList[13]}
              >-</button>
            </div>
          </div>
          <div className="buttonRow">
            <div className="buttonCell">
              <button 
                className="Num"
                onClick={this.handleClick}
                id={"btn_" + this.state.keyList[4]}
                value={this.state.keyList[4]}
              >4</button>
            </div>
            <div className="buttonCell">
              <button 
                className="Num"
                onClick={this.handleClick}
                id={"btn_" + this.state.keyList[5]}
                value={this.state.keyList[5]}
              >5</button>
            </div>
            <div className="buttonCell">
              <button 
                className="Num"
                onClick={this.handleClick}
                id={"btn_" + this.state.keyList[6]}
                value={this.state.keyList[6]}
              >6</button>
            </div>
            <div className="buttonCell">
              <button 
                className="Operator"
                onClick={this.handleClick}
                id={"btn_" + this.state.keyList[14]}
                value={this.state.keyList[14]}
              >+</button>
            </div>
          </div>
          <div className="buttonRow">
            <div className="buttonCell">
              <button 
                className="Num"
                onClick={this.handleClick}
                id={"btn_" + this.state.keyList[1]}
                value={this.state.keyList[1]}
              >1</button>
            </div>
            <div className="buttonCell">
              <button 
                className="Num"
                onClick={this.handleClick}
                id={"btn_" + this.state.keyList[2]}
                value={this.state.keyList[2]}
              >2</button>
            </div>
            <div className="buttonCell">
              <button 
                className="Num"
                onClick={this.handleClick}
                id={"btn_" + this.state.keyList[3]}
                value={this.state.keyList[3]}
              >3</button>
            </div>
            <div className="buttonCell Equal">
              <button 
                className="Operator"
                onClick={this.handleClick}
                id={"btn_" + this.state.keyList[15]}
                value={this.state.keyList[15]}
              >=</button>
            </div>
          </div>
          <div className="buttonRow">
            <div className="buttonCell">
              <button 
                className="longButton Num"
                onClick={this.handleClick}
                id={"btn_" + this.state.keyList[0]}
                value={this.state.keyList[0]}
              >0</button>
            </div>
            <div className="buttonCell">
              <button 
                className="Num"
                onClick={this.handleClick}
                id={"btn_" + this.state.keyList[17]}
                value={this.state.keyList[17]}
              >.</button>
            </div>
            <div className="buttonCell">
              <button 
                className="Del"
                onClick={this.handleClick}
                id={"btn_" + this.state.keyList[16]}
                value={this.state.keyList[16]}
              >DEL</button>
            </div>
          </div>
        </div>
        
        <div className="Creator">Created By Jomiel Enriquez</div>
      </div>
    );
  }
}
