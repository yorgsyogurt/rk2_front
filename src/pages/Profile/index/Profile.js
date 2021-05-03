import React from 'react';
import 'antd/dist/antd.css';
import './Profile.css';
import {Layout, Menu, Breadcrumb} from 'antd';
import {Link} from 'react-router-dom';

import {
    PieChartOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {SiderMenuItems} from "../../../utils/constants";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default ({component: ComponentLayout, title, ...rest}) => {

    document.title = title;

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible>
                <Link to="/">
                    <div style={{textAlign: 'center', marginTop: '20px', marginBottom: '20px'}}>
                        <img src={"https://bitlab.kz/images/logo.png"} />
                    </div>
                </Link>

                <Menu theme="dark" mode="inline" >
                    {SiderMenuItems.map(
                        (page, index) =>
                            <Menu.Item key={index} icon={<PieChartOutlined />}> <Link to={page.url}> {page.title} </Link> </Menu.Item>
                    )}
                </Menu>

                {/*<Menu theme="dark" mode="inline">*/}
                {/*    <Menu.Item key="2" icon={<PieChartOutlined />}>*/}
                {/*        <Link to="/profile/edit"> Edit profile </Link>*/}
                {/*    </Menu.Item>*/}
                {/*    /!*local storage take role and if (role == "admin")*!/*/}
                {/*    <Menu.Item key="3" icon={<PieChartOutlined />}>*/}
                {/*        <Link to="/profile/users"> Users </Link>*/}
                {/*    </Menu.Item>*/}
                {/*    <Menu.Item key="4" icon={<PieChartOutlined />}>*/}
                {/*        <Link to="/profile/tasks"> Tasks </Link>*/}
                {/*    </Menu.Item>*/}
                {/*    <Menu.Item key="5" icon={<PieChartOutlined />}>*/}
                {/*        <Link to="/profile/submissions"> Submissions </Link>*/}
                {/*    </Menu.Item>*/}
                {/*    /!*<SubMenu key="sub1" icon={<UserOutlined />} title="ABC">*!/*/}
                {/*    /!*    <Menu.Item key="">Tom</Menu.Item>*!/*/}
                {/*    /!*    <Menu.Item key="">Bill</Menu.Item>*!/*/}
                {/*    /!*    <Menu.Item key="">Alex</Menu.Item>*!/*/}
                {/*    /!*</SubMenu>*!/*/}
                {/*    */}
                {/*</Menu>*/}
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        {rest.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Contester ©2021 Created by <a href="https://vk.com/yorgsyogurt">yorgsyogrt</a></Footer>
            </Layout>
        </Layout>
    );
}