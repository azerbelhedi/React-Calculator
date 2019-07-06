import React , { Component } from 'react'
import "./App.css"

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            first : 0 ,
            second : 0 ,
            operation : "" ,
            result : 0 ,
            readMode : "first" ,
            screen : ""
        }

        this.addToFirst = this.addToFirst.bind(this)
        this.addToSecond = this.addToSecond.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.switchReadMode = this.switchReadMode.bind(this)
        this.readScreen = this.readScreen.bind(this)
        this.resetScreen = this.resetScreen.bind(this)
    }

    resetScreen(){
        this.setState({
            first : 0 ,
            second : 0 ,
            operation : "" ,
            result : 0 ,
            readMode : "first" ,
            screen : ""
        })
    }

    addToFirst(a){
        this.setState((state) => ({
            first : state.first * 10 + a
        }))
        this.setState((state) => ({screen : state.first}))
    }

    addToSecond(a){
        this.setState((state) => ({
            second : state.second * 10 + a
        }))
        this.setState((state) => ({screen : `${state.first} ${state.operation} ${state.second}`}))
    }

    setOperation(operation){
        if(operation !== "="){
            this.setState((state) => ({
                operation : operation
            }))
            this.switchReadMode()
            this.setState((state) => ({screen : `${state.first} ${state.operation}` }))
        }
        else if (operation === "="){
            let res = 0 
            if(this.state.operation === "+"){
                res = this.state.first + this.state.second
            }
            else if(this.state.operation === "-"){
                res = this.state.first - this.state.second
            }
            else if(this.state.operation === "*"){
                res = res = this.state.first * this.state.second
            }
            else if(this.state.operation === "/"){
                res = res = this.state.first / this.state.second
            }
            this.setState({result : res})  
            this.setState((state) => ({first : state.result , second : 0 , operation : ""}))
            this.setState((state) => ({screen : state.first}))
            this.switchReadMode()
        }
        
        
    }

    switchReadMode(){
        let newMode 
        switch (this.state.readMode) {
            case "first":
                newMode = "second"
                break;
            case "second":
                newMode = "first"
                break;    
            default:
                console.log("undefined mode !")
                break;
        }
        this.setState({readMode : newMode})
    }

    readScreen(value){
        if(this.state.readMode === "first"){
            this.addToFirst(value)
        }
        else if (this.state.readMode === "second"){
            this.addToSecond(value)
        }
        else{
            console.log("reading operation : " , value )
        }
        
    }
    
    render(){
        return(
            <div className = "app">
                <input type="text" disabled value = {this.state.screen} />
                <div className="buttons">
                    <button className = "button" onClick = {(e) => {this.readScreen(parseInt(e.target.innerHTML))}}>1</button>
                    <button className = "button" onClick = {(e) => {this.readScreen(parseInt(e.target.innerHTML))}}>2</button>
                    <button className = "button" onClick = {(e) => {this.readScreen(parseInt(e.target.innerHTML))}}>3</button>
                    <button className = "button" onClick = {(e) => {this.readScreen(parseInt(e.target.innerHTML))}}>4</button>
                    <button className = "button" onClick = {(e) => {this.readScreen(parseInt(e.target.innerHTML))}}>5</button>
                    <button className = "button" onClick = {(e) => {this.readScreen(parseInt(e.target.innerHTML))}}>6</button>
                    <button className = "button" onClick = {(e) => {this.readScreen(parseInt(e.target.innerHTML))}}>7</button>
                    <button className = "button" onClick = {(e) => {this.readScreen(parseInt(e.target.innerHTML))}}>8</button>
                    <button className = "button" onClick = {(e) => {this.readScreen(parseInt(e.target.innerHTML))}}>9</button>
                    <button className = "button" onClick = {(e) => {this.readScreen(parseInt(e.target.innerHTML))}}>0</button>
                    <button className = "button" onClick = {(e) => {this.setOperation(e.target.innerHTML)}}>+</button>
                    <button className = "button" onClick = {(e) => {this.setOperation(e.target.innerHTML)}}>-</button>
                    <button className = "button" onClick = {(e) => {this.setOperation(e.target.innerHTML)}}>*</button>
                    <button className = "button" onClick = {(e) => {this.setOperation(e.target.innerHTML)}}>/</button>
                    <button className = "button" onClick = {(e) => {this.setOperation(e.target.innerHTML)}}>=</button>
                    <button className="button" onClick = {() => {this.resetScreen()}}>Reset</button>
                </div>
            </div>
        )
    }
}

export default App ;