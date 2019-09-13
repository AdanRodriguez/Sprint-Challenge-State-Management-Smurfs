import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurf } from './actions/actions'


const SmurfForm = props => {
    const[smurf, setSmurf] = useState({ name: '', age: '', height: '' })

    const handleChange = event => {
        setSmurf({
            ...smurf, [event.target.name]: event.target.value
        })
    }

    const addSmurf = event => {
        event.preventDefault()
        console.log("newsmurf", smurf)
        props.postSmurf(smurf)
        setSmurf({})
    }


    return (
        <div>
            <form onSubmit={addSmurf}>
                <input type="text" name='name' onChange={event => handleChange(event)} placeholder='Name'  />
                <input type="text" name='age' onChange={event => handleChange(event)} placeholder='Age' />
                <input type="text" name='height' onChange={event => handleChange(event)} placeholder='Height'  />
                <button >Add Smurf</button>
            </form>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        error: state.error
    }
}

export default connect(mapStateToProps, { postSmurf })(SmurfForm)
