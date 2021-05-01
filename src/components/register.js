import React from 'react';
import {FBContext} from '../providers/firebaseauthprovider.js';

export class Register extends React.Component{
    static contextType = FBContext;

    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            username:"",
            password:"",
            name:""
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
            name: this.state.name
        }
        console.log(this.context)
        var res = await this.context.register(user.name, user.username, user.password)
        console.log(res)
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
                    <label>Name: </label>
                    <input 
                        type="text" 
                        required
                        placeholder="Enter name"
                        onChange={
                            (e) => this.setState({
                                name: e.target.value
                            })
                        } />
                    <br />
                    <input type="submit" />
                </form> 
            </div>
        )
    }
}




