import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { runInThisContext } from 'vm';
import Players from './Components/Players'



class App extends React.Component {
  constructor(){
    super();
  
    this.state = {
      players:[],


    }

  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => { console.log(res) 
      
        this.setState({  
         players: res.data
        
        });
      
      })
      .catch(err => console.log(err));
    }


    render () {
  return (
    <div className="App">
      <h1>Woman's Word Cup Player Google Search Rank</h1>
      <h2>Rankings</h2>
      <Players players = {this.state.players}/>
    </div>
  );

}
}

export default App;
