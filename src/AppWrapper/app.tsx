import React from 'react';
import { Row, Col, Affix, BackTop } from 'antd';
import Skills from '../Components/Skills/skills';
import Profile from '../Components/Profile/profile';
import LanguageSelector from './LanguageSelector/language-selector';
import WithAnimation from '../Components/WithAnimation/with-animation';
import 'animate.css';
import './app.scss';
import './app-small-screen.scss';

const App = () => {
  const [isDesktop, setIsDesktop] = React.useState(false);
  React.useEffect(() => {

    // Size is defined by the component : https://ant.design/components/grid/#Col
    setIsDesktop(window.innerWidth > 992);
  }, []);

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
          <WithAnimation animation="animate__fadeInLeft">
            <Profile />
          </WithAnimation>
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
