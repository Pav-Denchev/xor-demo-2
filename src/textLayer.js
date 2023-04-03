import React from 'react';
import {LetterRow} from "./LetterRow";

export class TextLayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div style={{display: 'flex',  flexDirection: 'column', flexWrap: 'wrap', width: '100%', height: '100%'}} className="TextContainer">
                {this.props.letters && this.props.letters.map(((letterRow, index) =>  {
                    return <LetterRow color={this.props.color} row={letterRow} key={index} opacity={this.props.opacity} />}))
                }
            </div>
        )
    }
}
