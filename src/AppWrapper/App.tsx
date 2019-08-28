import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Components/Home';
import { Displayer } from './Displayer';
import Header from './Header';
import { Layout, Skeleton, Empty } from 'antd';
import Skills from '../Components/Skills';
import Profile from '../Components/Profile';

import './App.scss';
import LanguageSelector from './LanguageSelector';

const App: React.FC = () => {
  const { Content, Sider } = Layout;

  return (
    <Router>
      <Layout>
        <Layout>
        <Header />
          <Content>
            <Displayer>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/profile' component={Profile} />
                <Route path='/skills' component={Skills} />
              </Switch>
            </Displayer>
          </Content>
        </Layout>
        <Sider width='350'>
            <div className='fake-header'>
              <LanguageSelector />
            </div>
            <div className='sider-content'>
              <Skeleton active avatar paragraph={{ rows: 10 }} />
            </div>
          </Sider>
      </Layout>
    </Router>
  );
};

export default App;
