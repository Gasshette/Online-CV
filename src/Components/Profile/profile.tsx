import React from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import { Avatar, Tag, Icon } from 'antd';
import ReactMarkdown from 'react-markdown';
import { renderToString } from 'react-dom/server';
import { primaryColor } from '../Skills/skills';
import pp from '../../assets/images/profile-pic.jpeg';

import './profile.scss';
import './profile-small-screen.scss';


interface IProfile extends WithTranslation {}

const Profile = (props: IProfile) => {
  const componentRef = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    setContent();
  });

  const setContent = () => {
    let text = renderToString(
      <ReactMarkdown source={props.t('profile.presentation')} />
    );

    let componentNode = componentRef.current;

    if (componentNode) {
      const contentNodes = componentNode.getElementsByClassName('content');
      contentNodes[contentNodes.length - 1].innerHTML = text
        .replace('/react/', tag('react', 'blue'))
        .replace('/angular/', tag('angular', 'red'))
        .replace('/csharp/', tag('csharp', 'cyan'))
        .replace('/fullstack/', tag('fullstack', primaryColor));
    }
  }

  const tag = (endOfKey: string, color: string) => {
    return renderToString(
      <Tag color={color}>{props.t(`tags.${endOfKey}`)}</Tag>
    );
  }

  return (
    <div className='profile-component' ref={componentRef}>
        <div className='logos'>
          <span className='avatar'>
            <Avatar size={100} src={pp} />
          </span>
          <a href='https://www.linkedin.com/in/quentin-grisel-587542134'>
            <Icon type='linkedin' theme='filled' style={{ fontSize: '50px' }} />
          </a>
          <a href='https://github.com/Gasshette'>
            <Icon type='github' theme='filled' style={{ fontSize: '50px' }} />
          </a>
        </div>
        <div className='content'></div>
      </div>
  )
}

export default withTranslation()(Profile);
