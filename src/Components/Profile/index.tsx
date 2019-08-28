import React from 'react';
import { useTranslation } from 'react-i18next';

const Profile: React.FC = () => {
  const { t } = useTranslation();

  return <div>{t('home.presentation')}</div>;
};

export default Profile;