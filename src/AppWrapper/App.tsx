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
          <Affix offsetTop={15}>
            <Profile />
          </Affix>
        </Col>
        <Col span={4} className='col-menu'>
          <LanguageSelector style={{ fontSize: '40px' }} />
        </Col>
        <Col span={10} className='col-skills'>
          <Skills />
        </Col>
      </Row>
    </div>
  );
};

export default App;
