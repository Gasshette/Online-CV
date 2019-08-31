import React from 'react';
import { useTranslation } from 'react-i18next';
import { Avatar } from 'antd';

import './styles.scss';

const Profile: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='profile-component'>
      <div className='avatar'>
        <Avatar icon='user' size='large' />
      </div>
      <div className='content'>{t('home.presentation')}</div>
    </div>
  );
};

export default Profile;
