import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class MainLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{background: 'lightblue'}}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/props-examples">Props Examples</Link>
                    </li>
                    <li>
                        <Link to="/http-examples">HTTP Examples</Link>
                    </li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}