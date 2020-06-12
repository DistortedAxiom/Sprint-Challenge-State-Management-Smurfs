import React, {useEffect, useRef} from 'react';
import { connect } from 'react-redux';
import {  getSmurfData } from '../actions/actions'

import Smurf from '../components/Smurfs';
import SmurfForm from '../components/SmurfForm'

const SmurfList = props => {

    const mounted = useRef();

    useEffect(() => {
        props.getSmurfData()
    }, props.state)

    return (
        <div>
            <div className='smurflist-container'>
                <div>
                    <p>Add and see all the smurfs</p>
                </div>
            </div>
            <div>
                <SmurfForm />
            </div>
            <div>
            {props.data.map((item, i) => (
                <Smurf smurf={item} key={i}/>
            ))}
            </div>
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

export default connect(mapStateToProps, {getSmurfData})(SmurfList);
