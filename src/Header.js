import React from 'react'
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';


function Header() {
    return (
        <div className="header">
            <IconButton>
              <PersonIcon fontSize="Large" className="header_icon"/>
            </IconButton>

            <img className="header_logo" src="https://i.pinimg.com/originals/d4/d8/82/d4d882dccd11187b7980ada01a465d48.png" />
        </div>
        
    )
}

export default Header
