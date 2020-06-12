import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getSmurfData ,deleteSmurf } from '../actions/actions'

const Smurfs = (props) => {

    const handleDelete = e => {
        props.deleteSmurf(props.smurf.id)
    }

    return (
        <div>
            <h2>{props.smurf.name}</h2>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
            <p>ID: {props.smurf.id}</p>
            <button onClick={handleDelete}>DELETE</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        error: state.error,
        isLoading: state.isLoading,
        data: state.data,
        id: state.id
    }
}

export default connect(mapStateToProps, { getSmurfData, deleteSmurf })(Smurfs);
