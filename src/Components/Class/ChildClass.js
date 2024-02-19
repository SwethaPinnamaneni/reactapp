import React,{Component} from "react";


class ChildClass extends Component{
    componentWillUnmount(){
        document.removeEventListener('mousedown',this.handleClick)
        console.log("Unmounted")
    }
    handleClick(){
        console.log("handleClick")
    }
    updateValue(){
        document.addEventListener('mousedown',this.handleClick)
    }

    render(){
        document.addEventListener('mousedown',this.handleClick)
        return( <div>{this.props.count}
            <p>Swetha</p>
            
            </div>
        )
            
       

    }
}
export default ChildClass;