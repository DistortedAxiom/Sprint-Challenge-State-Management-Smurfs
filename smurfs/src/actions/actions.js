import axios from 'axios';

export const GET_DATA = "GET_DATA";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";

export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

export const DELETE_SMURF = "DELETE_SMURF";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";

export const getSmurfData = () => dispatch => {
    dispatch({
        type: GET_DATA
    })
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        dispatch({type: GET_DATA_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: GET_DATA_FAILURE, payload: err})
    })
}

export const addSmurf = smurf => dispatch => {
    dispatch({
        type: ADD_SMURF
    });
    axios.post('http://localhost:3333/smurfs', smurf)
        .then(res => {
            dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: ADD_SMURF_FAILURE, payload: err.response})
        })
}

export const deleteSmurf = id => dispatch => {
    dispatch({
        type: DELETE_SMURF
    });
    axios.delete(`http://localhost:3333/smurfs/${id}`)
        .then(res => {
            console.log(res)
            dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: DELETE_SMURF_FAILURE, payload: err.response})
        })
}
