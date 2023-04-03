import React from 'react';

export class LetterCell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div style={{ width: '20.83333333333333px', height: '27.08333333333333px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ color: this.props.color, opacity: this.props.opacity, fontSize: '20px' }}>{this.props.col}</div>
            </div>

        )
    }
}
