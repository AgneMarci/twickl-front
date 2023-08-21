import React from 'react';
import './deleteConfirmation.css';
import { useTranslation } from 'react-i18next';

const DeleteConfirmation = ({ onConfirm, onCancel }) => {
  const { t } = useTranslation();

  return (
    <div className="deleteModalOverlay">
      <div className="deleteModalContent">
        <p>{t('deleteModal.message')}</p>
        <div className="buttonContainer">
          <button onClick={onConfirm}>{t('common.yes')}</button>
          <button onClick={onCancel}>{t('common.no')}</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteConfirmation;
