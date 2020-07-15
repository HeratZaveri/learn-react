import React, { Component } from 'react'
import './myStyles.css'
import {Button} from '@material-ui/core'

class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: ''
        }

        this.handleInput = this.handleInput.bind(this)
        this.handleSignIn = this.handleSignIn.bind(this)
    }
    handleInput = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSignIn = (event) => {
        alert(`${this.state.username} ${this.state.password}`)
        event.preventDefault()
    }
    render() {
        return (
            <div className='container'>
                <form className='submit-box'>
                    <label htmlFor='user'>Username</label><br></br>
                    <input 
                        type='text' 
                        value={this.state.username}
                        name='username'
                        onChange={this.handleInput}
                    />
                    <br></br><br></br>
                    <label htmlFor='password'>Password</label><br></br>
                    <input 
                        type='text' 
                        value={this.state.password}
                        name='password'
                        onChange={this.handleInput}
                    /><br></br><br></br>
                    <Button variant='contained' size='medium' onClick={this.handleSignIn}>Sign In</Button>
                </form>
            </div>
        )
    }
}

export default Login

