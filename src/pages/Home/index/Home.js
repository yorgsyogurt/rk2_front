import React from 'react';
import 'antd/dist/antd.css';
import './Home.css';
import {Layout, Menu, Breadcrumb} from 'antd';
import {Link} from "react-router-dom";
import {NavbarMenuItems} from "../../../utils/constants";
import MainRoute from "../../../utils/Routing/MainRoute";


const { Header, Content, Footer } = Layout;

export default ({component: ComponentLayout, title, ...rest}) => {

    return (
        <Layout style={{minHeight:'50vw'}}>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%', display: 'flex' }}>
                <Link to="/">
                    <div >
                        <img src={"https://bitlab.kz/images/logo.png"}/>
                    </div>
                </Link>
                <Menu theme="dark" mode="horizontal" >
                    {NavbarMenuItems.map(
                        (page, index) =>
                            <Menu.Item key={index}> <Link to={page.url}> {page.title} </Link> </Menu.Item>
                    )}
                </Menu>
            </Header>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    {/*<Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 570 }}>
                    {rest.children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center', bottom:0, width:'100%' }}> Contester ©2021 Created by <a href="https://vk.com/yorgsyogurt">yorgsyogrt</a> </Footer>
        </Layout>
    );
}