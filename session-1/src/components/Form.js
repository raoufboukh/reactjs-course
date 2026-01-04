import React, { useState } from "react";

// function Form (props){
//     let [name,setName] = useState('');
//     let [password,setPassword] = useState('');
//     let [gender,setGender] = useState('male');

//     const nameHandler = (value,type) =>{
//         if(type === 'name'){
//             setName(value);
//         }else if(type === 'pass'){
//             setPassword(value);
//         }else{
//             setGender(value);
//         }
//     }
//     return (

//         <form onSubmit={(e) => {
//             console.log('Form submitted');
//             e.preventDefault();
//             console.log({
//                 name,
//                 password,
//                 gender
//             })
//         }}>
//             <label>Name</label>
//             <input type="text" placeholder="Enter your name" onChange={(event) => {
//                 nameHandler(event.target.value,props.type1);
//             }}/>
//             <br/>
//             <label>Password</label>
//             <input type="password" placeholder="Enter your password" onChange={(event) => {
//                 nameHandler(event.target.value,props.type2);
//             }}/>
//             <br/>
//             <label>Gender</label>
//             <select onChange={(event) => {
//                 nameHandler(event.target.value,props.type3);
//             }}>
//                 <option value="male">male</option>
//                 <option value="female">female</option>
//             </select>
//             <br/>
//             <input type="submit"/>
//         </form>
//     );
// }

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            password: '',
            gender: 'male'
        }
        // this.nameHandler = this.nameHandler.bind(this);
    }
    nameHandler = (value,type) =>{
        if(type === 'name'){
            this.setState({
                name: value
            });
        }else if(type === 'pass'){
            this.setState({
                password: value
            });
        }else{
            this.setState({
                gender: value
            });
        }
    }
    render(){
        return(
            <form onSubmit={(e) => {
                console.log('Form submitted');
                e.preventDefault();
                console.log(this.state);
            }}>
                <label>Name</label>
                <input type="text" placeholder="your name" onChange={(event) => {
                    this.nameHandler(event.target.value,this.props.type1);
                }}/>
                <br/>
                <label>Password</label>
                <input type="password" placeholder="your password" onChange={(event)=>{
                    this.nameHandler(event.target.value,this.props.type2);
                }}/>
                <br/>

                <select onChange={(event)=>{
                    this.nameHandler(event,this.props.type3);
                }}>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
                <br/>

                <input type="submit"/>



            </form>
        )

    }
}

export default Form;