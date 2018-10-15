import React from 'react';

const UserOutput = (props) => {
    return(
        <div>
            <h3> {props.username} :</h3>
            <p> {props.paragraph} </p>
        </div>
    )
}

export default UserOutput;