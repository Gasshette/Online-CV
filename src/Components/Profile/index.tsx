import React from 'react';
import { useTranslation } from 'react-i18next';
import { Skeleton } from 'antd';

import './styles.scss';

const Profile: React.FC = () => {
  const { t } = useTranslation();

  return <div className='profile-component'>
  {t('home.presentation')}
  <Skeleton active avatar paragraph={{rows:10}} />
  </div>;
};

export default Profile;
