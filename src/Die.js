import React, { Component } from 'react'
import './Die.css'


class Die extends Component{
    render(){

     const {face, isRolling} = this.props

        
        return (
            <div className="Die">
                <i className={`${face} ${isRolling ? "shaking" : "" }`} ></i>
            </div>
        )
    }
}

export default Die;