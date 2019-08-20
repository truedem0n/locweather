import React,{Component} from 'react';
import './App.css';
import Header from "./components/header.js"
import Card from "./components/Card"

class App extends Component{
  render(){
    return (
    <div className="App ma0 pa0 border-box">
    <Header/>
    <Card city={`st johns`}/>
    </div>);
  }
}

export default App;
