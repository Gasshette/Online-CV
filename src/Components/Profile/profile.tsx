import React from 'react';
import { useTranslation } from 'react-i18next';
import { Avatar, Tag } from 'antd';
import { LinkedinFilled, GithubFilled } from '@ant-design/icons';
import ReactMarkdown from 'react-markdown';
import { renderToString } from 'react-dom/server';
import { primaryColor } from '../Skills/skills';
import pp from '../../assets/images/profile-pic.jpeg';

import './profile.scss';
import './profile-small-screen.scss';
import TextWriter from '../TextWriter/text-writer';
import { useScreenSize } from '../../Hooks/useScreenSize';
import DOMPurify from 'dompurify';

const Profile = () => {
  const [t, i18n] = useTranslation();
  const isDesktop = useScreenSize();
  const sanitizer = DOMPurify.sanitize;

  const [description, setDescription] = React.useState<string>();
  React.useEffect(() => {
    setContent();
  }, []);

  React.useEffect(() => {
    setContent();
  }, [i18n.language]);

  const setContent = () => {
    let text = renderToString(
      <ReactMarkdown children={t('profile.presentation')} components={{ p: "span" }} />
    );

    setDescription(text
      .replace('/react/', tag('react', 'blue'))
      .replace('/angular/', tag('angular', 'red'))
      .replace('/csharp/', tag('csharp', 'cyan'))
      .replace('/fullstack/', tag('fullstack', primaryColor))
    );
  }

  const tag = (endOfKey: string, color: string) => {
    return renderToString(
      <Tag color={color}>{t(`tags.${endOfKey}`)}</Tag>
    );
  }

  return (
    <div className='profile-component'>
      <div className='logos'>
        <span className='avatar'>
          <Avatar size={100} src={pp} />
        </span>
        <a href='https://www.linkedin.com/in/%E2%AD%90-quentin-grisel-587542134/'>
          <LinkedinFilled style={{ fontSize: '50px' }} />
        </a>
        <a href='https://github.com/Gasshette'>
          <GithubFilled style={{ fontSize: '50px' }} />
        </a>
      </div>
      <div className="content">
        {description && isDesktop && <TextWriter text={description} speed={30} />}
        {description && !isDesktop && <span dangerouslySetInnerHTML={{ __html: sanitizer(description) }} />}
      </div>
    </div>
  )
}

export default Profile;
