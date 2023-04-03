import React from 'react';
import {LetterCell} from "./letterCell";

export class LetterRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div style={{width: '500px', height:'27.08333333333333px', display: 'flex', flexDirection: 'row'}}>
                {this.props.row && this.props.row.map(((letter, index) =>  {
                    return <LetterCell color={this.props.color} col={letter} key={index} opacity={this.props.opacity} />}))
                }
            </div>
        )
    }
}
