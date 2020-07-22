import React, {Component} from 'react';
import './RollDice.css'
import Die from './Die'

class RollDice extends Component {
    static defaultProps = {
        dieFace: ['one', 'two', 'three', 'four', 'five', 'six']
    }
    constructor(props){
        super(props);
        this.state = {
            die1: 'fas fa-dice-one',
            die2: 'fas fa-dice-two',
            rolling: false
        }
        this.roll = this.roll.bind(this);
    }
    getRandomRoll() {
        let randNum = Math.floor(Math.random() * 6),
            randFace = this.props.dieFace[randNum],
            faceClass = `fas fa-dice-${randFace}`;
        return faceClass;
    }

    roll(){
        this.setState({
            die1: this.getRandomRoll(),
            die2: this.getRandomRoll(),
            rolling: true
        })
        setTimeout(()=> {
            this.setState({rolling: false});
        }, 1000);
       
        
    }

    render(){
        return (
            <div className='RollDice'>
                <div className='RollDice-container'>
                    <Die face={this.state.die1} isRolling={this.state.rolling}/>
                    <Die face={this.state.die2} isRolling={this.state.rolling}/>
                </div>
                    <button onClick={this.roll} disabled={this.state.rolling}>{this.state.rolling ? "Rolling" : "Roll"}</button>
                
            </div>
        )
    }
}

export default RollDice;