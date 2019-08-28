import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Dropdown } from 'antd';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector';

const NavBar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Menu
        theme='dark'
        mode='horizontal'
        defaultSelectedKeys={['home']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key='home'>
          <Icon type='home' /> {t('menu.home')}
          <Link to='/' />
        </Menu.Item>
        <Menu.Item key='skills'>
          <Icon type='star' /> {t('menu.skills')}
          <Link to='/skills' />
        </Menu.Item>
        <Menu.Item key='profile'>
          <Icon type='smile' /> {t('menu.profile')}
          <Link to='/profile' />
        </Menu.Item>
      </Menu>
    </Fragment>
  );
};

export default NavBar;
