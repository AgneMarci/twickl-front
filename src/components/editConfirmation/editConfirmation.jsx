import React from 'react';
import './editConfirmation.css';
import profilePicture from '../../assets/profile-picture.png';

const EditConfirmation = ({ onConfirm, onCancel }) => {
  return (
    <div className="modalWrapper">
      <div className='modalContent'>
        <h1>ACCOUNT DETAILS</h1>
        <div className="contentWrapper">
          <div className='profilePicture'>
              <img src={profilePicture} alt="Profile" />
          </div>
          <table className='profileTableEdit'>
            <tbody>
              <tr>
                <td>Name</td>
                <td><input type="text" defaultValue="Your name" /></td>
              </tr>
              <tr>
                <td>Last name</td>
                <td><input type="text" defaultValue="Your Last name" /></td>
              </tr>
              <tr>
                <td>Username</td>
                <td><input type="text" defaultValue="Your Username" /></td>
              </tr>
              <tr>
                <td>Email</td>
                <td><input type="text" defaultValue="Your Email" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="buttonContainerEdit">
            <button onClick={onConfirm}>SUBMIT</button>
            <button onClick={onCancel}>CANCEL</button>
        </div>
      </div>
    </div>
  );
}

export default EditConfirmation;
