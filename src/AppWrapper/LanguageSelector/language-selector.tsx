import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { Icon } from 'antd';
import './language-selector.scss';

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
        <div className='lang-list-surrounder'>
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
    </div>
  );
};

export default withTranslation()(LanguageSelector);