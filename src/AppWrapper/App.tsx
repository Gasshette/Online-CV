import React from 'react';
import { Row, Col, Affix, BackTop } from 'antd';
import Skills from '../Components/Skills';
import Profile from '../Components/Profile';
import LanguageSelector from './LanguageSelector';
import './styles.scss';
import './stylesSmallScreen.scss';

class App extends React.Component {
  public state: any;

  constructor(props: any) {
    super(props);

    this.state = {
      isDesktop: false
    };
  }

  /**
   * size is defined by the component : https://ant.design/components/grid/#Col
   */
  componentDidMount() {
    this.setState({ ...this.state, isDesktop: window.innerWidth > 992 });
  }

  render() {
    return (
      <div className='app'>
        <Row type='flex' style={{ alignItems: 'strech' }}>
          {!this.state.isDesktop ? (
            <Col span={24} className='col-menu'>
              <LanguageSelector style={{ fontSize: '40px' }} />
            </Col>
          ) : (
            ''
          )}
          <Col xs={24} lg={10} className='col-profile'>
            <Profile />
          </Col>
          {this.state.isDesktop ? (
            <Col span={4} className='col-menu'>
              <Affix offsetTop={30}>
                <LanguageSelector style={{ fontSize: '40px' }} />
              </Affix>
            </Col>
          ) : (
            ''
          )}
          <Col xs={24} lg={10} className='col-skills'>
            <Skills />
          </Col>
        </Row>

        <span className='back-top'>
          <BackTop />
        </span>
      </div>
    );
  }
}

export default App;
