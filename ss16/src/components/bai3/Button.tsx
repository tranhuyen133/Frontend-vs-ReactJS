import React from 'react';
import "./Button.css"
type ButtonProps={
    children: React.ReactNode;
    variant?:
     "primary" 
    | "secondary" 
    | "success" 
    | "warning" 
    | "danger" 
    | "info" 
    | "light" 
    | "dark" 
    | "link";
}
function Button ({children, variant = "primary"}: ButtonProps) {
        return (
            <button className={`btn ${variant}`}>
                {children}   
            </button>
        );
    }
export default Button;