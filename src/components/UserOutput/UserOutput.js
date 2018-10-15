import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';
import '../../css/UserOutput.css';

const UserOutput = (props) => {
    return(
        <div className="col-6">
            <Card>
                <div className="imgContainer">
                    <CardImg top src={props.image} alt={props.username} />
                </div>
                <CardBody>
                    <CardTitle>{props.username}</CardTitle>
                    <CardText>{props.paragraph}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default UserOutput;