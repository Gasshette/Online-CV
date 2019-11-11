import React from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import { Avatar, Tag, Icon } from 'antd';
import ReactMarkdown from 'react-markdown';
import { renderToString } from 'react-dom/server';
import { primaryColor } from '../Skills';

import './styles.scss';
import './stylesSmallScreen.scss';


interface IProfile extends WithTranslation {}

class Profile extends React.Component<IProfile> {
  private componentRef = React.createRef<HTMLDivElement>();

  constructor(props: any) {
    super(props);

    this.componentRef = React.createRef<HTMLDivElement>();

    this.tag = this.tag.bind(this);
    this.setContent = this.setContent.bind(this);
  }

  componentDidMount() {
    this.setContent();
  }

  componentDidUpdate() {
    this.setContent();
  }

  setContent() {
    let text = renderToString(
      <ReactMarkdown source={this.props.t('profile.presentation')} />
    );

    let componentNode = this.componentRef.current;

    if (componentNode) {
      const contentNodes = componentNode.getElementsByClassName('content');
      contentNodes[contentNodes.length - 1].innerHTML = text
        .replace('/react/', this.tag('react', 'blue'))
        .replace('/angular/', this.tag('angular', 'red'))
        .replace('/csharp/', this.tag('csharp', 'cyan'))
        .replace('/fullstack/', this.tag('fullstack', primaryColor));
    }
  }

  tag(endOfKey: string, color: string) {
    return renderToString(
      <Tag color={color}>{this.props.t(`tags.${endOfKey}`)}</Tag>
    );
  }

  render() {
    return (
      <div className='profile-component' ref={this.componentRef}>
        <div className='logos'>
          <span className='avatar'>
            <Avatar size={100} icon='user' />
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
    );
  }
}

export default withTranslation()(Profile);
