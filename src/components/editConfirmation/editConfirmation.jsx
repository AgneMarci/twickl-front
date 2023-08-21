import React from 'react';
import './editConfirmation.css';
import profilePicture from '../../assets/profile-picture.png';
import { useTranslation } from 'react-i18next';

const EditConfirmation = ({ onConfirm, onCancel }) => {
  const { t } = useTranslation();

  return (
    <div className="modalWrapper">
      <div className='modalContent'>
        <h1>{t('editModal.title')}</h1>
        <div className="contentWrapper">
          <div className='profilePicture'>
            <img src={profilePicture} alt="Profile" />
          </div>
          <table className='profileTableEdit'>
            <tbody>
              <tr>
                <td>{t('editModal.name')}</td>
                <td><input type="text" defaultValue={t('editModal.yourName')} /></td>
              </tr>
              <tr>
                <td>{t('editModal.lastName')}</td>
                <td><input type="text" defaultValue={t('editModal.yourLastName')} /></td>
              </tr>
              <tr>
                <td>{t('editModal.username')}</td>
                <td><input type="text" defaultValue={t('editModal.yourUsername')} /></td>
              </tr>
              <tr>
                <td>{t('editModal.email')}</td>
                <td><input type="text" defaultValue={t('editModal.yourEmail')} /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="buttonContainerEdit">
          <button onClick={onConfirm}>{t('common.submit')}</button>
          <button onClick={onCancel}>{t('common.cancel')}</button>
        </div>
      </div>
    </div>
  );
}

export default EditConfirmation;
