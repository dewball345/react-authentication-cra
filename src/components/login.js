import React from 'react';
import {FBContext} from '../providers/firebaseauthprovider.js';

export class Login extends React.Component{
    static contextType = FBContext;

    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            username:"",
            password:"",
        }
    }

    componentDidMount() {
        console.log("started here")
        console.log("CONTEXT:")
        console.log(this.context)
    }
    async onSubmit(e){
        e.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password,
        }
        console.log(this.context)
        var res = await this.context.login(user.username, user.password)
        console.log(res)
        console.clear();
        window.location = '/';

    }

    
    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>Username: </label>
                    <input 
                        type="text" 
                        required
                        placeholder="Enter username"
                        onChange={
                            (e) => this.setState({
                                username: e.target.value
                            })
                        } />
                    
                    <br />
                    <label>Password: </label>
                    <input 
                        type="text" 
                        required
                        placeholder="Enter password"
                        onChange={
                            (e) => this.setState({
                                password: e.target.value
                            })
                        } />
                    <br />
                    <input type="submit" />
                </form> 
            </div>
        )
    }
}




