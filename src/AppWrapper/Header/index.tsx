import React from 'react';
import { Layout } from 'antd';
import Menu from '../NavBar';

import './styles.scss';

const Header: React.FC = () => {

  const { Header } = Layout;

  return (
    <Header className="clearfix">
      <div className='logo'>Template Typescript</div>
      <Menu />
    </Header>
  );
};

export default Header;
