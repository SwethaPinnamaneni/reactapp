import React from "react"
let UserGreeting=(props)=>{
    return <h1>Welcome Back</h1>
}
 let GuestGreeting=(props)=>{
    return <h1>Please Sign in</h1>
 }
 let LoginButton=(props)=>{
    return <button onClick={props.onClick}>Login</button>
 }
 let LogOutButton=(props)=>{
    return <button onClick={props.onClick}>LogOut</button>
 }
 let Greeting=(props)=>{
    const isLoggedIn=props.isLoggedIn;
    if(isLoggedIn){
       return <UserGreeting/>;
    }
    return <GuestGreeting/>;
 }

 class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedIn:true
        }
    }
    handleLoginClick(){
        this.setState({
            isLoggedIn:true
        })
    }
    handleLogOutClick(){
        this.setState({
            isLoggedIn:false
        })
    }
    render(){
        const isLoggedIn=this.state.isLoggedIn;
        let button;
        if(isLoggedIn){
            button=<LogOutButton onClick={()=>this.handleLogOutClick()}></LogOutButton>
        }
        else{
            button=<LoginButton onClick={()=>this.handleLoginClick()}></LoginButton>
        }
        return (
                  <div>
                    <Greeting isLoggedIn={isLoggedIn} />
                    {button}
                  </div>
                );
        }
    } 
 export default LoginControl;