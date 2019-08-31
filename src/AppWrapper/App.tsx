import React from 'react';
import { Row, Col, Affix } from 'antd';
import Skills from '../Components/Skills';
import Profile from '../Components/Profile';
import LanguageSelector from './LanguageSelector';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className='app'>
      <Row type='flex' style={{ alignItems: 'strech' }}>
        <Col span={10} className='col-profile'>
          <Profile />
        </Col>
        <Col span={4} className='col-menu'>
          <Affix offsetTop={30}>
            <LanguageSelector style={{ fontSize: '40px' }} />
          </Affix>
        </Col>
        <Col span={10} className='col-skills'>
          <Skills />
        </Col>
      </Row>
    </div>
  );
};

export default App;
