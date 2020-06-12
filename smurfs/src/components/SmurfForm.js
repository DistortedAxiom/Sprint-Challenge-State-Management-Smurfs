import React, {useState} from "react"
import { connect } from 'react-redux'
import { addSmurf, getSmurfData } from '../actions/actions'

const SmurfForm = (props) => {

    const [smurf, setSmurf] = useState({
        name: "",
        age: "",
        height: ""
    })

    const handleChanges = e => {
        e.preventDefault();
        setSmurf({
            ...smurf,
            [e.target.name]: e.target.value
        });
    };

    const submitHandler = e => {
        e.preventDefault()
        props.addSmurf(smurf);
    }

    return (
        <div className="form-container">
            <form className="smurf-form" onSubmit={submitHandler}>
                <label>Name</label>
                <input
                    name="name"
                    type="text"
                    placeholder="Smurf name"
                    onChange={handleChanges}
                    value={smurf.name}
                />
                <label>Age</label>
                <input
                    name="age"
                    type="text"
                    placeholder="Smurf age"
                    onChange={handleChanges}
                    value={smurf.age}
                />
                <label>Height</label>
                <input
                    name="height"
                    type="text"
                    placeholder="Smurf height"
                    onChange={handleChanges}
                    value={smurf.height}
                />
                <button>Post your new smurf</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        error: state.error,
        isLoading: state.isLoading,
        data: state.data
    }
}

export default connect(mapStateToProps, { addSmurf, getSmurfData })(SmurfForm);
