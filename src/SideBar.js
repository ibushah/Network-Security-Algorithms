
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Icon } from 'antd';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Row, Col } from 'antd'

import Cipher from './Cipher'


const { Header, Sider, Content } = Layout;

export default class SiderDemo extends React.Component {




    state = {
        collapsed: false,
       
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (

            <Layout style={{ height: '100vh' }}>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div style={{ height: '60px' }}>
                        {!this.state.collapsed && <h2 style={{ color: 'white', textAlign: 'center', lineHeight: '65px', fontWeight: 'bold', fontStyle: 'italic', fontSize: '22px' }}>CRYPTOGRAPHY</h2>}
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>

                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span>Shift Cipher</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span>nav 3</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            style={{ marginLeft: '20px', fontSize: '18px' }}
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280,
                        }}
                    >
                        <Row>
                            <Col lg={24} md={24}  xl={24}>
                                <BrowserRouter>

                                    <Switch>
                                        <Route exact path="/" component={Cipher} />
                                    </Switch>
                                </BrowserRouter>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
            </Layout>

        );
    }
}

// export default ReactDOM.render(<SiderDemo />, document.getElementById('container'));
