import React, { Component } from 'react'

export default class Clicker extends Component {
    constructor(props){
        super(props);
        this.state={num:1};
        this.getnum =this.getnum.bind(this);
    }
    getnum(){
        const maxNumber=10;
        let rand=Math.floor((Math.random() *maxNumber)+1);
        this.setState({num:rand});
    }
    render() {
        return (
            <div>
                <h1>number is:{this.state.num}</h1>
                {this.state.num === 7 && <h1> You wIN</h1>}
                <button onClick={this.getnum}>Random Number</button>
            </div>
        )
    }
}
