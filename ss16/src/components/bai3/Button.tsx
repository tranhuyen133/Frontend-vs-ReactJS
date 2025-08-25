import React, { Component } from 'react';
import "./Button.css"
class Button extends Component {
    render() {
        return (
            <div>
            <h2>Các loại Button</h2>
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-success">Success</button>
            <button className="btn btn-warning">Warning</button>
            <button className="btn btn-danger">Danger</button>
            <a href="#" className="btn btn-link">Link</a>
            </div>
        );
    }
}

export default Button;