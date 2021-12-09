import React from 'react';

const ActionButton = ({ label, onClick }) => {
    return (
        <div className="action-button">
            <button className="default-button" onClick={onClick}>{label}</button>
        </div>
    )
};

ActionButton.defaultProps = {
    label: 'Create New'
};

export default ActionButton;