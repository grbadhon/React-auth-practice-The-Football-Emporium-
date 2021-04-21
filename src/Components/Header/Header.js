import React from 'react';
import './Header.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Header = (props) => {
   const ClassName = `row d-flex justify-content-center ${props.headerClass}`
    return (
        <div className={ClassName} >
            {props.children}
        </div>
    );
};

export default Header;