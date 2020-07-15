import React, {Component} from 'react'
import './myStyles.css'

class SignIn extends Component{

    render(){
        return(
          <div> 
              <h1>Sign In</h1>
              <this.LogIn />
          </div>          
        );

    }

    LogIn(){
      return(
       <div className='submit'>
            <label htmlFor='user'>Username</label><br></br>
            <input type='text' id='username' name='username'></input><br></br><br></br>
            <label htmlFor='password'>Password</label><br></br>
            <input type='text' id='pass' name='password'></input>
       </div>
      );
    }
}

export {SignIn}