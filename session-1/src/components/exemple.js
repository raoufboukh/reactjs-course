import React, { useState } from "react";

function Welcome(props){
    let [counter,setCounter] = useState(0);
    let [name,setName] = useState("raid")
    return(
        <>
        <h1>Hello {props.name}</h1>
        <h1>age:{props.age}</h1>
        <h1>title:{props.title}</h1>
        <h2>Counter:{counter}</h2>
        <button onClick={() => {
            setCounter(counter+1);
        }}>
            +
        </button>
        <h3>{name}</h3>
        <button onClick={() => {
            setName("raouf")
        }}>change Name</button>
        <hr/>
        </>
    );
}

class Wel extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            firstName: "raouf",
            lastName: "boukhchem"
        }
    }
    changeName(){
        console.log(this.state);
        this.setState({
            lastName: "r3da"
        })
    }
    // state = {
    //     firstName: "raouf",
    //     lastName: "boukhchem"
    // }
    render(){
        return(
            <>
            <h1>Hello Class Component {this.props.name}</h1>
            <h6>Created By {this.state.firstName} {this.state.lastName}</h6>
            <button onClick={this.changeName}>change lastName</button>
            </>
        )
    }
}



// export default Wel;
// export default Welcome;

export {
    Wel,Welcome
}