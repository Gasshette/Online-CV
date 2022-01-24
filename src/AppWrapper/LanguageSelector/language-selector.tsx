import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { GlobalOutlined, FlagOutlined, FlagFilled } from '@ant-design/icons';
import './language-selector.scss';

interface IProps extends WithTranslation {
  style: object;
  i18n: any;
  t: any;
}

const LanguageSelector = ({ style, i18n, t }: IProps) => {
  return (
    <div className='language-selector-component'>
      <div className='content'>
        <div className='icon-surrounder'>
          <GlobalOutlined
            className='icon-language-selector'
            style={style}
          />
        </div>
        <br />
        <div className='lang-list-surrounder'>
          <ul>
            <li onClick={() => i18n.changeLanguage('en')}>
              {i18n.language === 'en' ? <FlagFilled /> : <FlagOutlined />}
              {/* // <Icon
                type='flag'
                theme={i18n.language === 'en' ? 'filled' : 'outlined'}
              /> */}
              {' '}
              {t('lang.english')}
            </li>
            <li onClick={() => i18n.changeLanguage('fr')}>
              {i18n.language === 'fr' ? <FlagFilled /> : <FlagOutlined />}
              {/* <Icon
                type='flag'
                theme={i18n.language === 'fr' ? 'filled' : 'outlined'}
              /> */}
              {' '}
              {t('lang.french')}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(LanguageSelector);
