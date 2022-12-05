import React from 'react';
import { Row, Col, Affix, BackTop } from 'antd';
import Skills from '../Components/Skills/skills';
import Profile from '../Components/Profile/profile';
import LanguageSelector from './LanguageSelector/language-selector';
import WithAnimation from '../Components/WithAnimation/with-animation';
import 'animate.css';
import './app.scss';
import './app-small-screen.scss';
import '../assets/christmas.js';
import { useScreenSize } from '../Hooks/useScreenSize';

const App = () => {
  const isDesktop = useScreenSize();

  return (
    <div className='app'>
      <Row style={{ alignItems: 'strech' }}>
        {!isDesktop && (
          <Col span={24} className='col-menu'>
            <WithAnimation animation="animate__backInDown">
              <LanguageSelector style={{ fontSize: '40px' }} />
            </WithAnimation>
          </Col>
        )}
        <Col xs={24} lg={10} className='col-profile'>
          {isDesktop ?
            <Affix offsetTop={50}>
              <WithAnimation animation="animate__fadeInLeft">
                <Profile />
              </WithAnimation>
            </Affix>
            : <WithAnimation animation="animate__fadeInLeft">
              <Profile />
            </WithAnimation>
          }
        </Col>
        {isDesktop && (
          <Col span={4} className='col-menu'>
            <Affix offsetTop={30}>
              <WithAnimation animation="animate__backInDown">
                <LanguageSelector style={{ fontSize: '40px' }} />
              </WithAnimation>
            </Affix>
          </Col>
        )}
        <Col xs={24} lg={10} className='col-skills'>
          <WithAnimation animation="animate__fadeInRight">
            <Skills />
          </WithAnimation>
        </Col>
      </Row>

      <span className='back-top'>
        <BackTop />
      </span>
    </div>
  )
}

export default App;
