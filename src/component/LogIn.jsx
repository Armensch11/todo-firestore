import React from "react";
import { auth, db } from "../firebase";

class LogIn extends React.Component{
    state= {
        email:'',
        password:'',
        nick:''
    }
    onChange=(event, field)=>{
        this.setState({
            [field]:event.target.value,
        })

    }

    onLoginBtnClick=()=>{
        const {email, password}=this.state;
        auth.signInWithEmailAndPassword(email, password).catch(function(error) {
           alert(error.message)
          });
    }
    onSignUpClick=()=>{
        const {email, password, nick}=this.state;
        auth.createUserWithEmailAndPassword(email, password)
        .then((data)=>{
            const id=data.user.uid;
            db.collection('users').doc(id).set({
                'email': email,
                'nick': nick,
                'todo-items': []
                             
              })
        })
        ;
    }
   
    render(){
        const {email, password, nick}=this.state;
        return(
            <div>
                <input value={email} placeholder="email"  onChange={e=>this.onChange(e, "email")}type='text'/>
                <input value = {password} placeholder="password"  onChange={e=>this.onChange(e, "password")}type='text'/>
                <input value = {nick} placeholder="nickname"  onChange={e=>this.onChange(e, "nick")}type='text'/>
                <button onClick={this.onLoginBtnClick}>Login</button>
                <button onClick={this.onSignUpClick}>SignUp</button>
            </div>
        )
    }
}
export default LogIn