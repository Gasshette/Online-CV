import React from 'react';
import { Row, Col, Affix, BackTop } from 'antd';
import Skills from '../Components/Skills/skills';
import Profile from '../Components/Profile/profile';
import LanguageSelector from './LanguageSelector/language-selector';
import './app.scss';
import './app-small-screen.scss';

const App = () => {
  const [isDesktop, setIsDesktop] = React.useState(false);
React.useEffect(() => {

  // Size is defined by the component : https://ant.design/components/grid/#Col
  setIsDesktop(window.innerWidth > 992);
}, []);

  return(
    <div className='app'>
        <Row type='flex' style={{ alignItems: 'strech' }}>
          {!isDesktop && (
            <Col span={24} className='col-menu'>
              <LanguageSelector style={{ fontSize: '40px' }} />
            </Col>
          )}
          <Col xs={24} lg={10} className='col-profile'>
            <Profile />
          </Col>
          {isDesktop && (
            <Col span={4} className='col-menu'>
              <Affix offsetTop={30}>
                <LanguageSelector style={{ fontSize: '40px' }} />
              </Affix>
            </Col>
          )}
          <Col xs={24} lg={10} className='col-skills'>
            <Skills />
          </Col>
        </Row>

        <span className='back-top'>
          <BackTop />
        </span>
      </div>
  )
}

export default App;
