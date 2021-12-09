import React from 'react';

const Header = ({ title }) => {
    return (
        <div className="header-title">{title}</div>
    )
};

Header.defaultProps = {
    title: 'Demo Product App'
};

export default Header;