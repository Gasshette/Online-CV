import React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';
import { Menu, Dropdown, Icon, List } from 'antd';
import './styles.scss';

interface IProps extends WithTranslation {
  style: object;
}

const LanguageSelector: React.FC<IProps> = ({ style, i18n, t }) => {
  return (
    <div className='language-selector-component'>
      <div className='content'>
        <div className='icon-surrounder'>
          <Icon
            className='icon-language-selector'
            type='global'
            style={style}
          />
        </div>
        <br />
        <ul>
          <li onClick={() => i18n.changeLanguage('en')}>
            <Icon
              type='flag'
              theme={i18n.language === 'en' ? 'filled' : 'outlined'}
            />{' '}
            {t('lang.english')}
          </li>
          <li onClick={() => i18n.changeLanguage('fr')}>
            <Icon
              type='flag'
              theme={i18n.language === 'fr' ? 'filled' : 'outlined'}
            />{' '}
            {t('lang.french')}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default withTranslation()(LanguageSelector);
