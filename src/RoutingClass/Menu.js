import { Component } from "react";
import { Link } from "react-router-dom";
class Menu extends Component{
    render(){ 
        return(
            <div>
      <div>
        <Link to="RoutingClass/Home">Home</Link>
      </div>
      <div>
        <Link to="RoutingClass/UserSignUp">SignUp</Link>
      </div>
      <div>
        <Link to="RoutingClass/UserLogin">Login</Link>
      </div>
      
    </div>
        )
    }
}
export default Menu;