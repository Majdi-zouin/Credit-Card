import React, { Component } from 'react';
import './timer.css';
class Timer extends Component {
    constructor(props) {
        super (props);
        this.state = {  }
    }
    render() {
        return (<div>
            <div className='timer'>
                <h1>00:30:00</h1>
            </div>

        </div>)
    }
}




export default timer;