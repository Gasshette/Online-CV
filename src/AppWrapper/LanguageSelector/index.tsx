import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, Dropdown, Icon } from 'antd';
import './styles.scss';

interface IProps {
  style: object;
}

const LanguageSelector: React.FC<IProps> = ({ style }) => {
  const { i18n, t } = useTranslation();

  function handleMenuClick(e: any): void {
    i18n.changeLanguage(e.key);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key='en'>
        <Icon type='flag' theme={i18n.language === 'en' ? 'filled' : 'outlined'} />
        {t('lang.english')}
      </Menu.Item>
      <Menu.Item key='fr'>
        <Icon type='flag' theme={i18n.language === 'fr' ? 'filled' : 'outlined'} />
        {t('lang.french')}
      </Menu.Item>
    </Menu>
  );

  return (
    <div className='language-selector-component'>
      <Dropdown overlay={menu}>
        <Icon className='icon-language-selector' type='global' style={style} />
      </Dropdown>
    </div>
  );
};

export default LanguageSelector;
