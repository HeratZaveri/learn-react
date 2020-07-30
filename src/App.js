import React,{Component} from 'react';
//eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
//import Greet from './components/Greet'
//import SignIn from './components/SignIn'
//import Counter from './components/Counter'
//import HomePage from './components/HomePage'
import Login from './components/Login';

class App extends Component {
  render(){
    return (
      <div className="App">
        {/*<Greet />*/}
        {/*<SignIn />*/}
        {/*<Counter />*/}
        {/*<HomePage />*/}
        <Login />
      </div>
    );
  }
}

export default App;
