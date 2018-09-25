import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {updateAgent} from '../../ducks/reducer'

class WizardFive extends Component {

    render(){
        return(
            <div className="parent-div">
                    <div className="vert-align">    

                    <p>Are you currently working with a real estate agent?</p> <br />
                    <div className="row">
                        <Link to="/wSix"><button onClick={e=>updateAgent(e.target.value)}>Yes</button></Link>
                        <Link to="/wSix"><button onClick={e=>updateAgent(e.target.value)}>No </button></Link>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProp(state){
    const {agent} = state;
    return agent
}
export default connect(mapStateToProp, {updateAgent})(WizardFive);