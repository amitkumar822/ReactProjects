import React from "react";

class ComponentA extends React.Component{
    constructor(){
        super();
        this.state ={
            name: "ComponentA",
            data: []
        }
        // console.log("ComponentA Cunstructor");
    }

    static getDrivedStateFromProps() {
        // console.log("ComponentA getDerivedStateByprops");
        return null;
    }

    componentDidMount(){
        // console.log("ComponentA componentDidMount");

        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then( data => this.setState({data}));
    }



    render(){
        // console.log("ComponentA Render");
        // console.log(this.state.data);
        return(
            <>
                <h1>{this.state.name}</h1>
                <ul>
                    {this.state.data.map((d)=>{
                        return(
                            <li>{d.username}</li>
                        )
                    })}
                </ul>
            </>
            
        )
    }
}

export default ComponentA;