import React from "react";
import { connect } from "react-redux";

import Smurfs from './Smurfs'
import { getSmurfs } from './actions/actions'

const SmurfList = props => {
    return (
        <div>
            <button onClick={props.getSmurfs}>Get Smurf List</button>
            {props.smurfs &&
            props.smurfs.map(smurf => <Smurfs key={smurf.id} smurf={smurf} />)} 
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs

    }
}

export default connect(
    mapStateToProps, { getSmurfs })(SmurfList);