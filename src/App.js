import React, { Component }  from 'react';
import { isThisTypeNode } from "typescript";
import "./styles.css";

var Line1="", Line2="";
var isRead = true, isEqual = false;

//function to save data to history when '=' is pressed
function SaveToHistory(par_argument, par_output){
  var history = JSON.parse(localStorage.getItem("history"));
  if(history==null){
    localStorage.setItem("history",JSON.stringify({0:{argument:String(par_argument),output:String(par_output)}}))
  }
  else{
    var par_id = Object.keys(history).length
    Object.assign(history,{[par_id]:{argument:String(par_argument),output:String(par_output)}});
    localStorage.setItem("history",JSON.stringify(history));
  }
  console.log("Saved to history");
}
console.log("History: " + history);
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
    this.state={
      keyList:["0","1","2","3","4","5","6","7","8","9","ESCAPE","/","*","-","+","=","BACKSPACE","."]
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
      if(value=="BACKSPACE") {
        Line2 = Line2.substring(0,Line2.length-1);
        Line1 = Line1.substring(0,Line1.length-1);
      }
      else if(value=="ESCAPE") {
        Line2 = "";
        Line1 = "";
      }
      else if(["+","-","/","*"].includes(value)){
        if(!isEqual){
          Line2 = "";
          Line1 += value;
        }
        else{
          Line1=Line2+value;
          Line2="";
          isEqual=false;
        }
      }
      else if(value=="="){
        Line2 = String(eval(Line1));
        Line1 += value;
        isEqual = true;

        SaveToHistory(Line1, Line2)
      }
      else {
        Line2 += value;
        Line1 += value;
      }
      document.getElementById("secondLine").innerHTML=Line2;
      document.getElementById("firstLine").innerHTML=Line1;
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
          <i class="fa fa-solid fa-clock-rotate-left"></i>
          <div className="firstLine">
            <h3 id="firstLine">Welcome</h3>
          </div>
          <div className="secondLine">
            <h3 id="secondLine"></h3>
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
