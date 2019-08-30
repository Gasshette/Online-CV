import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Components/Home';
import { Displayer } from './Displayer';
import Header from './Header';
import { Layout, Skeleton, Empty, Row, Col } from 'antd';
import Skills from '../Components/Skills';
import Profile from '../Components/Profile';

import LanguageSelector from './LanguageSelector';
import './App.scss';


const App: React.FC = () => {
  return (
    <div className='app'>
      <Row type='flex' style={{alignItems: 'strech'}}>
        <Col span={10} className="col-profile">
            <Profile />
        </Col>
        <Col span={4} className="col-menu">
          <LanguageSelector style={{fontSize: '40px'}} />
        </Col>
        <Col span={10} className="col-skills">
          <Skills />
        </Col>
      </Row>
    </div>
  );
};

export default App;
