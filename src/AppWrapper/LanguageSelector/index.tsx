import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, Radio, Dropdown, Button, Icon } from 'antd';

import './styles.scss';
const LanguageSelector: React.FC = () => {
  const { i18n, t } = useTranslation();

  function handleMenuClick(e: any): void {
    i18n.changeLanguage(e.key);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key='en'>
        <Icon type='flag' theme='twoTone' />
        {t('lang.english')}
      </Menu.Item>
      <Menu.Item key='fr'>
        <Icon type='flag' theme='twoTone' />
        {t('lang.french')}
      </Menu.Item>
    </Menu>
  );

  return (
    <div className='language-selector-component'>
      <Dropdown overlay={menu}>
        <Icon className='icon-language-selector' type='global' />
      </Dropdown>
    </div>
  );
};

export default LanguageSelector;
