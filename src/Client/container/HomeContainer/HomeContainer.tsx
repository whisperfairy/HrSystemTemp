/**
 *
 * HomeContainer 文件作用
 * @author hurong <353486474@qq.com>
 * @date 2017/9/11
 *
 * @内容 作用
 * @内容 作用
 */


'use strict'
import React, {PureComponent} from 'react';
import './HomeContainer.scss';
import { Layout } from 'antd';
import projectComp from '../../container/ProjectContainer/ProjectContainer'
import WeekPlanListContainer from '../weekPlanListContainer/WeekPlanListContainer'
import {SiderComponent} from '../../component/Sider/SiderComponent'
import {Route,Switch} from 'react-router-dom'
const { Header, Footer, Sider, Content } = Layout;
export interface IHomeContainerProps {
}

const HomeContainer: React.SFC<IHomeContainerProps> = (props) => {
    return (
        <Layout>
            <Sider width="260" style={{minHeight:'100vh'}}><SiderComponent theme="light" color="orange"/></Sider>
            <Layout>
                <Header className="home_header">中控系统</Header>
                <Content>
                    <Switch>
                    {/*<LightComp/>*/}
                    <Route path="/" exact component={projectComp}/>
                    <Route path='/project/week_list' component={WeekPlanListContainer}></Route>
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    );
};
export default HomeContainer;