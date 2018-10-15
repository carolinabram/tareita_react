import React from 'react';
import '../../css/UserInput.css';

const UserInput = (props) => {
    return (
        <div className="d-flex flex-row">
            <form>
                <label>
                    Tu nombre:
                </label>
                <input type="text" onChange={props.changed} />
            </form>
        </div>
    )
}

export default UserInput;