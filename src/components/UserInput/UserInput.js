import React from 'react';

const UserInput = (props) => {
    return (
    <form>
        <label>
            Tu nombre:
        <input type="text" onChange={props.changed}/>
        </label>
    </form>
    )
}

export default UserInput;