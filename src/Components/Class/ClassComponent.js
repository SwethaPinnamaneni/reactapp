import React,{Component} from "react";
import ChildClass from "./ChildClass";
export class ClassComponent extends Component{
    constructor(props){ //props should be passed as parameter 
        super(props);
        console.log(this.props.name)
        console.log(this.props.id)
            this.state={
            count:0,
            display:true,
            data:{
                name:"swetha",
                age:24
            }
    }
    console.log("Constructor")
    this.updateState=this.updateState.bind(this);
    } 
    static getDerivedStateFromProps(){
        
        console.log("getDerivedStateFromProps")
        return null
    }
    componentDidMount(){
        console.log("ComponentDidMount")
        document.addEventListener('mousedown',this.handleClick)
    }
    shouldComponentUpdate(){
        console.log("sholudComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log("getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    updateState(){
        this.setState({
            count:this.state.count + 1,
            data:{
                name:"swetha",
                age:27
            }
            
        })
    }
    render(){
        console.log("render")
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h1>{this.props.id}</h1>
                <h1>{this.state.count}{this.state.data.name}{this.state.data.age}</h1>
            
                <button onClick={()=>this.updateState()}>Click</button>
              { /*  this.state.count===5 &&  */}<ChildClass 
                count={this.state.count}/>
            </div>
           
        )
    }
    
}