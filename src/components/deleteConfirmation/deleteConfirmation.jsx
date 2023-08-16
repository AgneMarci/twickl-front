import React from 'react';
import './deleteConfirmation.css';

const DeleteConfirmation = ({ onConfirm, onCancel }) => {
  return (
    <div className="deleteModalOverlay">
      <div className="deleteModalContent">
        <p>Do you really want to delete your profile?</p>
        <div className="buttonContainer">
        <button onClick={onConfirm}>YES</button>
        <button onClick={onCancel}>NO</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteConfirmation;
